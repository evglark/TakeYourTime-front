import React from 'react';

import { QuestionIcon } from './icons/QuestionIcon';
import { ReferralIcon } from './icons/ReferralIcon';
import { PaymentForm } from './PaymentForm';
import './style.scss';

export const UserData = () => {
  return (
    <div className="user-data-from">
      <div className="title-user-from">Address</div>
      <div className="_mb-6 _flex _flex-col _gap-3">
        <div className="input-wrapper">
          <input type="text" placeholder="Street" />
        </div>
        <div className="_flex _gap-5">
          <div className="input-wrapper">
            <input type="text" placeholder="House number" />
          </div>
          <div className="input-wrapper">
            <input type="text" placeholder="Apartment" />
          </div>
        </div>
        <div className="_flex _gap-5">
          <div className="input-wrapper">
            <input type="text" placeholder="Postcode" />
          </div>
          <div className="input-wrapper">
            <input type="text" placeholder="Floor" />
          </div>
        </div>
        <div className="_flex _gap-5">
          <div className="input-wrapper">
            <input type="text" placeholder="Entrance number" />
          </div>
          <div className="input-wrapper">
            <input type="text" placeholder="Doorphone code (optional)" />
          </div>
        </div>
      </div>
      <div className="title-user-from">Contact details</div>
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
        <div className="input-wrapper">
          <input type="text" placeholder="Add more details (optional)" />
        </div>
      </div>
      <div className="input-referral-code _cursor-pointer">
        <div className="input-wrapper _flex">
          <div className="icon-wrapper">
            <ReferralIcon />
          </div>
          <input className="input" type="text" />
          <div className="button-wrapper">
            Apply
          </div>
        </div>
      </div>
      <div className="_flex _justify-center">
        <QuestionIcon />
        <div className="sub-text">How it works?</div>
      </div>
      <PaymentForm />
    </div>
  );
};
