import React from 'react';

import { AdditionalServices } from './AdditionalServices';
import { Advantages } from './Advantages';
import { Cleaning } from './Cleaning';
import { Costs } from './Costs';
import { FAQ } from './FAQ';
import { Footer } from './Footer';
import { MainOffer } from './MainOffer';
import { Order } from './Order';
import { PriceByPhoto } from './PriceByPhoto';
import { Promotions } from './Promotions';
import { Reviews } from './Reviews';

export const MainPage = () => {
  return (
    <div className="main-page">
      <MainOffer />
      <Advantages />
      <Costs />
      <Cleaning />
      <PriceByPhoto />
      <AdditionalServices />
      <Promotions />
      <FAQ />
      <Reviews />
      <Order />
      <Footer />
    </div>
  );
};
