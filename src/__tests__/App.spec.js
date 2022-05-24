import React from 'react';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from "react-router-dom";
import {createMemoryHistory} from 'history'
import App from '../App';

describe('Header', () => {
  it('Should render header', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    
    const title = screen.getByRole('heading', {
      name: /Rijks Museum/i
    });
    expect(title).toBeInTheDocument();
  });
});

describe('Articles', () => {
  it.only('Should render searchbar', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const title = screen.getByText(/type search query term in here:/i)
    expect(title).toBeInTheDocument();
    debug(undefined, 1000000)

    expect(screen.getByRole('img', {
      name: /search icon/i
    })).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/type here \.\.\./i)).toBeInTheDocument();
  });

  it('Should render articles', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    
    expect(screen.getByText(/results/i)).toBeInTheDocument();

    await waitFor(() => expect(screen.getByRole("progressbar")).toBeInTheDocument())
    await waitForElementToBeRemoved(() => screen.queryByRole("progressbar"))
    await waitFor(() => expect(screen.queryByRole("progressbar")).not.toBeInTheDocument())
    
    expect(screen.getAllByRole('article').length).toEqual(10)
    expect(screen.getByRole('link', { name: /Mock article 123/i })).toBeInTheDocument()
  });

  it('Should render prev and next button, and click next and prev page', async () => {
    const history = createMemoryHistory()

    render(
      <BrowserRouter history={history}>
        <App />
      </BrowserRouter>
    );

    const prevButton = screen.getByRole('button', { name: /‹ prev page/i })
    const nextButton = screen.getByRole('button', { name: /next page ›/i })

    expect(prevButton).toBeInTheDocument();
    expect(prevButton).toBeDisabled();

    expect(nextButton).toBeInTheDocument();
    userEvent.click(nextButton);

    await waitFor(() => expect(screen.getByRole("progressbar")).toBeInTheDocument());
    await waitForElementToBeRemoved(() => screen.queryByRole("progressbar"))
    await waitFor(() => expect(screen.queryByRole("progressbar")).not.toBeInTheDocument());

    await waitFor(() => expect(screen.getByRole('link', { name: /Mock 2 article 123/i })).toBeInTheDocument())

    userEvent.click(prevButton);

    await waitFor(() => expect(screen.getByRole("progressbar")).toBeInTheDocument());
    await waitForElementToBeRemoved(() => screen.queryByRole("progressbar"))
    await waitFor(() => expect(screen.queryByRole("progressbar")).not.toBeInTheDocument());

    expect(screen.getByRole('link', { name: /Mock article 123/i })).toBeInTheDocument()
  });

  it('Should render inner page of article and go back to results page', async () => {
    const history = createMemoryHistory()

    render(
      <BrowserRouter history={history}>
        <App />
      </BrowserRouter>
    );

    await waitFor(() => expect(screen.getByRole("progressbar")).toBeInTheDocument());
    await waitForElementToBeRemoved(() => screen.queryByRole("progressbar"))
    await waitFor(() => expect(screen.queryByRole("progressbar")).not.toBeInTheDocument());

    const article = screen.getByRole('link', { name: /Mock article 123/i });

    expect(article).toBeInTheDocument()

    userEvent.click(article);

    await waitFor(() => expect(screen.getByText(/Loading.../i)).toBeInTheDocument());
    await waitFor(() => expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument());

    expect(screen.getByRole('button', { name: /‹ go to results page/i })).toBeInTheDocument()

    await waitFor(() => expect(screen.getByRole('heading', { name: /Mock article 123 inner page mock/i })).toBeInTheDocument())

    userEvent.click(screen.getByRole('button', { name: /‹ go to results page/i }))

    await waitFor(() => expect(screen.getByRole('link', { name: /Mock article 123/i })).toBeInTheDocument())
  });

  it('Should filter typing in searchbar', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const inputSearch = screen.getByPlaceholderText(/type here \.\.\./i);
    const buttonSearch = screen.getByRole('img', { name: /search icon/i })

    expect(inputSearch).toBeInTheDocument();
    expect(buttonSearch).toBeInTheDocument();

    await waitFor(() => expect(screen.getByRole("progressbar")).toBeInTheDocument())
    await waitForElementToBeRemoved(() => screen.queryByRole("progressbar"))
    await waitFor(() => expect(screen.queryByRole("progressbar")).not.toBeInTheDocument())

    await waitFor(() => userEvent.type(inputSearch, 'mock'));
    expect(inputSearch).toHaveValue('mock')

    expect(screen.getAllByRole('article').length).toEqual(1)

    inputSearch.setSelectionRange(0, inputSearch.value.length)
    await waitFor(() => userEvent.type(inputSearch, 'mocksss'));
    expect(inputSearch).toHaveValue('mocksss')

    expect(screen.queryAllByRole('article').length).toEqual(0)
    expect(screen.getByText(/no result found/i)).toBeInTheDocument()

    inputSearch.setSelectionRange(0, inputSearch.value.length)
    userEvent.type(inputSearch, 'mo')
    expect(inputSearch).toHaveValue('mo')

    await waitFor(() => expect(screen.queryByText(/no result found/i)).not.toBeInTheDocument())
    expect(screen.queryAllByRole('article').length).toEqual(4)
  });
});
