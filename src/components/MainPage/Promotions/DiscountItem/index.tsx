import React, { FC } from 'react';
import Image from 'next/image';

import cleaningSvg from './icons/cleaning.svg';
import ecologySvg from './icons/ecology.svg';
import ozoneSvg from './icons/ozone.svg';
import plusSvg from './icons/plus.svg';
import rectangleSvg from './icons/rectangle.svg';
import './style.scss';

interface IProps {
  discount: {
    save: string;
    color: string;
    services: string[];
    key: string;
  }
}

export const DiscountItem: FC<IProps> = (props) => {
  const { discount: { save, color, services, key } } = props;
  const colors = { yellow: '#F9C630', green: '#7ED957' }
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
          <div>Save</div>
          {/* @ts-ignore */}
          <div className="sale-wrapper" style={{ backgroundColor: colors[color] }}>
            {save}
          </div>
        </div>
        <div className="services-wrapper _flex _mx-auto">
          <div className="_flex _flex-col">
            <div className="_flex _justify-center">
              {/* @ts-ignore */}
              <Image src={serviceIcons[services[0]]} alt='' />
            </div>
            <div className="_whitespace-nowrap">
              {services[0]}
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
              {services[1]}
            </div>
          </div>
        </div>
        <div className="order-button-wrapper _flex _flex-col _justify-center">
          <div>Order</div>
        </div>
      </div>
    </div>
  );
};