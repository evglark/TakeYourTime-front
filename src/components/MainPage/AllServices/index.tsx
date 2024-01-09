import React, { useState } from 'react';
import Image from 'next/image';

import { Overlay } from '@/components/common/Overlay';
import { Slider } from '@/components/common/Slider';

import Airbnb from './icons/airbnb.svg';
import Brush from './icons/brush.svg';
import BurningTime from './icons/burning-time.svg'
import Confetti from './icons/confetti.svg';
import Clean from './icons/clean.svg';
import DiscountEmail from './icons/discount-email.svg'
import Ecology from './icons/ecology.svg'
import Kitchen from './icons/kitchen.svg';
import List from './icons/list.svg';
import Mask from './icons/mask.svg';
import Office from './icons/office.svg';
import OzoneLayer from './icons/ozone-layer.svg';
import Sofa from './icons/sofa.svg'
import WeMoveToNewHouse from './icons/we-move-to-new-house.svg'
import Window from './icons/window.svg'
import './style.scss';

export const AllServices = (props: any) => {
  const { t } = props;
  const [active, setActive] = useState(false);
  const services = [
    { title: 'Regular', icon: Clean },
    { title: 'Dry cleaning', icon: Sofa },
    { title: 'Deep', icon: Clean },
    { title: 'Window cleaning', icon: Window },
    { title: 'Eco cleaning', icon: Ecology },
    { title: 'Post-construction', icon: Brush },
    { title: 'Move in/out', icon: WeMoveToNewHouse },
    { title: 'Ozonation', icon: OzoneLayer },
    { title: 'Subscription', icon: DiscountEmail },
    { title: 'In a last minute', icon: BurningTime },
    { title: 'Custom cleaning', icon: List },
    { title: 'After party', icon: Confetti },
    { title: 'Office', icon: Office },
    { title: 'While sickness', icon: Mask },
    { title: 'Deep kitchen', icon: Kitchen },
    { title: 'Airbnb', icon: Airbnb },
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

  const getItem = ({ title, icon }: any) => (
    <div className="service-wrapper _w-full _flex _flex-col _justify-center _gap-5">
      <div className="item-title _whitespace-nowrap">
        {t(title)}
      </div>
      <div className="_flex _justify-center">
        <Image src={icon} alt='' />
      </div>
      <div className="_flex _justify-center">
        <div className="_flex _gap-2">
          <div>{t('How it works')}</div>
          <div className="_py-1 _cursor-pointer" onClick={() => setActive(true)}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0C12.4183 0 16 3.58171 16 8C16 12.4183 12.4183 16 8 16C3.58171 16 0 12.4183 0 8C0 3.58171 3.58171 0 8 0ZM8.85714 11.4286C8.85714 11.2012 8.76684 10.9832 8.60609 10.8225C8.44535 10.6617 8.22733 10.5714 8 10.5714C7.77267 10.5714 7.55465 10.6617 7.39391 10.8225C7.23316 10.9832 7.14286 11.2012 7.14286 11.4286C7.14286 11.6559 7.23316 11.8739 7.39391 12.0347C7.55465 12.1954 7.77267 12.2857 8 12.2857C8.22733 12.2857 8.44535 12.1954 8.60609 12.0347C8.76684 11.8739 8.85714 11.6559 8.85714 11.4286ZM6.85714 5.71429C6.85714 5.40743 6.96 5.11943 7.14114 4.91543C7.31314 4.72171 7.58343 4.57143 8 4.57143C8.74743 4.57143 9.36114 5.34171 9.16 6.14743C9.05714 6.56 8.81143 6.796 8.44172 7.15086L8.34 7.248C7.92343 7.65143 7.42857 8.18743 7.42857 9.14286C7.42857 9.29441 7.48878 9.43976 7.59594 9.54692C7.7031 9.65408 7.84845 9.71429 8 9.71429C8.15155 9.71429 8.2969 9.65408 8.40406 9.54692C8.51123 9.43976 8.57143 9.29441 8.57143 9.14286C8.57143 8.67029 8.77314 8.41886 9.13429 8.07029L9.24343 7.96629C9.59429 7.63486 10.0811 7.17486 10.2686 6.424C10.6389 4.944 9.53829 3.42857 8 3.42857C7.27371 3.42857 6.68686 3.70686 6.28743 4.156C5.89714 4.59486 5.71429 5.164 5.71429 5.71429C5.71429 5.86584 5.77449 6.01118 5.88165 6.11835C5.98882 6.22551 6.13416 6.28571 6.28571 6.28571C6.43727 6.28571 6.58261 6.22551 6.68978 6.11835C6.79694 6.01118 6.85714 5.86584 6.85714 5.71429Z" fill="#2B8AFC"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="all-service-component">
      <Overlay active={active}>
        <div>
          123
        </div>
      </Overlay>
      <div className="main-title">{t('All service')}</div>
      <Slider
        elements={getServicesGroup().map(((el) => ({
          id: el.id,
          content: (): JSX.Element => (
            <div className="_px-2.5 _flex _flex-col _w-full _gap-6">
              {getItem(el.coll[0])}
              {getItem(el.coll[1])}
            </div>
          )
        })))}
      />
    </div>
  );
};