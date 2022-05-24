import { CollectionInterface } from "../../interfaces/CollectionInterface";

export interface CollectionContextInterface {
  collections: CollectionInterface[],
  search: Function,
  searchApi: Function,
  message: string,
  handleClickPrev: () => void,
  handleClickNext: () => void,
  page: number,
}