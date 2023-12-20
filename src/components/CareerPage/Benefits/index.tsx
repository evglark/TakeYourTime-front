import React from 'react';
import Image from 'next/image';

import moneyBagSvg from './icons/money-bag.svg';
import './style.scss';

export const Benefits = () => {
  const benefits = [
    { title: 'Regular pay', text: 'You\'ll get paid every week with a steady income', svg: '' },
    { title: 'Flexibility', text: 'You can pick your own work hours and location', svg: '' },
    { title: 'Independence', text: 'Opportunity to work independently, without bosses', svg: '' },
    { title: 'Teamwork', text: 'A supportive team, collaborate with colleagues', svg: '' },
  ];

  return (
    <div className="benefits-component _flex _flex-col _items-center _gap-6">
      <div className="benefits-sub-title">Benefits</div>
      <div className="benefits-list _grid _grid-cols-4 _gap-3">
        {benefits.map((el) => (
          <div className="benefit-wrapper _flex _flex-col _items-center _gap-4" key={el.text}>
            {el.title ? (
              <div className="benefit-tile">
                <b>{el.title}</b>
              </div>
            ) : null}
            <Image src={moneyBagSvg} alt='' />
            <div className="benefit-text">
              {el.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};