/* eslint-disable no-underscore-dangle */
import { CollectionInterface, CollectionApiResponse, CollectionSingleApiResponse } from "../interfaces/CollectionInterface";

export default class CollectionFactory {
  
  static builder(payload:CollectionApiResponse[]): CollectionInterface[] {
    const collections: CollectionInterface[] = [];

    payload.map((collection:CollectionApiResponse) => 
      collections.push({
        id: collection.objectNumber,
        link: collection.links.web,
        title: collection.title,
        description: collection.longTitle,
        image: collection?.webImage?.url,
        hasImage: collection.hasImage,
      })
    );

    return collections;
  }

  static builderSingle(payload: CollectionSingleApiResponse): CollectionInterface {
    const collection: CollectionInterface = {
      id: payload.objectNumber,
      link: payload.links.search,
      title: payload.title,
      description: payload.description,
      image: payload?.webImage?.url,
      hasImage: payload.hasImage,
      date: payload.acquisition.date,
    };

    return collection;
  }
}