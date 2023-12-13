import React from 'react';

import { MainPage as Page } from '@/components/MainPage';

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

export default async function MainPage(props: any) {
  const locales = await getServerSideProps();
  return <Page locales={locales} />;
};
