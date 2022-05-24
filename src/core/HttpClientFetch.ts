/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
import { HttpClientInterface } from './interfaces/HttpClientInterface';

export default class HttpClientFetch implements HttpClientInterface {

  public get(url: string): Promise<Response> {
    return fetch(url, {
      method: 'GET',
    })
  }

  public post(url: string, data: Object): Promise<Response> {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  public put(url: string, data: Object): Promise<Response> {
    return fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data)
    })
  }

  public delete(url: string): Promise<Response> {
    return fetch(url, {
      method: 'DELETE',
    })
  }
}
