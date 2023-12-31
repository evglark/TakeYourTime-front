import React from 'react';

import { Providers } from '@/components/Providers';
import { Header } from '@/components/Header';
import { MainPage } from '@/components/MainPage';

import { getServerSideProps } from './action';

export default async function Page(props: any) {
  const locales = await getServerSideProps();

  return (
    <Providers>
      <Header locales={locales} />
      <main>
        <MainPage locales={locales} />
      </main>
    </Providers>
  );
};
