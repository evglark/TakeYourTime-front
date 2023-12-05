import React from 'react';

import { MessengerIcon } from '@/components/common/icons/Messenger';
import { WhatsappIcon } from '@/components/common/icons//Whatsapp';
import { TelegramIcon } from '@/components/common/icons/Telegram';

export const Footer = () => {
  return (
    <div>
      <div>logo</div>
      <div>Take Your Time</div>
      <div>
        <div>Services</div>
        <div>FAQ</div>
        <div>Subscription</div>
        <div>Gift Cards</div>
      </div>
      <div>
        <div>+48 575 247 882</div>
        <div>
          <MessengerIcon />
        </div>
        <div>
          <WhatsappIcon />
        </div>
        <div>
          <TelegramIcon />
        </div>
      </div>
      <div>All rights reserved</div>
    </div>
  )
};
