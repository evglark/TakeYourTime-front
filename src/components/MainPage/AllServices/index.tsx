import React, { useState } from 'react';

import { Overlay } from '@/components/common/Overlay';
import { Slider } from '@/components/common/Slider';
import { ServiceItem } from '@/components/common/ServiceItem';
import { useClickOutside } from '@/hooks/useClickOutSide';

import Airbnb from './icons/airbnb.svg';
import Brush from './icons/brush.svg';
import BurningTime from './icons/burning-time.svg';
import Confetti from './icons/confetti.svg';
import Clean from './icons/clean.svg';
import DiscountEmail from './icons/discount-email.svg';
import Ecology from './icons/ecology.svg'
import Kitchen from './icons/kitchen.svg';
import List from './icons/list.svg';
import Mask from './icons/mask.svg';
import Office from './icons/office.svg';
import OzoneLayer from './icons/ozone-layer.svg';
import Sofa from './icons/sofa.svg';
import WeMoveToNewHouse from './icons/we-move-to-new-house.svg';
import Window from './icons/window.svg';

import { Modals } from './Modals';
import './style.scss';

export const AllServices = (props: any) => {
  const { t } = props;
  const [active, setActive] = useState('');
  const ref = useClickOutside(() => setActive(''));

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

  return (
    <div className="all-service-component">
      <Overlay active={!!active}>
        <div ref={ref}>
          <Modals title={active} onClose={() => setActive('')} t={t} />
        </div>
      </Overlay>
      <div className="main-title">{t('All service')}</div>
      <Slider
        elements={getServicesGroup().map(((el) => ({
          id: el.id,
          content: (): JSX.Element => (
            <div className="_px-2.5 _flex _flex-col _w-full _gap-6">
              <ServiceItem title={t(el.coll[0].title)} icon={el.coll[0].icon} t={t} onClick={() => setActive(el.coll[0].title)} />
              <ServiceItem title={t(el.coll[1].title)} icon={el.coll[1].icon} t={t} onClick={() => setActive(el.coll[1].title)} />
            </div>
          )
        })))}
      />
    </div>
  );
};