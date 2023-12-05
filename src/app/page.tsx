"use client";
import React from 'react';

import { i18n } from './locales';

import { MainPage as Page } from '@/components/MainPage';

async function getServerSideProps() {
  const response = await fetch('http://localhost:5001/api/locals');
  const data = await response.json();
  return data.locales;
}

export default async function MainPage() {
  // const locales = await getServerSideProps();
  // const { t } = i18n('ru', locales);
  // console.log(t('Hello'));

  return <Page />;
};
