import React from 'react';

import './style.scss';

export const Instruction = () => {
  return (
    <div className="instruction-component">
      <div className="_flex _justify-center _gap-5">
        {[
          { step: 1, text: 'Fill application form' },
          { step: 2, text: 'Schedule an interview' },
          { step: 3, text: 'Sign the contract' },
        ].map(el => (
          <div className="step-card _flex _flex-col _justify-center" key={el.step}>
            <div className="step-number">
              {el.step}
            </div>
            <div className="text-wrapper">
              {el.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};