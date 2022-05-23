import React, { memo } from 'react';
import { useIntl } from 'react-intl';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: ${(props) => props.color};
  text-align: center;
  color: white;
  padding: 1rem;
`;

const StyledTitle = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
`;

const StyledImg = styled.img`
  width: 120px;
  filter: brightness(0) invert(1);
`;

function Header() {
  const intl = useIntl();

  return (
    <StyledHeader color="black">
      <header>
        <StyledTitle>
          <StyledImg src="/logo.svg" alt={intl.formatMessage({ id: 'app.title' })} title={intl.formatMessage({ id: 'app.title' })} />
        </StyledTitle>
      </header>
    </StyledHeader>
  )
}
    
export default memo(Header);