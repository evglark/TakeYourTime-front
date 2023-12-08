import React from 'react';

import { DatePicker } from './DatePicker';
import { TimePicker } from './TimePicker';
import './style.scss';

export const DateAndTime = () => {
  return (
    <div className="date-and-time-component">
      <div className="second-title _text-center">
        Choose date and time
      </div>
      <DatePicker />
      <TimePicker />
    </div>
  )
};
