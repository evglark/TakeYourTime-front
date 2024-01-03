import React from 'react';

import { Slider } from '@/components/common/Slider';

import './style.scss';

export const AllServices = (props: any) => {
  const { t } = props;
  const services = [
    { title: 'Clean the oven' },
    { title: 'Clean the fridge' },
    { title: 'Clean the hood' },
    { title: 'Clean the microwave' },
    { title: 'Clean kitchen cabinets' },
    { title: 'Wash the window' },
    { title: 'Wash the dishes' },
    { title: 'Ironing' },
    { title: 'Carpet cleaning' },
    { title: 'Clean animal’s tray' },
    { title: 'Laundry' },
    { title: 'Extra Tasks' },
    { title: 'Water plants' },
    { title: 'Wardrobe cleaning' },
    { title: 'Baby stroller cleaning' },
    { title: 'Cleaning bath or shower stall' },
    { title: 'Cleaning room' },
    { title: 'Clean the balcony' },
    { title: 'Clean the bathroom' },
    { title: 'Dry cleaning' },
    { title: 'Cleaning the corridor' },
    { title: 'Deep kitchen cleaning' },
    { title: 'Cleaning the cloak room' },
  ];

  return (
    <div className="all-service-component">
      <div className="main-title">{t('All service')}</div>
      <Slider
        elements={services.map(((el, i) => ({
          id: el.title + i,
          content: (): JSX.Element => (
            <div className="_flex _flex-col _justify-center _gap-1">
              {el.title}
            </div>
          )
        })))}
      />
    </div>
  );
};