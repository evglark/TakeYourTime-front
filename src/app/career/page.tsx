import React from 'react';

import { Providers } from '@/components/Providers';
import { CareerPage as Page } from '@/components/CareerPage';
import { Header } from '@/components/Header';

import { getServerSideProps } from '../action';

export default async function CareerPage() {
  const locales = await getServerSideProps();

  return (
    <Providers>
      <Header locales={locales} />
      <main>
        <Page locales={locales} />
      </main>
    </Providers>
  );
};
