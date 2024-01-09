import React, { FC } from 'react';
import Image from 'next/image';

import howItWorksSvg from '@/components/common/icons/howItWorks.svg';

import cleaningSvg from './icons/cleaning.svg';
import ecologySvg from './icons/ecology.svg';
import ozoneSvg from './icons/ozone.svg';
import plusSvg from './icons/plus.svg';
import rectangleSvg from './icons/rectangle.svg';
import './style.scss';

interface IProps {
  discount: {
    save: string;
    services: string[];
    key: string;
  };
  t: any;
  onActive: (title: string) => void;
}

export const DiscountItem: FC<IProps> = (props) => {
  const { discount: { save, services, key }, t, onActive } = props;
  const serviceIcons = {
    Cleaning: cleaningSvg,
    Ozonation: ozoneSvg,
    'Dry cleaning': rectangleSvg,
    'Eco cleaning': ecologySvg,
  }

  return (
    <div className="discount-item-component">
      <div className="discounts-card-wrapper _flex _flex-col _justify-center _gap-6" key={key}>
        <div className="title-wrapper _flex _justify-center">
          <div>{t('Save')}</div>
          <div className="sale-wrapper">{save}</div>
        </div>
        <div className="services-wrapper _flex _mx-auto">
          <div className="_flex _flex-col">
            <div className="_flex _justify-center">
              {/* @ts-ignore */}
              <Image src={serviceIcons[services[0]]} alt='' />
            </div>
            <div className="_whitespace-nowrap">
              {t(services[0])}
            </div>
          </div>
          <div>
            <Image src={plusSvg} alt=''/>
          </div>
          <div className="_flex _flex-col">
            <div className="_flex _justify-center">
              {/* @ts-ignore */}
              <Image src={serviceIcons[services[1]]} alt='' />
            </div>
            <div className="_whitespace-nowrap">
              {t(services[1])}
            </div>
          </div>
        </div>
        <div className="_flex _justify-center">
          <div className="_flex _gap-2" onClick={() => onActive(services[0] + services[1])}>
            <div>{t('How it works')}</div>
            <div className="_py-1 _cursor-pointer">
              <Image src={howItWorksSvg} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};