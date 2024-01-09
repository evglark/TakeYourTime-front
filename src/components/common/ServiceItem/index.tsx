import React from 'react';
import Image from 'next/image';

import howItWorksSvg from '@/components/common/icons/howItWorks.svg';

import './style.scss';

interface Props {
  title: string;
  icon: any;
  t: any;
  onClick: () => void;
}

export const ServiceItem: React.FC<Props> = ({ title, icon, t, onClick }) => (
  <div className="service-wrapper _w-full _flex _flex-col _justify-center _gap-5">
    <div className="item-title _whitespace-nowrap">{title}</div>
    <div className="_flex _justify-center">
      <Image src={icon} alt='' />
    </div>
    <div className="_flex _justify-center">
      <div className="_flex _gap-2">
        <div>{t('How it works')}</div>
        <div className="_py-1 _cursor-pointer" onClick={onClick}>
          <Image src={howItWorksSvg} alt='' />
        </div>
      </div>
    </div>
  </div>
);
