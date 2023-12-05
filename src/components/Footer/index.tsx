import React from 'react';

import { MessengerIcon } from '@/components/common/icons/Messenger';
import { WhatsappIcon } from '@/components/common/icons//Whatsapp';
import { TelegramIcon } from '@/components/common/icons/Telegram';
import { LogoIcon } from '@/components/Header/Logo';

import './style.scss';

export const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="_flex _justify-center">
        <div className="logo-wrapper">
          <LogoIcon />
        </div>
      </div>
      <div className="title _flex _justify-center">
        <div>Take Your Time</div>
      </div>
      <div className="_flex _justify-center">
        <div className="links-wrapper _flex _justify-between">
          <div>Services</div>
          <div>FAQ</div>
          <div>Subscription</div>
          <div>Gift Cards</div>
        </div>
      </div>
      <div className="_flex _justify-center">
        <div className="contacts-wrapper _flex _justify-between">
          <div>+48 575 247 882</div>
          <div className="icon">
            <MessengerIcon />
          </div>
          <div className="icon">
            <WhatsappIcon />
          </div>
          <div className="icon">
            <TelegramIcon />
          </div>
        </div>
      </div>
      <div className="_flex _justify-center">
        All rights reserved
      </div>
    </div>
  )
};
