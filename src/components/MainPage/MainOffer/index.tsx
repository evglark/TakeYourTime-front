"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import mainPng from './images/main.png';
import { CheckSvg } from './icons/check-fill';
import vector from './icons/vector.svg';
import './style.scss';

export const MainOffer = (props: any) => {
  const { t } = props;
  const router = useRouter();
  const advantages = [
    { title: t('Clear'), text: t('space') },
    { title: t('Professional'), text: t('service') },
    { title: t('Fair'), text: t('price') },
  ];

  return (
    <div className="main-offer-wrapper">
      <Image src={mainPng} alt="" sizes='' fill style={{objectFit:"cover"}} priority />
      <div className="vector-wrapper">
        <Image src={vector} alt="" />
        <div className="offer-wrapper">
          <div className="title main-title">
            <b>{t('Service')}</b>
          </div>
          <div className="title sub-title">
            {t('to suit your')}
          </div>
          <div className="title main-title">
            <b>{t('needs')}</b>
          </div>
          <div className="_mt-5 _flex _gap-5">
          {advantages.map(el => (
            <div className='advantages-block _flex _gap-3' key={el.title}>
              <CheckSvg />
              <div>
                <div className="advantages-title">{el.title}</div>
                <div className="advantages-text">{el.text}</div>
              </div>
            </div>
          ))}
          </div>
          <div className="_mt-10 _flex _gap-6">
            <div
              className="main-button _cursor-pointer"
              onClick={() => router.push('/order')}
            >
              {t('Order online now')}
            </div>
            <div className="sub-button _cursor-pointer">
              {t('Pricing')}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
