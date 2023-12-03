import React, { useState } from 'react';

import { Switcher } from '../../common/Switcher';
import './style.scss';

export const Costs = () => {
  const tabs = ['Subscription', 'One-time'];
  const [tab, setTab] = useState('Subscription');

  return (
    <div className="costs-component _flex _flex-col _items-center">
      <div className="main-title">How much it costs</div>
      <Switcher tab={tab} tabs={tabs} onClick={(el: string) => setTab(el)} />
      <div style={{ width: '1232px' }}>
        {tab}
      </div>
      123
    </div>
  )
};
