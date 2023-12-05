import React from 'react';

import { Calendar } from './Calendar';
import './style.scss';

export const Order = () => {
  return (
    <div className="order-wrapper _flex _justify-center">
      <div className="white-layout">
        <div className="title _flex _justify-center">
          Order cleaning today
        </div>
        <div className="_flex _justify-center">
          <Calendar />
        </div>
        <div className="_flex _justify-center">
          <div className="button-wrapper">
            Order
          </div>
        </div>
      </div>
    </div>
  )
};
