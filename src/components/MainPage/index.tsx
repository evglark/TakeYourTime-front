"use client";
import React, { FC, useState } from 'react';

import { Footer } from '@/components/Footer';
import { useLocales } from '@/hooks/useLocales';
import { ILocales } from '@/locales';

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

interface Props {
  locales: ILocales[];
}

export const MainPage: FC<Props> = (props) => {
  const { locales } = props;
  const { t } = useLocales(locales);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <div className="main-page">
      <div className="main-content _flex _flex-col">
        <MainOffer t={t} />
        <Advantages t={t} />
        <Costs t={t} />
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
