import React from 'react';

import { MainPage as Page } from '@/components/MainPage';

async function getServerSideProps() {
  const response = await fetch(process.env.API_URL + '/api/locales', {
    method: 'GET',
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  return data.locales;
}

export default async function MainPage() {
  const locales = await getServerSideProps();

  return <Page locales={locales} />;
};
