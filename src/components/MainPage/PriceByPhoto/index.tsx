import React from 'react';
import Image from 'next/image';

import { MessengerIcon } from '@/components/common/icons/Messenger';
import { TelegramIcon } from '@/components/common/icons//Telegram';
import { WhatsappIcon } from '@/components/common/icons/Whatsapp';

import bubblesSvg from './icons/bubbles.svg';
import iPhoneSvg from './icons/iPhone2.svg';
import chatPng from './icons/chat.png';
import './style.scss';

export const PriceByPhoto = (props: any) => {
  const { t } = props;

  return (
    <div className="price-by-photo-component _flex _justify-center">
      <div className="white-bg">
        <div className="_flex _flex-col">
          <div className="title _flex _justify-center">
            {t('Get the price from the photo \n with 99% accuracy')}
          </div>
          <div className="text _flex _justify-center">
            {t('Send a photo of the room and comments in any convenient \n messenger, and we will make an accurate calculation for you')}
          </div>
          <div className="img-wrapper _flex _justify-center">
            <Image src={bubblesSvg} alt='' />
            <Image src={chatPng} alt='' />
            <Image src={iPhoneSvg} alt='' priority />
          </div>
        </div>
        <div className="_flex _justify-center _gap-6">
          <div className="social-button _flex _justify-center _gap-2 _cursor-pointer">
            <TelegramIcon />
            <div>Telegram</div>
          </div>
          <div className="social-button _flex _justify-center _gap-2 _cursor-pointer">
            <WhatsappIcon />
            <div>Whatsapp</div>
          </div>
          <div className="social-button _flex _justify-center _gap-2 _cursor-pointer">
            <MessengerIcon />
            <div>Messenger</div>
          </div>
        </div>
      </div>
    </div>
  )
};
