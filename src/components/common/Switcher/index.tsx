import React, { FC } from 'react';

import './style.scss';

interface Props {
  tab: string;
  tabs: string[];
  onClick: (el: string) => void;
}

export const Switcher: FC<Props> = ({ tabs, tab, onClick }) => (
  <div className="costs-switcher _flex _justify-around">
    {tabs.map((el: string) => (
      <div className="costs-switcher-title _cursor-pointer" onClick={() => onClick(el)} key={el}>
        <div className={el === tab ? 'active' : ''}>
          <b>{el}</b>
        </div>
      </div>
    ))}
    <div className="active-block" style={{ left: tabs.indexOf(tab) * 132 + 'px' }}/>
  </div>
);
