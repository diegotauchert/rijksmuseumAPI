import React, { useEffect, useState, useRef, useCallback } from 'react';
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
  const [CollectionsFetch, setCollectionsFetch] = useState<CollectionInterface[]>([] as CollectionInterface[]);
  const [collections, setCollections] = useState<CollectionInterface[]>([] as CollectionInterface[]);
  const [message, setMessage] = useState<string>('' as string);
  const [page, setPage] = useState<number>(PAGE_DEFAULT);
  const divRef = useRef<null | HTMLDivElement>(null);
  const intl = useIntl();

  const fetchData = useCallback(async (filter?:string, offset: number = 10) => {
    await CollectionServiceInstance.fetchCollections(offset, filter).then((res:CollectionInterface[]) => {
      setCollectionsFetch(res)
      setCollections(res)
    }).finally(() => setMessage(''))
  }, [])

  useEffect(() => {
    setMessage(intl.formatMessage({ id: 'text.loading' }));
    fetchData('', page)

    return () => {
      setCollectionsFetch([] as CollectionInterface[]);
      setCollections([] as CollectionInterface[]);
      setMessage('' as string)
    }
  }, [page])

  const search = (value: string) => {
    if(value){
      const cloneCollections = [...CollectionsFetch]
      const filteredCollections = cloneCollections.filter((Collection: CollectionInterface) => Collection.title.toLowerCase().includes(value.toLowerCase()))
      setCollections(filteredCollections)

      if(filteredCollections.length === 0){
        setMessage(intl.formatMessage({ id: 'text.resultNotFound' }))
      }
    } else {
      setCollections(CollectionsFetch)
    }
  }

  const searchApi = (filter: string) => {
    fetchData(filter, page)
  }

  const scrollToTop = () => {
    try{
      divRef.current!.scrollIntoView({ behavior: 'smooth' });
    // eslint-disable-next-line no-empty
    }catch(e){}
  }

  const handleClickPrev = () => {
    setPage(el => el - 1)
    scrollToTop()
  }

  const handleClickNext = () => {
    setPage(el => el + 1)
    scrollToTop()
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CollectionContext.Provider value={{ collections, search, searchApi, message, handleClickPrev, handleClickNext, page, divRef }}>
      {children}
    </CollectionContext.Provider>
  );
}