import React from 'react';

import { initI18n } from './locales';

import { MainPage as Page } from '@/components/MainPage';

async function getServerSideProps() {
  const response = await fetch(process.env.API_URL + '/api/locales');
  const data = await response.json();
  return data.locales;
}

export default async function MainPage() {
  const locales = await getServerSideProps();
  const i18n = initI18n(locales);

  return <Page i18n={i18n} />;
};
