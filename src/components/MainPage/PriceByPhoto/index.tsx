import React from 'react';
import Image from 'next/image';

import { MessengerIcon } from '@/components/common/icons/components/Messenger';
import { TelegramIcon } from '@/components/common/icons/components/Telegram';
import { WhatsappIcon } from '@/components/common/icons/components/Whatsapp';
import { Writer } from '@/components/common/Writer';

import bubblesSvg from './icons/bubbles.svg';
import iPhoneSvg from './icons/iPhone.svg';
import chatPng from './images/chat.png';
import './style.scss';

export const PriceByPhoto = (props: any) => {
  const { t } = props;

  return (
    <div className="price-by-photo-component _flex _justify-center">
      <div className="white-bg">
        <div className="_flex _flex-col">
          <div className="title _flex _justify-center">
            <Writer text={t('Get the price from the photo with 99% accuracy')} />
          </div>
          <div className="text _flex _justify-center">
            <Writer text={t('Send a photo of the room and comments in any convenient \n messenger, and we will make an accurate calculation for you')} />
          </div>
          <div className="img-wrapper _flex _justify-center">
            <Image src={bubblesSvg} alt='' />
            <Image src={chatPng} alt='' />
            <Image src={iPhoneSvg} alt='' />
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
