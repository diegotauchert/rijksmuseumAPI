import React, { ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import en from '../locales/en.json';

type ILocaleProviderProps = {
  children: ReactNode;
}

export default function LocaleProvider({ children }: ILocaleProviderProps) {
  return (
    <IntlProvider locale="en" messages={en}>
      {children}
    </IntlProvider>
  );
}