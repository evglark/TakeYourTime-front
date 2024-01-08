"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

import { Switcher } from '@/components/common/Switcher';

// Bath room images
import BathEngDeep from './images/BathEngDeep.png';
import BathEngReg from './images/BathEngReg.png';
import BathPolDeep from './images/BathPolDeep.png';
import BathPolReg from './images/BathPolReg.png';
import BathRusDeep from './images/BathRusDeep.png';
import BathRusReg from './images/BathRusReg.png';
import BathUkrDeep from './images/BathUkrDeep.png';
import BathUkrReg from './images/BathUkrReg.png';
// Bedroom room images
import BedroomEngDeep from './images/BedroomEngDeep.png';
import BedroomEngReg from './images/BedroomEngReg.png';
import BedroomPolDeep from './images/BedroomPolDeep.png';
import BedroomPolReg from './images/BedroomPolReg.png';
import BedroomRusDeep from './images/BedroomRusDeep.png';
import BedroomRusReg from './images/BedroomRusReg.png';
import BedroomUkrDeep from './images/BedroomUkrDeep.png';
import BedroomUkrReg from './images/BedroomUkrReg.png';
// Corridor room images
import CorridorEngDeep from './images/CorridorEngDeep.png';
import CorridorEngReg from './images/CorridorEngReg.png';
import CorridorPolDeep from './images/CorridorPolDeep.png';
import CorridorPolReg from './images/CorridorPolReg.png';
import CorridorRusDeep from './images/CorridorRusDeep.png';
import CorridorRusReg from './images/CorridorRusReg.png';
import CorridorUkrDeep from './images/CorridorUkrDeep.png';
import CorridorUkrReg from './images/CorridorUkrReg.png';
// Kitchen room images
import KitchenEngDeep from './images/KitchenEngDeep.png';
import KitchenEngReg from './images/KitchenEngReg.png';
import KitchenPolDeep from './images/KitchenPolDeep.png';
import KitchenPolReg from './images/KitchenPolReg.png';
import KitchenRusDeep from './images/KitchenRusDeep.png';
import KitchenRusReg from './images/KitchenRusReg.png';
import KitchenUkrDeep from './images/KitchenUkrDeep.png';
import KitchenUkrReg from './images/KitchenUkrReg.png';

import BalconyEngDeep from './images/BalconyEngDeep.png';
import BalconyPolDeep from './images/BalconyPolDeep.png';
import BalconyRusDeep from './images/BalconyRusDeep.png';
import BalconyUkrDeep from './images/BalconyUkrDeep.png';

import './style.scss';

const roomsImages = {
  Bedroom: {
    Regular: {
      en: BedroomEngReg,
      pl: BedroomPolReg,
      ru: BedroomRusReg,
      ua: BedroomUkrReg,
    },
    Deep: {
      en: BedroomEngDeep,
      pl: BedroomPolDeep,
      ru: BedroomRusDeep,
      ua: BedroomUkrDeep,
    }
  },
  Kitchen: {
    Regular: {
      en: KitchenEngReg,
      pl: KitchenPolReg,
      ru: KitchenRusReg,
      ua: KitchenUkrReg,
    },
    Deep: {
      en: KitchenEngDeep,
      pl: KitchenPolDeep,
      ru: KitchenRusDeep,
      ua: KitchenUkrDeep,
    }
  },
  Corridor: {
    Regular: {
      en: CorridorEngReg,
      pl: CorridorPolReg,
      ru: CorridorRusReg,
      ua: CorridorUkrReg,
    },
    Deep: {
      en: CorridorEngDeep,
      pl: CorridorPolDeep,
      ru: CorridorRusDeep,
      ua: CorridorUkrDeep,
    }
  },
  Bathroom: {
    Regular: {
      en: BathEngReg,
      pl: BathPolReg,
      ru: BathRusReg,
      ua: BathUkrReg,
    },
    Deep: {
      en: BathEngDeep,
      pl: BathPolDeep,
      ru: BathRusDeep,
      ua: BathUkrDeep,
    }
  },
  Balcony: {
    Deep: {
      en: BalconyEngDeep,
      pl: BalconyPolDeep,
      ru: BalconyRusDeep,
      ua: BalconyUkrDeep,
    }
  },
};

export const Cleaning = (props: any) => {
  const { t, lng } = props;
  const tabs = ['Regular', 'Deep'];
  const rooms = {
    Regular: ['Bedroom', 'Kitchen', 'Corridor', 'Bathroom'],
    Deep: ['Bedroom', 'Kitchen', 'Corridor', 'Bathroom', 'Balcony']
  };

  const [tab, setTab] = useState(() => tabs[0]);
  // @ts-ignore
  const [room, setRoom] = useState(() => rooms[tab][0]);
  const myElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tab === 'Regular' && room === 'Balcony') {
      setRoom('Bedroom');
    }
  }, [tab, room]);

  return (
    <div className="cleaning-component _flex _flex-col _items-center">
      <div className="main-title">{t('What cleaning consists of')}</div>
      <div className="switcher-wrapper">
        <Switcher tab={tab} tabs={tabs} t={t} onClick={(el: string) => setTab(el)} />
      </div>
      <div className={"room-img-wrapper" + " " + room.toLowerCase()} ref={myElementRef}>
        {tab === 'Regular' && room === 'Balcony' ? null : (
          <>
            {/* @ts-ignore */}
            <Image src={roomsImages[room]?.[tab]?.[lng]} alt="" priority />
          </>
        )}
      </div>
      <div className="_flex _justify-around">
        {/* @ts-ignore */}
        {rooms[tab].map((el: any) => (
          <div
            className={`room-item ${el === room && 'active'}`}
            onClick={() => setRoom(el as string)}
            key={el}
          >
            {t(el)}
          </div>
        ))}
      </div>
    </div>
  )
};
