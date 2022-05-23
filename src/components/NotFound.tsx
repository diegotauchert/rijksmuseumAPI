import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledDiv = styled.div`
  padding: 1rem;
  margin: 4rem auto 0 auto;
  width: 70%;
  min-width: 75vmin;
  font-weight: 700;
  text-align: center;
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

function NotFound() {
  const navigate = useNavigate();

  return (
    <StyledDiv>
      <StyledButton type='button' onClick={() => navigate(-1)}>
        &lsaquo; <FormattedMessage id="btn.backPage" />
      </StyledButton>
      <FormattedMessage id="error.notFound" />
    </StyledDiv>
  )
}
    
export default NotFound;