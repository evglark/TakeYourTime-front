import React, { useState } from 'react';

import { Switcher } from '../../common/Switcher';
import { Balcony } from './Rooms/Balcony';
import { Bathroom } from './Rooms/Bathroom';
import { Bedroom } from './Rooms/Bedroom';
import { Corridor } from './Rooms/Corridor';
import { Kitchen } from './Rooms/Kitchen';
import './style.scss';

const tabs = ['Regular', 'Deep'];
const rooms = ['Bedroom', 'Kitchen', 'Corridor', 'Bathroom', 'Balcony'];
const options = [
  {
    room: 'Bedroom',
    options: [
      'Wiping down mirrors and frames',
      'Removing dust from all accessible lamps',
      'Arranging household items',
      'Dusting all the accessible surfaces',
      'Taking out garbage',
      'Making the bed',
      'Vacuuming or sweeping \n and mopping floors'
    ]
  },
];

const getRoom = (room: string) => {
  switch (room) {
    case 'Bedroom':
      return <Bedroom />;
    case 'Kitchen':
      return <Kitchen />;
    case 'Corridor':
      return <Corridor />;
    case 'Bathroom':
      return <Bathroom />;
    case 'Balcony':
      return <Balcony />;
    default:
      return null;
  }
}

export const Cleaning = () => {
  const [tab, setTab] = useState('Regular');
  const [room, setRoom] = useState('Bedroom');

  return (
    <div className="costs-component _flex _flex-col _items-center">
      <div className="main-title">What cleaning consists of</div>
      <Switcher tab={tab} tabs={tabs} onClick={(el: string) => setTab(el)} />
      <div className={"room-img-wrapper" + " " + room.toLowerCase()}>
        {getRoom(room)}
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
