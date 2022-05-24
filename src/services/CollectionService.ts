/* eslint-disable no-async-promise-executor */
import HttpClientFetch from '../core/HttpClientFetch';
import { HttpClientInterface } from '../core/interfaces/HttpClientInterface';
import { FilterTypeEnum } from '../enum/FilterTypeEnum';
import CollectionFactory from '../factories/CollectionFactory';
import { CollectionInterface } from '../interfaces/CollectionInterface';

export default class CollectionService {

  http: HttpClientInterface;

  constructor() {
    this.http = new HttpClientFetch();
  }

  private baseUrl = process.env.REACT_APP_API_URL;

  private apiKey = process.env.REACT_APP_API_KEY;

  public async fetchCollections(offset: number, filter?: string, filterType?: FilterTypeEnum): Promise<CollectionInterface[]> {
    const format: string = `json`;
    const sort: string = `achronologic`
    const encodeHash: string = encodeURIComponent('#')

    let url = `${this.baseUrl}/collection?key=${this.apiKey}&p=${offset}&s=${sort}&format=${format}`;

    if(filter && filterType === FilterTypeEnum.COLOR) {
      url += `&f.normalized32Colors.hex=${encodeHash}${filter}`;
    }

    if(filter && filterType === FilterTypeEnum.TEXT) {
      url += `&q=${filter}`;
    }

    try {
      const response = await this.http.get(url);
      const payload = await response.json();
      const data = payload?.artObjects

      return CollectionFactory.builder(data || []);
    }catch(error){
      throw new Error(`Something went wrong: ${error}`);
    }
  }

  public async fetchSingleCollection(id: string): Promise<CollectionInterface> {
    const url = `${this.baseUrl}/collection/${id}?key=${this.apiKey}`;

    try {
      const response = await this.http.get(url);
      const payload = await response.json();
      const data = payload?.artObject

      return CollectionFactory.builderSingle(data || {});
    }catch(error){
      throw new Error(`Something went wrong: ${error}`);
    }
  }
}