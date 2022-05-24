import React, { useEffect, useState, useCallback } from 'react';
import { useIntl } from 'react-intl';
import CollectionService from '../services/CollectionService';
import { CollectionInterface } from '../interfaces/CollectionInterface';
import { CollectionContext } from '../contexts/CollectionContext';

type IAppProviderProps = {
  children: React.ReactNode;
}

const PAGE_DEFAULT = 1;

export default function AppProvider({ children }: IAppProviderProps) {
  const CollectionServiceInstance = new CollectionService();
  const [collectionsFetch, setCollectionsFetch] = useState<CollectionInterface[]>([] as CollectionInterface[]);
  const [collections, setCollections] = useState<CollectionInterface[]>([] as CollectionInterface[]);
  const [message, setMessage] = useState<string>('' as string);
  const [page, setPage] = useState<number>(PAGE_DEFAULT);
  const intl = useIntl();

  const fetchData = useCallback((offset: number, filter?:string) => {
    CollectionServiceInstance.fetchCollections(offset, filter).then((res:CollectionInterface[]) => {
      setCollectionsFetch(res)
      setCollections(res)
    }).finally(() => setMessage(''))
  }, [])

  useEffect(() => {
    setMessage(intl.formatMessage({ id: 'text.loading' }));
    fetchData(page, '')

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

  const searchApi = (filter: string) => {
    fetchData(page, filter)
  }

  const scrollToTop = () => {
    try{
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
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
    <CollectionContext.Provider value={{ collections, search, searchApi, message, handleClickPrev, handleClickNext, page }}>
      {children}
    </CollectionContext.Provider>
  );
}