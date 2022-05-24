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
    const format: string = `json`;
    const sort: string = `achronologic`
    const hexadecimal: string = `000000`;
    const encodeHash: string = encodeURIComponent('#')

    let url = `${this.baseUrl}/collection?key=${this.apiKey}&p=${Number(offset)}&ps=12&s=${sort}&format=${format}&f.normalized32Colors.hex=${encodeHash}${hexadecimal}`;

    if(filter){
      url += `&q=${filter}`;
    }
    
    try {
      const response = await this.http.get(url);
      const payload = await response.json();

      const data = payload?.artObjects

      return CollectionFactory.builder(data);
    }catch(error){
      throw new Error(`Something went wrong: ${error}`);
    }
  }
}