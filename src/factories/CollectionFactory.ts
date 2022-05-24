/* eslint-disable no-underscore-dangle */
import { CollectionInterface, CollectionApiResponse } from "../interfaces/CollectionInterface";

export default class CollectionFactory {
  
  static builder(payload:CollectionApiResponse[]): CollectionInterface[] {
    const collections: CollectionInterface[] = [];

    payload.map((collection:CollectionApiResponse) => 
      collections.push({
        id: collection.id,
        link: collection.links.web,
        title: collection.title,
        description: collection.longTitle,
        image: collection?.webImage?.url,
      })
    );

    return collections;
  }
}