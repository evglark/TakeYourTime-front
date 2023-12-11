"use client";
import React from 'react';

import { Slider } from '@/components/common/Slider';

import './style.scss';

export const AdditionalServices = () => {
  const services = [
    { title: 'Clean the oven', icons: '' },
    { title: 'Clean the fridge', icons: '' },
    { title: 'Clean the hood', icons: '' },
    { title: 'Clean the microwave', icons: '' },
    { title: 'Clean kitchen cabinets', icons: '' },
    { title: 'Wash the window', icons: '' },
    { title: 'Wash the dishes', icons: '' },
    { title: 'Ozonation', icons: '' },
    { title: 'Ironing', icons: '' },
    { title: 'Carpet cleaning', icons: '' },
    { title: 'Clean animal’s tray', icons: '' },
    { title: 'Laundry', icons: '' },
    { title: 'Extra Tasks', icons: '' },
    { title: 'Water plants', icons: '' },
    { title: 'Wardrobe cleaning', icons: '' },
    { title: 'Baby stroller cleaning', icons: '' },
    { title: 'Cleaning bath or shower stall', icons: '' },
    { title: 'Cleaning room', icons: '' },
    { title: 'Clean the balcony', icons: '' },
    { title: 'Clean the bathroom', icons: '' },
    { title: 'Dry cleaning', icons: '' },
    { title: 'Cleaning the corridor', icons: '' },
    { title: 'Deep kitchen cleaning', icons: '' },
    { title: 'Cleaning the cloak room', icons: '' },
  ];

  const getServicesGroup = () => {
    const group = [];

    for (let i = 1; i <= services.length; i += 2) {
      group.push({
        id: services[i - 1].title + 'n' + i + services[i].title,
        coll: [services[i - 1], services[i]]
      });
    }

    return group;
  };

  return (
    <div className="additional-services">
      <div className="title _mb-8">Additional services</div>
      <Slider
        elements={getServicesGroup().map((el => ({
          id: el.id,
          content: (): JSX.Element => (
            <div className="_flex _flex-col _gap-6">
              <div className="service-wrapper _flex _flex-col">
                <div className="item-icons">{el.coll[0].icons}</div>
                <div className="item-title">{el.coll[0].title}</div>
              </div>
              <div className="service-wrapper _flex _flex-col">
                <div className="item-icon">{el.coll[1].icons}</div>
                <div className="item-title">{el.coll[1].title}</div>
              </div>
            </div>
          )
        })))}
      />
    </div>
  )
};
