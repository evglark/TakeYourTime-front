import React from 'react';

import { DiscountCoupon } from './icons/DiscountCoupon';
import { IconCrosse } from './icons/IconCrosse';
import { ShieldCheck } from './icons/ShieldCheck';
import './style.scss';

const services = [
  { id: 1, title: 'Cleaning 1-roomed apartment' },
  { id: 2, title: 'Cleaning' },
  { id: 3, title: '1-roomed apartment' },
  { id: 4, title: 'Roomed apartment' },
  { id: 5, title: 'Apartment' },
]

export const Summary = () => {
  return (
    <div className="summary-wrapper _flex _flex-col">
      <div className="summary-title">Cleaning 1-roomed apartment</div>
      <div className="sec-summary-title-wrapper">
        <div className="summary-title">Cleaning 1-roomed apartment</div>
      </div>
      <div className="error-wrapper">
        Minimum order for office 160 zł
      </div>
      <div className="sub-title-wrapper">
        Windows:<span className="span-sub-title">3 hours</span>
      </div>
      <div className="sub-title-wrapper">
        Area:<span className="span-sub-title">0 m2</span>
      </div>
      <div className="sub-title-wrapper">
        Estimated Duration of service:<span className="span-sub-title">3 hours</span>
      </div>
      <div className="services-in-summary">
        {services.map((el) => (
          <div className="service-item _flex _items-center" key={el.id}>
            <div>{el.title}</div>
            <div className="icon-wrapper _cursor-pointer">
              <IconCrosse />
            </div>
          </div>
        ))}
      </div>
      <div className="checked-wrapper _flex _gap-3">
        <ShieldCheck />
        <div>{'Our company uses only high quality \n equipment and techniques for cleaning'}</div>
      </div>
      <div className="input-promo-code _cursor-pointer">
        <div className="input-wrapper _flex">
          <div className="icon-wrapper">
            <DiscountCoupon />
          </div>
          <input className="input" type="text" />
          <div className="button-wrapper">
            Apply
          </div>
        </div>
      </div>
      <div className="to-pay-wrapper _flex _items-baseline">
        <div className="title">To pay:</div>
        <div className="current-price">128zl</div>
        <div className="old-price">160zl</div>
      </div>
      <div className="order-wrapper _cursor-pointer">
        Order
      </div>
    </div>
  );
};