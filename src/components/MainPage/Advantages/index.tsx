import React from 'react';
import Img from 'next/image';

import BookmarkTabs from './icons/BookmarkTabs.svg';
import Coin from './icons/Coin.svg';
import Hand from './icons/Hand.svg';
import MoneyBag from './icons/MoneyBag.svg';
import './style.scss';

export const Advantages = (props: any) => {
  const { t } = props;
  const advantages = [
    { icon: BookmarkTabs, title: t('Fixed price'), text: t('The price for cleaning is determined by the count of rooms, not the overall size of the apartment') },
    { icon: Coin, title: t('Card or cash'), text: t('You can pay conveniently with cash and bank card') },
    { icon: Hand, title: t('Eco-Friendly Products'), text: t('We believe in being earth friendly, that\'s why we can refer cleaners who can use organic and green cleaning solutions for your home') },
    { icon: MoneyBag, title: t('Our services are insured'), text: t('Payment is required only after the cleaning has been completed') },
  ];

  return (
    <div className="advantages-component _flex _justify-center">
      <div className="_flex _gap-7">
        {advantages.map(el => (
          <div className="_flex _flex-col" key={el.title}>
            <div className="_flex _justify-center _basis-1/4">
              <Img src={el.icon} alt=''/>
            </div>
            <div className="_mt-2 advantage-title _text-center _whitespace-pre-line">{el.title}</div>
            <div className="_mt-5 advantage-text _text-center _whitespace-pre-line">{el.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
};
