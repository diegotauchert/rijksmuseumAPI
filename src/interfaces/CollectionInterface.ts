interface Links {
    self: string;
    web: string;
}

interface LinksSearch {
  search: string;
}

interface WebImage {
    guid: string;
    offsetPercentageX: number;
    offsetPercentageY: number;
    width: number;
    height: number;
    url: string;
}

interface HeaderImage {
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
  hasImage: boolean;
  date?: Date;
}

export interface PrincipalMaker {
  name: string;
  unFixedName?: any;
  placeOfBirth?: any;
  dateOfBirth?: any;
  dateOfBirthPrecision?: any;
  dateOfDeath?: any;
  dateOfDeathPrecision?: any;
  placeOfDeath?: any;
  occupation: any[];
  roles: any[];
  nationality?: any;
  biography?: any;
  productionPlaces: any[];
  qualification?: any;
  labelDesc: string;
}

export interface Acquisition {
  method: string;
  date: Date;
  creditLine: string;
}

export interface Dating {
  presentingDate: string;
  sortingDate: number;
  period: number;
  yearEarly: number;
  yearLate: number;
}

export interface Classification {
  iconClassIdentifier: any[];
  iconClassDescription: any[];
  motifs: any[];
  events: any[];
  periods: any[];
  places: any[];
  people: any[];
  objectNumbers: string[];
}

export interface Dimension {
  unit: string;
  type: string;
  precision?: any;
  part?: any;
  value: string;
}

export interface Label {
  title?: any;
  makerLine?: any;
  description?: any;
  notes?: any;
  date?: any;
}

export interface CollectionSingleApiResponse {
  links: LinksSearch;
  id: string;
  priref: string;
  objectNumber: string;
  language: string;
  title: string;
  copyrightHolder?: any;
  webImage: WebImage;
  colors: any[];
  colorsWithNormalization: any[];
  normalizedColors: any[];
  normalized32Colors: any[];
  titles: string[];
  description: string;
  labelText?: any;
  objectTypes: string[];
  objectCollection: any[];
  makers: any[];
  principalMakers: PrincipalMaker[];
  plaqueDescriptionDutch?: any;
  plaqueDescriptionEnglish?: any;
  principalMaker: string;
  artistRole?: any;
  associations: any[];
  acquisition: Acquisition;
  exhibitions: any[];
  materials: string[];
  techniques: string[];
  productionPlaces: any[];
  dating: Dating;
  classification: Classification;
  hasImage: boolean;
  historicalPersons: any[];
  inscriptions: any[];
  documentation: string[];
  catRefRPK: any[];
  principalOrFirstMaker: string;
  dimensions: Dimension[];
  physicalProperties: any[];
  physicalMedium: string;
  longTitle: string;
  subTitle: string;
  scLabelLine: string;
  label: Label;
  showImage: boolean;
  location?: any;
}