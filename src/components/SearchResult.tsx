import React, { memo, useContext } from 'react';
import styled from 'styled-components';
import { FormattedMessage, useIntl } from 'react-intl';
import SearchItem from './SearchItem';
import { CollectionContext } from '../contexts/CollectionContext';
import { CollectionContextInterface } from '../contexts/interfaces/CollectionContextInterface';
import { CollectionInterface } from '../interfaces/CollectionInterface';
import Skeleton from './Skeleton';
import { isHexadecimal } from '../helpers/utils';

const StyledSearchResult = styled.div`
  margin-top: 2rem;
`;

const StyledHexadecimal = styled.div`
  background-color: #${(props) => props.color};
  width: 1.7rem;
  height: 1.7rem;
  display: inline-block;
  vertical-align: middle;
  margin-left: 0.5rem;
`;

const StyledTitle = styled.label`
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

const StyledSmall = styled.small`
  font-size: 0.9rem;
  font-weight: 700;
`;

function SearchResult() {
  const { collections, page, message, filterMessage } = useContext<CollectionContextInterface>(CollectionContext);
  const intl = useIntl();

  const resultTextFilter = isHexadecimal(filterMessage) ? <StyledHexadecimal color={filterMessage} /> : <StyledSmall>{filterMessage}</StyledSmall>;
  
  return (
    <StyledSearchResult>
      <div>
        <StyledTitle htmlFor='search-input'>
          <FormattedMessage id="title.result" />
          { filterMessage && <span>Filtered by: { resultTextFilter }</span> }
          <small>Page: {page}</small>
        </StyledTitle>
        <div role="feed">
          {
            collections?.length > 0 ? 
              collections.map((item:CollectionInterface, index: number) => (
                <SearchItem item={item} key={item.id} number={(index+1)} />
              )) 
            : 
            <div>
              { message !== intl.formatMessage({ id: 'text.loading' }) ? <strong>{message}</strong> : <Skeleton /> }
            </div>
          }
        </div>
      </div>
    </StyledSearchResult>
  )
}
    
export default memo(SearchResult);