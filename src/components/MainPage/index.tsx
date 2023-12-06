import React from 'react';

import { Footer } from '@/components/Footer';

import { AdditionalServices } from './AdditionalServices';
import { Advantages } from './Advantages';
import { Cleaning } from './Cleaning';
import { Costs } from './Costs';
import { FAQ } from './FAQ';
import { MainOffer } from './MainOffer';
import { Order } from './Order';
import { PriceByPhoto } from './PriceByPhoto';
import { Promotions } from './Promotions';
import { Reviews } from './Reviews';
import './style.scss';

export const MainPage = () => {
  return (
    <div className="main-page">
      <div className="main-content _flex _flex-col">
        <MainOffer />
        <Advantages />
        <Costs />
        <Cleaning />
        <PriceByPhoto />
        <AdditionalServices />
        <Promotions />
        <FAQ />
        <Reviews />
        <div className="_flex _flex-col">
          <Order />
          <Footer />
        </div>
      </div>
    </div>
  );
};
