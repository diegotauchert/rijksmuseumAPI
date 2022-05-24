import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { CollectionContext } from '../contexts/CollectionContext';

const StyledDivButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.2rem;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: #3979F2;
  font-weight: 700;
  text-decoration: underline;
  cursor: pointer;
  font-size: 1rem;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

function SearchPagination() {
  const { handleClickPrev, handleClickNext, page } = useContext(CollectionContext)

  return (
    <StyledDivButton>
      <Link to={`/collections/${Math.round(page-1) || 1}`}>
        <StyledButton type='button' onClick={handleClickPrev} disabled={page === 1}>
          &lsaquo; <FormattedMessage id="btn.prev" />
        </StyledButton>
      </Link>

      {page > 1 &&
        <Link to="/collections/1">
          <StyledButton type='button' onClick={handleClickPrev} disabled={page === 1}>
            <FormattedMessage id="btn.home" />
          </StyledButton>
        </Link>
      }
      
      <Link to={`/collections/${page+1}`}>
        <StyledButton type='button' onClick={handleClickNext}>
          <FormattedMessage id="btn.next" /> &rsaquo;
        </StyledButton>
      </Link>
    </StyledDivButton>
  )
}
    
export default SearchPagination;