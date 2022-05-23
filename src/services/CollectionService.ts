/* eslint-disable no-async-promise-executor */
import HttpClientFetch from '../core/HttpClientFetch';
import { HttpClientInterface } from '../core/interfaces/HttpClientInterface';
import CollectionFactory from '../factories/CollectionFactory';
import { CollectionInterface } from '../interfaces/CollectionInterface';

export default class CollectionService {

  http: HttpClientInterface;

  constructor() {
    this.http = new HttpClientFetch();
  }

  private baseUrl = process.env.REACT_APP_API_URL;

  private apiKey = process.env.REACT_APP_API_KEY;

  public async fetchCollections(offset: number, filter?: string): Promise<CollectionInterface[]> {
    const format = `json`;
    const sort = `achronologic`

    let url = `${this.baseUrl}/collection?key=${this.apiKey}&ps=${Number(offset)}&s=${sort}&format=${format}`;

    if(filter){
      url += `&q=${filter}`;
    }
    
    try {
      const response = await this.http.get(url);
      const payload = await response.json();
      const data = payload?.artObjects

      return CollectionFactory.builder(data); 
    }catch(error){
      throw new Error('Something went wrong')
    }
  }
}