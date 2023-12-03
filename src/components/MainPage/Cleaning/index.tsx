import React, { useState } from 'react';

import { Switcher } from '../../common/Switcher';
import './style.scss';

export const Cleaning = () => {
  const tabs = ['Regular', 'Deep'];
  const [tab, setTab] = useState('Regular');
  const rooms = ['Bedroom', 'Kitchen', 'Corridor', 'Bathroom', 'Balcony', 'Additional'];
  const [room, setRoom] = useState('Bedroom');

  return (
    <div className="costs-component _flex _flex-col _items-center">
      <div className="main-title">What cleaning consists of</div>
      <Switcher tab={tab} tabs={tabs} onClick={(el: string) => setTab(el)} />
      <div style={{ width: '1232px' }}>
        {tab}
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
