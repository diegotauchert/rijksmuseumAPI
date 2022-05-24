import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import SearchPagination from './SearchPagination';
import SearchResult from './SearchResult';

const StyledSearchContent = styled.div`
  padding: 1rem;
  margin: 0 auto;
  width: 70%;
  min-width: 75vmin;
`;

function SearchContent() {
  return (
    <StyledSearchContent>
      <SearchBar />
      <SearchResult />
      <SearchPagination />
    </StyledSearchContent>
  )
}
    
export default SearchContent;