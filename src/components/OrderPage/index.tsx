"use client";
import React, { useState } from 'react';

import { Switcher } from '@/components/common/Switcher';
import { Footer } from '@/components/Footer';

import { Counter } from './Counter';
import { DateAndTime } from './DateAndTime';
import { OrderForm } from './OrderForm';
import { Summary } from './Summary';
import { UserData } from './UserData';
import './style.scss';

export const OrderPage = (props: any) => {
  const tabs = ['Apartment', 'Private house'];
  const [tab, setTab] = useState('Apartment');

  return (
    <div className="order-page">
      <div className="title _flex _justify-center">
        Regular cleaning
      </div>
      <div className="switcher-wrapper _flex _justify-center">
        <Switcher tab={tab} tabs={tabs} onClick={(el: string) => setTab(el)} />
      </div>
      <div className="content-wrapper _flex _justify-center _gap-10">
        <div className="_w-1/2 _flex _flex-col _gap-20">
          <Counter text="qweqwe" />
          <OrderForm />
          <DateAndTime />
          <UserData />
        </div>
        <div className="_w-1/2">
          <div className="_fixed">
            <Summary />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
