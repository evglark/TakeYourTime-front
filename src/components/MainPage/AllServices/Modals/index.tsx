import React from 'react';
import Image from 'next/image';

import { Writer } from '@/components/common/Writer';
import closeSvg from '@/components/common/icons/closeButton.svg';

import './style.scss';

export const Modals = ({ title, onClose, t }: { title: string, onClose: () => void, t: any }) => {
  const renderGrid = (gridLists: number[]) => {
    return (
      <div className="_grid _grid-cols-2 _gap-6">
        {gridLists.map((lines, i) => (
          <div className="wrapper-modal-reg">
            <div className="wrapper-modal-reg-title">
              {t(title + '_' + i)}
            </div>
            {[...new Array(lines)].map((_, j) => (
              <div className="wrapper-modal-reg-list">
                <div className="wrapper-modal-reg-list-item">
                  <Writer text={t(title + '_' + i + '_' + j)} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="modal-wrapper-component">
      <div className="icon-wrapper-modal" onClick={onClose}>
        <Image src={closeSvg} alt='' />
      </div>
      <div>
        {title === 'Regular' ? renderGrid([7, 5, 5, 5]) : null}
        {title === 'Dry cleaning' ? renderGrid([2, 2, 2, 1]) : null}
        {title}
      </div>
    </div>
  );
}