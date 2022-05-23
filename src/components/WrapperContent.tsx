import React, { ReactNode } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../assets/globalStyles';
import AppProvider from '../providers/AppProvider';
import LocaleProvider from '../providers/LocaleProvider';

const StyledWrapper = styled.div`
  margin: 2.5rem auto;
  border: 1px solid #ccc;
  padding-bottom: 1rem;
  width: 90%;
  min-height: 88vh;
`;

type IPropType = {
  children: ReactNode;
}

export default function WrapperContent({children}: IPropType) {
  return (
    <StyledWrapper>
      <GlobalStyle />
      
      <LocaleProvider>
        <AppProvider>
          {children}
        </AppProvider>
      </LocaleProvider>
    </StyledWrapper>
  )
}