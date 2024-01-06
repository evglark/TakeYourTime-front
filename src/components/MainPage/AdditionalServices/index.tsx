"use client";
import React from 'react';
import Image from 'next/image';

import { Slider } from '@/components/common/Slider';

import coffeeMachineSvg from './icons/coffee-machine.svg';
import cleanClothesSvg from './icons/clean-clothes.svg';
import cleanDishesSvg from './icons/clean-dishes.svg';
import closetSvg from './icons/closet.svg';
import cookerHoodSvg from './icons/cooker-hood.svg';
import fridgeSvg from './icons/fridge.svg';
import hoursglassSvg from './icons/hoursglass.svg';
import ironSvg from './icons/iron.svg';
import kitchenSvg from './icons/kitchen.svg';
import laundrySvg from './icons/laundry.svg';
import microwaveSvg from './icons/microwave.svg';
import ovenSvg from './icons/oven.svg';
import petToiletTraySvg from './icons/pet-toilet-tray.svg';
import SlowCooker from './icons/slow-cooker.svg';
import wateringPlantsSvg from './icons/watering-plants.svg';
import windowSvg from './icons/window.svg';

import './style.scss';

export const AdditionalServices = (props: any) => {
  const { t } = props;
  const services = [
    { title: 'Clean the oven', icons: ovenSvg },
    { title: 'Clean the fridge', icons: fridgeSvg },
    { title: 'Clean the hood', icons: cookerHoodSvg },
    { title: 'Clean the microwave', icons: microwaveSvg },
    { title: 'Clean kitchen cabinets', icons: kitchenSvg },
    { title: 'Wash the window', icons: windowSvg },
    { title: 'Wash the dishes', icons: cleanDishesSvg },
    { title: 'Space organizer', icons: cleanClothesSvg },
    { title: 'Ironing', icons: ironSvg },
    { title: 'Clean coffee-machine', icons: coffeeMachineSvg },
    { title: 'Clean animal’s tray', icons: petToiletTraySvg },
    { title: 'Laundry', icons: laundrySvg },
    { title: 'Extra Tasks', icons: hoursglassSvg },
    { title: 'Water plants', icons: wateringPlantsSvg },
    { title: 'Wardrobe cleaning', icons: closetSvg },
    { title: 'Clean slow-cooker', icons: SlowCooker },
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
      <div className="title _mb-8">
        {t('Additional services')}
      </div>
      <Slider
        elements={getServicesGroup().map((el => ({
          id: el.id,
          content: (): JSX.Element => (
            <div className="_px-2.5 _flex _flex-col _w-full _gap-6">
              <div className="service-wrapper _w-full _flex _flex-col _justify-center _gap-5">
                <div className="_flex _justify-center">
                  <Image src={el.coll[0].icons} alt='' />
                </div>
                <div className="item-title _whitespace-nowrap">
                  {t(el.coll[0].title)}
                </div>
              </div>
              <div className="service-wrapper _w-full _flex _flex-col _justify-center _gap-5">
                <div className="_flex _justify-center">
                  <Image src={el.coll[1].icons} alt='' />
                </div>
                <div className="item-title _whitespace-nowrap">
                  {t(el.coll[1].title)}
                </div>
              </div>
            </div>
          )
        })))}
      />
    </div>
  )
};
