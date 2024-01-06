"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Writer } from '@/components/common/Writer';
import { Switcher } from '@/components/common/Switcher';
import { Discount } from './icons/Discount';
import { tabs, sales } from './constants';
import './style.scss';

export const Costs = (props: any) => {
  const { t } = props;
  const [tab, setTab] = useState(() => tabs[0]);
  const [salesCost, setSalesCost] = useState(() => sales[0].title);
  const router = useRouter();

  const getText = (title: string) => {
    if (tab === 'One-time') {
      if (title === '1-bedroom') return 'One-time 1-bedroom cleaning';
      if (title === '2-bedroom') return 'One-time 2-bedroom cleaning';
      if (title === '3-bedroom') return 'One-time 3-bedroom cleaning';
    } else {
      if (salesCost === 'Once a week') {
        if (title === '1-bedroom') return 'Weekly 1-bedroom cleaning';
        if (title === '2-bedroom') return 'Weekly 2-bedroom cleaning';
        if (title === '3-bedroom') return 'Weekly 3-bedroom cleaning';
      }

      if (salesCost === 'Twice a month') {
        if (title === '1-bedroom') return 'Twice a month 1-bedroom cleaning';
        if (title === '2-bedroom') return 'Twice a month 2-bedroom cleaning';
        if (title === '3-bedroom') return 'Twice a month 3-bedroom cleaning';
      }

      if (salesCost === 'Once a month') {
        if (title === '1-bedroom') return 'Once a month 1-bedroom cleaning';
        if (title === '2-bedroom') return 'Once a month 2-bedroom cleaning';
        if (title === '3-bedroom') return 'Once a month 3-bedroom cleaning';
      }
    }
    return '';
  };

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
      text: t(getText('1-bedroom')),
      coast: getCoast('1-bedroom'),
      oldCoast: getOldCoast('1-bedroom'),
    },
    {
      title: '2-bedroom',
      text: t(getText('2-bedroom')),
      coast: getCoast('2-bedroom'),
      oldCoast: getOldCoast('2-bedroom'),
    },
    {
      title: '3-bedroom',
      text: t(getText('3-bedroom')),
      coast: getCoast('3-bedroom'),
      oldCoast: getOldCoast('3-bedroom'),
    },
  ];

  return (
    <div className="costs-component _flex _flex-col _items-center">
      <div className="main-title">
        <b>{t('How much it costs')}</b>
      </div>
      <Switcher tab={tab} tabs={tabs} t={t} onClick={(el: string) => setTab(el)} />
      <div className="costs-sales-wrapper _flex _justify-between">
        {tab === 'Subscription' ? (
          <div className="sales-list _flex _flex-col _justify-center">
            {sales.map((el) => (
              <div
                className={`
                  sale-item
                  ${el.title === salesCost ? ' active ' : ' '}
                  _flex _justify-between _items-center _cursor-pointer
                `}
                onClick={() => setSalesCost(el.title)}
                key={el.title}
              >
                <div className="title _flex _items-center">{t(el.title)}</div>
                <div className="sale _flex _items-center">{el.sale}</div>
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
              <div className="no-sales-text-wrapper _text-center">
                <span>
                  <Writer text={t('Promo code')} />
                </span>
                <span className="_font-semibold">
                  <Writer text={t('TYT - 20%')} />
                </span>
                <span>
                  <Writer text={t('off your first order')} />
                </span>
              </div>
            </div>
          </div>
        )}
        <div className="costs-wrapper _flex _justify-around">
          {costs.map((el) => (
            <div className="costs-item _flex _flex-col" key={el.title}>
              <div className="title">{el.title}</div>
              <div className="text _whitespace-pre-line">
                <Writer text={el.text} />
              </div>
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
