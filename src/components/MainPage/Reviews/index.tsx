import React from 'react';
import './style.scss';

export const Reviews = () => {
  return (
    <div className="reviews-wrapper">
      <div className="title">What clients say</div>
      <div>
        <div>
          "We're thrilled with “Washee”. Their team was punctual, thorough, and made our home shine. Booking was easy, and the results were impressive. Highly recommend!"
        </div>
      </div>
      <div className="_flex _justify-center">
        <div className="button-wrapper _cursor-pointer">
          Leave your review
        </div>
      </div>
    </div>
  )
};
