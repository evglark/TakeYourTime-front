"use client";
import React, { Fragment, useState } from 'react';

import { rooms, options } from './constants';
import { getRoom } from './utils';
import './style.scss';

export const Cleaning = () => {
  const [room, setRoom] = useState(() => rooms[0]);

  return (
    <div className="costs-component _flex _flex-col _items-center">
      <div className="main-title">What cleaning consists of</div>
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
