"use client";
import React from 'react';

import {
  MainOffer,
  Advantages,
  Costs,
  Cleaning,
  PriceByPhoto,
  Promotions,
  FAQ,
  Reviews,
  Order,
} from '@/components/MainPage';

const MainPage = () => {
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

export default MainPage;
