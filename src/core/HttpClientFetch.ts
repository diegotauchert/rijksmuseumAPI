/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
import { HttpClientInterface } from './interfaces/HttpClientInterface';

export default class HttpClientFetch implements HttpClientInterface {

  public async get(url: string): Promise<Response> {
    return fetch(url, {
      method: 'GET',
    })
  }

  public async post(url: string, data: Object): Promise<Response> {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  public async put(url: string, data: Object): Promise<Response> {
    return fetch(url, {
      method: 'PUT',
      body: JSON.stringify(data)
    })
  }

  public async delete(url: string): Promise<Response> {
    return fetch(url, {
      method: 'DELETE',
    })
  }
}
