import '@testing-library/jest-dom';
import { server } from './mocks/server';

beforeAll(() => {
  server.listen()

  // jest.useFakeTimers();
});

afterEach(() => server.resetHandlers());

afterAll(() => server.close());