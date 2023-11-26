import React from 'react';
import Image from 'next/image';

import png from './mainOffer.png';
import svg from './vector.svg';
import './style.scss';

export const MainOffer = () => {
  return (
    <div className="main-offer-wrapper">
      <Image width={1480} height={986} src={png} alt="" />
      <div className="vector-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="597" height="523" viewBox="0 0 597 523" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M287.048 1.87918C372.352 0.788133 467.246 -11.8611 529.087 46.9061C591.729 106.433 608.657 204.766 589.131 288.945C572.407 361.05 496.589 394.68 437.945 439.842C390.829 476.125 346.258 516.056 287.048 521.579C221.883 527.657 155.523 512.62 105.105 470.888C49.7983 425.11 15.1905 360.149 5.99187 288.945C-4.67255 206.396 -7.10886 112.495 51.1219 53.0193C109.644 -6.75415 203.403 2.94901 287.048 1.87918Z" fill="#EBEFFF" fillOpacity="0.93"/>
        </svg>
        <div className="offer-wrapper">
          Service
          <br />
          to suit your
          <br />
          needs
        </div>
      </div>
    </div>
  )
};
