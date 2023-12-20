import React from 'react';

import './style.scss';

export const InputForm = () => {
  return (
    <div className="input-form-component">
      <div className="_mb-6 _flex _flex-col _gap-3">
        <div className="input-wrapper">
          <input type="text" placeholder="Surname and Name" />
        </div>
        <div className="_flex _gap-5">
          <div className="input-wrapper">
            <input type="text" placeholder="Contact number" />
          </div>
          <div className="input-wrapper">
            <input type="text" placeholder="E-mail" />
          </div>
        </div>
        <div className="input-wrapper text-about-input">
          <textarea placeholder="Add more details" />
        </div>
      </div>
      <div className="_mb-6 _flex _flex-col _gap-3">
        <div className="button-wrapper">
          send
        </div>
      </div>
    </div>
  );
};