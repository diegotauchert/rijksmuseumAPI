import { RefObject } from 'react';
import { CollectionInterface } from "../../interfaces/CollectionInterface";

export interface CollectionContextInterface {
  collections: CollectionInterface[],
  search: Function,
  searchApi: Function,
  message: string,
  filterMessage: string,
  handleClickPrev: () => void,
  handleClickNext: () => void,
  page: number,
  divRef: RefObject<HTMLDivElement>,
}