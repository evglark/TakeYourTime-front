import React, { useState } from 'react';

import './style.scss';

export const Costs = () => {
  const tabs = ['Regular', 'Deep'];
  const [tab, setTab] = useState('Regular');
  const rooms = ['Bedroom', 'Kitchen', 'Corridor', 'Bathroom', 'Balcony', 'Additional'];
  const [room, setRoom] = useState('Bedroom');

  return (
    <div className="costs-component _flex _flex-col _items-center">
      <div className="main-title">How much it costs</div>
      <div className="costs-switcher _flex _justify-around">
        {tabs.map((el) => (
          <div
            className="costs-switcher-title _cursor-pointer"
            onClick={() => setTab(el as string)}
          >
            <div className={el === tab ? 'active' : ''}>
              {el}
            </div>
          </div>
        ))}
        <div className="active-block" style={{ left: tabs.indexOf(tab) * 132 + 'px' }}/>
      </div>
      <div style={{ width: '1232px' }}>
        {tab}
      </div>
      <div className="_flex _justify-around">
        {rooms.map((el) => (
          <div
            className={`room-item ${el === room && 'active'}`}
            onClick={() => setRoom(el as string)}
          >
            {el}
          </div>
        ))}
      </div>
    </div>
  )
};
