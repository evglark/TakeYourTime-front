"use client";
import React, { useState, useRef } from 'react';
import Image from 'next/image';

import { Switcher } from '@/components/common/Switcher';

import BedroomEngDeep from './images/BedroomEngDeep.png';
import BedroomEngReg from './images/BedroomEngReg.png';
import BedroomPolDeep from './images/BedroomDeepPol.png';
import BedroomPolReg from './images/BedroomRegPol.png';
import BedroomRusDeep from './images/BedroomRusDeep.png';
import BedroomRusReg from './images/BedroomRusReg.png';
import BedroomUkrDeep from './images/BedroomDeepUkr.png';
import BedroomUkrReg from './images/BedroomRegUkr.png';

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
  Corridor: {
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
  Bathroom: {
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
  Balcony: {
    Regular: {
      en: BedroomEngReg, // TODO: change to BedroomRusReg
      pl: BedroomRusReg, // TODO: change to BedroomRusReg
      ru: BedroomRusReg, // TODO: change to BedroomRusReg
      ua: BedroomRusReg, // TODO: change to BedroomRusReg
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

  return (
    <div className="cleaning-component _flex _flex-col _items-center">
      <div className="main-title">{t('What cleaning consists of')}</div>
      <div className="switcher-wrapper">
        <Switcher tab={tab} tabs={tabs} t={t} onClick={(el: string) => setTab(el)} />
      </div>
      <div className={"room-img-wrapper" + " " + room.toLowerCase()} ref={myElementRef}>
        {/* @ts-ignore */}
        <Image src={roomsImages[room][tab][lng]} alt="" />
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
