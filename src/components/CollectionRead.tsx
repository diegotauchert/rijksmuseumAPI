import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FormattedMessage, useIntl } from 'react-intl';
// import { decodePipe } from '../helpers/utils';
// import CollectionService from '../services/CollectionService';
// import { CollectionInterface } from '../interfaces/CollectionInterface';

const StyledSingleCollection = styled.div`
  padding: 1rem;
  margin: 4rem auto 0 auto;
  width: 70%;
  min-width: 75vmin;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: #3979F2;
  font-weight: 700;
  text-decoration: underline;
  cursor: pointer;
  font-size: 1rem;
  display: block;
  margin-bottom: 1.3rem;
`;

const StyledMainTitle = styled.h1`
  font-size: 2.25rem;
  margin-bottom: 1.5rem;
`;

const StyledWarning = styled.p`
  color: #000;
  font-size: 1.25rem;
  font-weight: 600;
`;

const StyledDate = styled.span`
  display: block;
  color: #333;
  margin-bottom: 1.5rem;
  font-style: italic;
  letter-spacing: 0.025rem;
`;

const StyledParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.5rem;
  margin-bottom: 2rem;
`;

function CollectionRead() {
  // const CollectionServiceInstance = new CollectionService();
  const { id } = useParams();
  const navigate = useNavigate();
  // const [collection, setCollection] = useState<CollectionInterface>({} as CollectionInterface);
  const collection:any = [];
  const [message, setMessage] = useState<string>('');
  const intl = useIntl();

  // const fetchSingleCollection = useCallback(async (CollectionId: string) => {
  //   await CollectionServiceInstance.getSingleCollection(CollectionId).then((res:CollectionInterface) => {
  //     setCollection(res)
  //   }).finally(() => setMessage(''))
  // }, [])

  useEffect(() => {
    if(id){
      setMessage(intl.formatMessage({ id: 'text.loading' }));
      // fetchSingleCollection(decodePipe(id))
    }
  }, [id])

  return (
    <StyledSingleCollection>
      <StyledButton type='button' onClick={() => navigate(-1)}>
        &lsaquo; <FormattedMessage id="btn.backPage" />
      </StyledButton>

      {collection && collection.title ? 
      <>
        <StyledMainTitle>{collection.title}</StyledMainTitle>
        <StyledDate>{collection.id}</StyledDate>
        <StyledParagraph>{collection.description}</StyledParagraph>
        <a href={collection.link} target='_blank' rel='noopener noreferrer'>
          <StyledButton type='button'>
            <FormattedMessage id="btn.readFull" />
          </StyledButton>
        </a>
      </>
      : 
      <StyledWarning>{message}</StyledWarning>
      }
      
    </StyledSingleCollection>
  )
}
    
export default CollectionRead;