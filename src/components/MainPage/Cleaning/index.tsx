"use client";
import React, { Fragment, useState, useRef, useLayoutEffect } from 'react';

import { rooms, options } from './constants';
import { getRoom } from './utils';
import './style.scss';

export const Cleaning = (props: any) => {
  const { t } = props;
  const [room, setRoom] = useState(() => rooms[0]);
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);
  const myElementRef = useRef<HTMLDivElement>(null);

  const countMarginTop = (top: number, newHeight: number): number => {
    return Math.round(top * (newHeight / 850));
  }

  const countMarginLeft = (left: number, newWidth: number): number => {
    return Math.round(left * (newWidth / 1232));
  }

  useLayoutEffect(() => {
    if (myElementRef.current) {
      const el = myElementRef.current.getBoundingClientRect();
      setImgWidth(el.width);
      setImgHeight(el.height);
    }
  }, []);

  return (
    <div className="costs-component _flex _flex-col _items-center">
      <div className="main-title">What cleaning consists of</div>
      <div className={"room-img-wrapper" + " " + room.toLowerCase()} ref={myElementRef}>
        {getRoom(room)}
        {options.find((el) => el.room === room)?.options.map((el) => {
          const flexDirection = { flexDirection: el.revers ? 'row-reverse' : 'row' };
          const position = {
            top: countMarginTop(el.position[1], imgHeight),
            left: countMarginLeft(el.position[0], imgWidth),
          };

          return (
            <Fragment key={el.title + JSON.stringify(el.position)}>
              {/* @ts-ignore */}
              <div className="room-services _flex _gap-3" style={{ ...position, ...flexDirection }}>
                <div className="room-service-title _flex _items-center">{t(el.title)}</div>
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
            {t(el)}
          </div>
        ))}
      </div>
    </div>
  )
};
