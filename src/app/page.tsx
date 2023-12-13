import React from 'react';

import { MainPage as Page } from '@/components/MainPage';

async function getServerSideProps() {
  const response = await fetch(process.env.API_URL + '/api/locales');
  const data = await response.json();
  return data.locales;
}

export default async function MainPage() {
  const locales = await getServerSideProps();

  return <Page locales={locales} />;
};
