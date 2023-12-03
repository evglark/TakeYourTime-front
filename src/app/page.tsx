"use client";
import React from 'react';

import { i18n } from './locales';

import {
  MainOffer,
  Advantages,
  Cleaning,
  Costs,
  PriceByPhoto,
  Promotions,
  FAQ,
  Reviews,
  Order,
} from '@/components/MainPage';

async function getServerSideProps() {
  const response = await fetch('http://localhost:5001/api/locals');
  const data = await response.json();
  return data.locales;
}

export default async function MainPage() {
  // const locales = await getServerSideProps();
  // const { t } = i18n('ru', locales);
  // console.log(t('Hello'));

  return (
    <div className="main-page">
      <MainOffer />
      <Advantages />
      <Costs />
      <Cleaning />
      <PriceByPhoto />
      <Promotions />
      <FAQ />
      <Reviews />
      <Order />
    </div>
  );
};
