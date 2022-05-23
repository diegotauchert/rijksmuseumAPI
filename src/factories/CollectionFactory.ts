/* eslint-disable no-underscore-dangle */
import { CollectionInterface, CollectionApiResponse } from "../interfaces/CollectionInterface";

export default class CollectionFactory {
  
  static builder(payload:CollectionApiResponse[]): CollectionInterface[] {
    const Collections: CollectionInterface[] = [];

    payload.map((Collection:CollectionApiResponse) => 
      Collections.push({
        id: Collection.id,
        link: Collection.links.web,
        title: Collection.title,
        description: Collection.longTitle,
        image: Collection?.webImage?.url,
      })
    );

    return Collections;
  }
}