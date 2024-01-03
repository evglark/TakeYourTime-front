import React from 'react';

import { Providers } from '@/components/Providers';
import { Header } from '@/components/Header';
import { OrderPage as Page } from '@/components/OrderPage';

import { getServerSideProps } from '../action';

export default async function OrderPage() {
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
