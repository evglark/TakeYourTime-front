"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Switcher } from '@/components/common/Switcher';
import { Discount } from './icons/Discount';
import { tabs, sales } from './constants';
import './style.scss';

export const Costs = (props: any) => {
  const { t } = props;
  const [tab, setTab] = useState(() => tabs[0]);
  const [salesCost, setSalesCost] = useState(() => sales[0].title);
  const router = useRouter();

  const getCoast = (title: string) => {
    if (tab === 'One-time') {
      if (title === '1-bedroom') return '160 zl';
      if (title === '2-bedroom') return '190 zl';
      if (title === '3-bedroom') return '220 zl';
    } else {
      if (salesCost === 'Once a week') {
        if (title === '1-bedroom') return '128 zl';
        if (title === '2-bedroom') return '152 zl';
        if (title === '3-bedroom') return '176 zl';
      }

      if (salesCost === 'Twice a month') {
        if (title === '1-bedroom') return '136 zl';
        if (title === '2-bedroom') return '161.5 zl';
        if (title === '3-bedroom') return '187 zl';
      }

      if (salesCost === 'Once a month') {
        if (title === '1-bedroom') return '144 zl';
        if (title === '2-bedroom') return '171 zl';
        if (title === '3-bedroom') return '198 zl';
      }
    }
    return '';
  };

  const getOldCoast = (title: string) => {
    if (tab === 'One-time') return '';
    if (title === '1-bedroom') return '160 zl';
    if (title === '2-bedroom') return '190 zl';
    if (title === '3-bedroom') return '220 zl';
    return '';
  };

  const costs = [
    {
      title: '1-bedroom',
      text: t('The cost covers weekly cleaning for a single room, the kitchen, a hallway, and one bathroom'),
      coast: getCoast('1-bedroom'),
      oldCoast: getOldCoast('1-bedroom'),
    },
    {
      title: '2-bedroom',
      text: t('The cost covers weekly cleaning for two rooms, the kitchen, a hallway, and one bathroom'),
      coast: getCoast('2-bedroom'),
      oldCoast: getOldCoast('2-bedroom'),
    },
    {
      title: '3-bedroom',
      text: t('The cost covers weekly cleaning for three rooms, the kitchen, a hallway, and one bathroom'),
      coast: getCoast('3-bedroom'),
      oldCoast: getOldCoast('3-bedroom'),
    },
  ];

  return (
    <div className="costs-component _flex _flex-col _items-center">
      <div className="main-title">
        <b>How much it costs</b>
      </div>
      <Switcher tab={tab} tabs={tabs} onClick={(el: string) => setTab(el)} />
      <div className="costs-sales-wrapper _flex _justify-center">
        {tab === 'Subscription' ? (
          <div className="sales-list _flex _flex-col _justify-center">
            {sales.map((el) => (
              <div
                className={`
                  sale-item
                  ${el.title === salesCost ? ' active ' : ' '}
                  _flex _justify-between _cursor-pointer
                `}
                onClick={() => setSalesCost(el.title)}
                key={el.title}
              >
                <div className="title">{t(el.title)}</div>
                <div className="sale">{el.sale}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-sales-wrapper _flex _flex-col _justify-center">
            <div className="_flex _justify-center">
              <Discount />
            </div>
            <div className="_flex _flex-col">
              <div className="title _flex _justify-center _font-semibold">
                {t('Get the discount')}
              </div>
              <div className="_text-center">
                <span>{t('Promo code')} </span>
                <span className="_font-semibold">{t('TYT - 20%')}</span>
                <span> {t('off your first order')}</span>
              </div>
            </div>
          </div>
        )}
        <div className="costs-wrapper _flex">
          {costs.map((el) => (
            <div className="costs-item _flex _flex-col" key={el.title}>
              <div className="title">{el.title}</div>
              <div className="text _whitespace-pre-line">{el.text}</div>
              <div className="_flex _justify-center">
                <div className="coast">{el.coast}</div>
                <div className="old-coast _flex _flex-col _justify-center">{el.oldCoast}</div>
              </div>
              <div
                className="button _cursor-pointer"
                onClick={() => router.push('/order')}
              >
                {t('Order')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};
