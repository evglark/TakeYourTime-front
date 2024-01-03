"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

import mainPng from './images/main.png';
import manPng from './images/man.png';
import womanPng from './images/women.png';
import { CheckSvg } from './icons/check-fill';
import { CheckSvg as chc } from './icons/Vector';
import './style.scss';

export const MainOffer = (props: any) => {
  const { t } = props;
  const router = useRouter();
  const advantages = [
    { title: t('Clear'), text: t('space') },
    { title: t('Professional'), text: t('service') },
    { title: t('Fair'), text: t('price') },
  ];

  const getImgStyle = (img: string) => ({
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  });

  return (
    <div className="main-offer-wrapper" style={getImgStyle(mainPng.src)}>
      <div className="people-wrapper-man" style={getImgStyle(manPng.src)} />
      <div className="people-wrapper-woman" style={getImgStyle(womanPng.src)} />
      <div className="vector-wrapper">
        <svg width="616" height="522" viewBox="0 0 616 522" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M296.28 1.87603C384.327 0.786814 482.273 -11.8413 546.104 46.8276C610.759 106.255 628.232 204.423 608.079 288.462C590.816 360.446 512.56 394.02 452.029 439.106C403.399 475.329 357.394 515.192 296.28 520.706C229.019 526.774 160.525 511.762 108.486 470.1C51.3998 424.399 15.679 359.546 6.18458 288.462C-4.82282 206.05 -7.33749 112.307 52.7661 52.9306C113.17 -6.74285 209.944 2.94407 296.28 1.87603Z" fill="#EBEFFF" fill-opacity="0.93"/>
        </svg>
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
