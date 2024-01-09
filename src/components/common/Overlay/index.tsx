import React from 'react';

import './style.scss';

interface Props {
  active: boolean;
  children: React.ReactNode;
}

export const Overlay: React.FC<Props> = ({ active, children }) => active ? (
  <div className="main-overlay-wrapper">
    {children}
  </div>
) : null;
