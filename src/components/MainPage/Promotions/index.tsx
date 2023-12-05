import React from 'react';
import Image from 'next/image';

import eco from './images/ecology.svg';
import gift from './images/gift.svg';
import img from './images/image.png';
import ozone from './images/ozone-layer.svg';
import parentAndChildren from './images/parent-and-children.svg';
import plusSvg from './images/plus.svg';
import rectangle from './images/Rectangle.png';
import student from './images/student.svg';
import './style.scss';

const colors = {
  yellow: '#F9C630',
  green: '#7ED957',
}

const serviceIcons = {
  Cleaning: img,
  Ozonation: ozone,
  'Dry cleaning': rectangle,
  'Eco cleaning': eco,
}

export const Promotions = () => {
  const promotions = [
    { img: gift, text: 'Make the first order Promo code TYT - 20% off your first order' },
    { img: student, text: 'Students, save big on your cleaning services with us! Use promo code STUDENTCLEAN for 10% off' },
    { img: parentAndChildren, text: 'Large family? Enjoy more family time, less cleaning time. Get 10% off with promo code FAMILYCLEAN' },
  ];

  const discounts = [
    { save: '-15%', color: 'yellow', services: ['Cleaning', 'Ozonation'] },
    { save: '-15%', color: 'yellow', services: ['Cleaning', 'Dry cleaning'] },
    { save: '-15%', color: 'yellow', services: ['Eco cleaning', 'Dry cleaning'] },
    { save: '-15%', color: 'green', services: ['Eco cleaning', 'Ozonation'] },
  ];

  return (
    <div className="promotions-component _flex _flex-col">
      <div className="title">Promotions and discounts</div>
      <div className="promotions-block _flex _justify-around">
        {promotions.map((el, i) => (
          <div className="promotion-card" key={el.text + i}>
            <div className="_flex _justify-center">
              <Image src={el.img} alt='' />
            </div>
            <div className="text">{el.text}</div>
          </div>
        ))}
      </div>
      <div className="discounts-wrapper _flex _justify-center _gap-2">
        <div className="_flex _flex-col _justify-center">
          <div className="_cursor-pointer">
            {'<'}
          </div>
        </div>
        <div className="_flex _gap-5">
          {discounts.map((el, i) => (
            <div className="discounts-card-wrapper _flex _flex-col _gap-6" key={el.services.join('n' + i)}>
              <div className="title-wrapper _flex _justify-center">
                Save
                {/* @ts-ignore */}
                <div className="sale-wrapper" style={{ backgroundColor: colors[el.color] }}>
                  {el.save}
                </div>
              </div>
              <div className="services-wrapper _flex _mx-auto">
                <div className="_flex _flex-col">
                  <div className="_flex _justify-center">
                    {/* @ts-ignore */}
                    <Image src={serviceIcons[el.services[0]]} alt='' />
                  </div>
                  <div>{el.services[0]}</div>
                </div>
                <div>
                  <Image src={plusSvg} alt=''/>
                </div>
                <div className="_flex _flex-col">
                  <div className="_flex _justify-center">
                    {/* @ts-ignore */}
                    <Image src={serviceIcons[el.services[1]]} alt='' />
                  </div>
                  <div>{el.services[1]}</div>
                </div>
              </div>
              <div className="_mx-auto">
                <div className="order-button-wrapper _flex _flex-col _justify-center">
                  <div>Order</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="_flex _flex-col _justify-center">
          <div className="_cursor-pointer">
            {'>'}
          </div>
        </div>
      </div>
      <div className='_flex  _justify-center _gap-2'>
        <div className="slider-status" />
        <div className="slider-status sub" />
      </div>
    </div>
  )
};
