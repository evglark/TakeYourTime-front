"use client";
import React, { useState } from 'react';
import Image from 'next/image';

import { Overlay } from '@/components/common/Overlay';
import { Slider } from '@/components/common/Slider';
import { Writer } from '@/components/common/Writer';
import { useClickOutside } from '@/hooks/useClickOutSide';

import { DiscountItem } from './DiscountItem';
import giftSvg from './images/gift.svg';
import parentAndChildrenSvg from './images/parent-and-children.svg';
import studentSvg from './images/student.svg';
import './style.scss';

export const Promotions = (props: any) => {
  const { t } = props;
  const [active, setActive] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');

  const promotions = [
    { img: giftSvg, text: 'Make the first', text2: 'order Promo code', text3: 'TYT - 20%', text4: 'off your first order' },
    { img: studentSvg, text: 'Students', text2: ', save big on your cleaning services with us! Use promo code', text3: 'STUDENTCLEAN', text4: 'for', text5: '10%', text6: 'off'},
    { img: parentAndChildrenSvg, text: 'Large family?', text2: 'Enjoy more family time, less cleaning time. Get', text3: '10%', text4: 'off with promo code', text5: 'FAMILYCLEAN' },
  ];

  const discounts = [
    { save: '-15%', services: ['Cleaning', 'Ozonation'] },
    { save: '-15%', services: ['Cleaning', 'Dry cleaning'] },
    { save: '-15%', services: ['Eco cleaning', 'Dry cleaning'] },
    { save: '-15%', services: ['Eco cleaning', 'Ozonation'] },
  ];

  const ref = useClickOutside(() => setActive(false));

  const setActivePopup = (title: string) => {
    setPopupTitle(title);
    setActive(true);
  }

  return (
    <div className="promotions-component _flex _flex-col">
      <Overlay active={active}>
        <div className="overlay-wrapper-component" ref={ref}>
          <div className="icon-wrapper _cursor-pointer" onClick={() => setActive(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <g clipPath="url(#clip0_5998_130131)">
                <path d="M4.39573 25.6048C2.96308 24.2211 1.82034 22.5659 1.03421 20.7358C0.248073 18.9058 -0.16572 16.9375 -0.183027 14.9458C-0.200335 12.9541 0.179191 10.9789 0.933404 9.13544C1.68762 7.292 2.80141 5.61722 4.2098 4.20883C5.6182 2.80044 7.29297 1.68664 9.13642 0.932428C10.9799 0.178214 12.9551 -0.201311 14.9467 -0.184004C16.9384 -0.166697 18.9067 0.247097 20.7368 1.03323C22.5669 1.81937 24.222 2.9621 25.6057 4.39475C28.3381 7.22379 29.85 11.0128 29.8158 14.9458C29.7817 18.8787 28.2041 22.6409 25.423 25.422C22.6419 28.2032 18.8797 29.7807 14.9467 29.8149C11.0138 29.849 7.22476 28.3371 4.39573 25.6048ZM6.51073 23.4898C8.76242 25.7414 11.8164 27.0064 15.0007 27.0064C18.1851 27.0064 21.239 25.7414 23.4907 23.4898C25.7424 21.2381 27.0074 18.1841 27.0074 14.9998C27.0074 11.8154 25.7424 8.76144 23.4907 6.50975C21.239 4.25806 18.1851 2.99308 15.0007 2.99308C11.8164 2.99308 8.76242 4.25806 6.51073 6.50975C4.25904 8.76144 2.99406 11.8154 2.99406 14.9998C2.99406 18.1841 4.25904 21.2381 6.51073 23.4898ZM21.3607 10.7548L17.1157 14.9998L21.3607 19.2448L19.2457 21.3598L15.0007 17.1148L10.7557 21.3598L8.64073 19.2448L12.8857 14.9998L8.64073 10.7548L10.7557 8.63975L15.0007 12.8848L19.2457 8.63975L21.3607 10.7548Z" fill="#232323"/>
              </g>
              <defs>
                <clipPath id="clip0_5998_130131">
                  <rect width="30" height="30" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="overlay-wrapper-component-title">
            {popupTitle + '_title'}
          </div>
          <div className="overlay-wrapper-component-text">
            {popupTitle + '_text'}
          </div>
        </div>
      </Overlay>
      <div className="title">{t('Promotions and discounts')}</div>
      <div className="promotions-block _flex _justify-around">
        {promotions.map((el, i) => (
          <div className="promotion-card" key={el.text + i}>
            <div className="_flex _justify-center">
              <Image src={el.img} alt='' />
            </div>
            <div className="text">
              <b><Writer text={t(el.text)} /></b>
              {el.text2 && <Writer text={t(el.text2)} />}
              <b>{el.text3 && <Writer text={t(el.text3)} />}</b>
              {el.text4 && <Writer text={t(el.text4)} />}
              <b>{el.text5 && <Writer text={t(el.text5)} />}</b>
              {el.text6 && <Writer text={t(el.text6)} />}
            </div>
          </div>
        ))}
      </div>
      <div className="discounts-wrapper">
        <Slider
          elements={[...discounts, ...discounts].map((el, i) => ({
            id: el.services.join('n' + i),
            content: (): JSX.Element => (
              <DiscountItem discount={{ ...el, key: el.services.join('n' + i) }} t={t} onActive={setActivePopup} />
            )
          }))}
          status={false}
        />
      </div>
    </div>
  )
};
