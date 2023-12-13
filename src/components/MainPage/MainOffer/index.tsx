"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

// import png from './mainOffer.png';
import { Man } from './icons/Man';
import { Woman } from './icons/Woman';
import { MainOfferSVG } from './icons/MainOffer';
import { CheckSvg } from './icons/check-fill';
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
    // <div className="main-offer-wrapper" style={{ backgroundImage: `url(${png.src})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
    <div className="main-offer-wrapper">
      <div className="main-svg">
        <MainOfferSVG />
      </div>
      <div className="vector-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="597" height="523" viewBox="0 0 597 523" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M287.048 1.87918C372.352 0.788133 467.246 -11.8611 529.087 46.9061C591.729 106.433 608.657 204.766 589.131 288.945C572.407 361.05 496.589 394.68 437.945 439.842C390.829 476.125 346.258 516.056 287.048 521.579C221.883 527.657 155.523 512.62 105.105 470.888C49.7983 425.11 15.1905 360.149 5.99187 288.945C-4.67255 206.396 -7.10886 112.495 51.1219 53.0193C109.644 -6.75415 203.403 2.94901 287.048 1.87918Z" fill="#EBEFFF" fillOpacity="0.93"/>
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
