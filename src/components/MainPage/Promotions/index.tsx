"use client";
import React from 'react';
import Image from 'next/image';

import { Slider } from '@/components/common/Slider';

import { DiscountItem } from './DiscountItem';
import giftSvg from './images/gift.svg';
import parentAndChildrenSvg from './images/parent-and-children.svg';
import studentSvg from './images/student.svg';
import './style.scss';

export const Promotions = () => {
  const promotions = [
    { img: giftSvg, text: 'Make the first order Promo code TYT - 20% off your first order' },
    { img: studentSvg, text: 'Students, save big on your cleaning services with us! Use promo code STUDENTCLEAN for 10% off' },
    { img: parentAndChildrenSvg, text: 'Large family? Enjoy more family time, less cleaning time. Get 10% off with promo code FAMILYCLEAN' },
  ];

  const discounts = [
    { save: '-15%', color: 'yellow', services: ['Cleaning', 'Ozonation'] },
    { save: '-15%', color: 'yellow', services: ['Cleaning', 'Dry cleaning'] },
    { save: '-15%', color: 'yellow', services: ['Eco cleaning', 'Dry cleaning'] },
    { save: '-15%', color: 'green', services: ['Eco cleaning', 'Ozonation'] },
  ];

  return (
    <div className="promotions-component _flex _flex-col">
      <div className="title">Promotions and discounts</div>
      <div className="promotions-block _flex _justify-around">
        {promotions.map((el, i) => (
          <div className="promotion-card" key={el.text + i}>
            <div className="_flex _justify-center">
              <Image src={el.img} alt='' />
            </div>
            <div className="text">{el.text}</div>
          </div>
        ))}
      </div>
      <div className="discounts-wrapper">
        <Slider
          elements={[...discounts, ...discounts].map((el, i) => ({
            id: el.services.join('n' + i),
            content: (): JSX.Element => (
              <DiscountItem discount={{ ...el, key: el.services.join('n' + i) }} />
            )
          }))}
          status={false}
        />
      </div>
    </div>
  )
};
