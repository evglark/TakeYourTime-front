import React from 'react';

import { Providers } from '@/components/Providers';
import { Header } from '@/components/Header';
import { MainPage } from '@/components/MainPage';

async function getServerSideProps() {
  const response = await fetch(process.env.API_URL + '/api/locales', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  const data = await response.json();
  return data.locales;
}

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
