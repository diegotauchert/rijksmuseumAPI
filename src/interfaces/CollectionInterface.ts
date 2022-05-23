export interface Links {
    self: string;
    web: string;
}

export interface WebImage {
    guid: string;
    offsetPercentageX: number;
    offsetPercentageY: number;
    width: number;
    height: number;
    url: string;
}

export interface HeaderImage {
    guid: string;
    offsetPercentageX: number;
    offsetPercentageY: number;
    width: number;
    height: number;
    url: string;
}

export interface CollectionApiResponse {
  links: Links;
  id: string;
  objectNumber: string;
  title: string;
  hasImage: boolean;
  principalOrFirstMaker: string;
  longTitle: string;
  showImage: boolean;
  permitDownload: boolean;
  webImage: WebImage;
  headerImage: HeaderImage;
  productionPlaces: any[];
}

export interface CollectionInterface {
  id: string;
  link: string;
  title: string;
  description: string;
  image: string;
}