import React, { ReactNode, useEffect, useRef, useState, useCallback } from 'react';
import { useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom'
import CollectionService from '../services/CollectionService';
import { CollectionInterface } from '../interfaces/CollectionInterface';
import { CollectionContext } from '../contexts/CollectionContext';
import { FilterTypeEnum } from '../enum/FilterTypeEnum';

type IAppProviderProps = {
  children: ReactNode;
}

const PAGE_DEFAULT: number = 1;
const FILTER_DEFAULT: string = '';
const FILTER_TYPE: FilterTypeEnum = 0;

export default function AppProvider({ children }: IAppProviderProps) {
  const CollectionServiceInstance = new CollectionService();
  const [collectionsFetch, setCollectionsFetch] = useState<CollectionInterface[]>([] as CollectionInterface[]);
  const [collections, setCollections] = useState<CollectionInterface[]>([] as CollectionInterface[]);
  const [message, setMessage] = useState<string>('' as string);
  const [filterMessage, setFilterMessage] = useState<string>('' as string);
  const [page, setPage] = useState<number>(PAGE_DEFAULT);
  const intl = useIntl();
  const navigate = useNavigate();
  const divRef = useRef<null | HTMLDivElement>(null);

  const fetchData = useCallback(async (offset: number, filter?: string, filterType?: FilterTypeEnum) => {
    await CollectionServiceInstance.fetchCollections(offset, filter, filterType).then((res:CollectionInterface[]) => {
      setCollectionsFetch(res)
      setCollections(res)
    }).finally(() => {
      setMessage(``)
      setFilterMessage(`${filter}`)
    })
  }, [])

  useEffect(() => {
    setMessage(intl.formatMessage({ id: 'text.loading' }));
    
    fetchData(page, FILTER_DEFAULT, FILTER_TYPE)

    return () => {
      setCollectionsFetch([] as CollectionInterface[]);
      setCollections([] as CollectionInterface[]);
      setMessage('' as string)
    }
  }, [page])

  const search = (value: string) => {
    if(value){
      const cloneCollections = [...collectionsFetch]
      const filteredCollections = cloneCollections.filter((Collection: CollectionInterface) => Collection.title.toLowerCase().includes(value.toLowerCase()))
      setCollections(filteredCollections)

      if(filteredCollections.length === 0){
        setMessage(intl.formatMessage({ id: 'text.resultNotFound' }))
      }
    } else {
      setCollections(collectionsFetch)
    }
  }

  const searchApi = (filter: string, filterType: FilterTypeEnum) => {
    fetchData(PAGE_DEFAULT, filter, filterType)
    setPage(PAGE_DEFAULT)
    navigate('/');
  }

  const scrollToTop = () => {
    try{
      divRef.current!.scrollIntoView();
    }catch(error){
      throw new Error(`Error on scroll to top: ${error}`)
    }
  }

  const handleClickPrev = () => {
    scrollToTop()
    setPage(el => el - 1)
  }

  const handleClickNext = () => {
    scrollToTop()
    setPage(el => el + 1)
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CollectionContext.Provider value={{ collections, search, searchApi, message, filterMessage, handleClickPrev, handleClickNext, page, divRef }}>
      {children}
    </CollectionContext.Provider>
  );
}