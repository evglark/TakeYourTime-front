'use client';
import React, { useState, createContext } from 'react';

interface Props {
  children: React.ReactNode,
}

export const LocaleContext = createContext({
  locale: 'en',
  setNewLocal: (locale: string) => {},
});

export const Providers = ({ children }: Props) => {
  const [locale, setNewLocal] = useState('en');

  return (
    <LocaleContext.Provider value={{ locale, setNewLocal }}>
      {children}
    </LocaleContext.Provider>
  );
};
