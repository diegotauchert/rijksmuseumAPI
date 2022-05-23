import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { normalizeUrl, encodePipe } from '../helpers/utils';
import { CollectionInterface } from '../interfaces/CollectionInterface';

const StyledSearchItem = styled.article`
  padding: 1.2rem;
  background-color: #F8F8F8;
  border: 1px solid #D1D1D1;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #EEE;
  }
`;

const StyledTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 0.75rem;
`;

type ISearchItemProps = {
  item: CollectionInterface
}

function SearchItem({item}: ISearchItemProps) {
  return (
    <Link 
      to={`/collection/${normalizeUrl(item.title)}/${encodePipe(item.id)}`} 
      style={{textDecoration: 'none'}} 
    >
      <StyledSearchItem>
        <StyledTitle>
          <img src="/favicon.ico" alt="Collection icon" width={20} height={20} />
          {item.title}
        </StyledTitle>
      </StyledSearchItem>
    </Link>
  )
}
    
export default SearchItem;