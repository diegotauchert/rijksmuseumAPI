import { createContext } from "react";
import { CollectionContextInterface } from "./interfaces/CollectionContextInterface";

export const CollectionContext = createContext<CollectionContextInterface>({} as CollectionContextInterface);