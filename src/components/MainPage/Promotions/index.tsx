import React from 'react';
import Image from 'next/image';

import gift from './images/gift.svg';
import parentAndChildren from './images/parent-and-children.svg';
import student from './images/student.svg';
import './style.scss';

export const Promotions = () => {
  const promotions = [
    { img: gift, text: 'Make the first order Promo code TYT - 20% off your first order' },
    { img: student, text: 'Students, save big on your cleaning services with us! Use promo code STUDENTCLEAN for 10% off' },
    { img: parentAndChildren, text: 'Large family? Enjoy more family time, less cleaning time. Get 10% off with promo code FAMILYCLEAN' },
  ];

  return (
    <div className="promotions-component _flex _flex-col">
      <div className="title">Promotions and discounts</div>
      <div className="promotions-block _flex _justify-around">
        {promotions.map((el) => (
          <div className="promotion-card">
            <div className="_flex _justify-center">
              <Image width={128} height={128} src={el.img} alt='' />
            </div>
            <div className="text">{el.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
};
