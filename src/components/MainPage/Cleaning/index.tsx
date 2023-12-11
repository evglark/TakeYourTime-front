"use client";
import React, { Fragment, useState } from 'react';
import Image from 'next/image';

import { Switcher } from '../../common/Switcher';

import BalconyPng from './images/Balcony.png';
import BathroomPng from './images/Bathroom.png';
import BedroomPng from './images/Bedroom.png';
import CorridorPng from './images/Corridor.png';
import KitchenPng from './images/Kitchen.png';

import './style.scss';

export const Cleaning = () => {
  const tabs = ['Regular', 'Deep'];
  const rooms = ['Bedroom', 'Kitchen', 'Corridor', 'Bathroom', 'Balcony'];
  const [tab, setTab] = useState(() => tabs[0]);
  const [room, setRoom] = useState(() => rooms[0]);

  const options = [
    {
      room: 'Bedroom',
      options: [
        { title: 'Wiping down mirrors and frames', position: [883, 112] },
        { title: 'Removing dust from all accessible lamps', position: [339, 146], revers: true  },
        { title: 'Arranging household items', position: [714, 329] },
        { title: 'Dusting all the accessible surfaces', position: [231, 359], revers: true  },
        { title: 'Taking out garbage', position: [60, 511], revers: true  },
        { title: 'Making the bed', position: [445, 553] },
        { title: 'Vacuuming or sweeping \n and mopping floors', position: [108, 740], revers: true  },
      ]
    },
  ];

  const getRoom = (room: string) => {
    if (room === 'Bedroom') return <Image src={BedroomPng} alt="" />;
    if (room === 'Kitchen') return <Image src={KitchenPng} alt="" />;
    if (room === 'Corridor') return <Image src={CorridorPng} alt="" />;
    if (room === 'Bathroom') return <Image src={BathroomPng} alt="" />;
    if (room === 'Balcony') return <Image src={BalconyPng} alt="" />;
    return null;
  };

  return (
    <div className="costs-component _flex _flex-col _items-center">
      <div className="main-title">What cleaning consists of</div>
      <Switcher tab={tab} tabs={tabs} onClick={(el: string) => setTab(el)} />
      <div className={"room-img-wrapper" + " " + room.toLowerCase()}>
        {getRoom(room)}
        {options.find((el) => el.room === room)?.options.map((el) => {
          const position = { top: el.position[1], left: el.position[0] };
          const flexDirection = { flexDirection: el.revers ? 'row-reverse' : 'row' };

          return (
            <Fragment key={el.title + JSON.stringify(el.position)}>
              {/* @ts-ignore */}
              <div className="room-services _flex _gap-3" style={{ ...position, ...flexDirection }}>
                <div className="room-service-title _flex _items-center">{el.title}</div>
                <div className="room-service-point-wrapper _flex _justify-center _items-center">
                  <div className="room-service-point" />
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
      <div className="_flex _justify-around">
        {rooms.map((el) => (
          <div
            className={`room-item ${el === room && 'active'}`}
            onClick={() => setRoom(el as string)}
            key={el}
          >
            {el}
          </div>
        ))}
      </div>
    </div>
  )
};
