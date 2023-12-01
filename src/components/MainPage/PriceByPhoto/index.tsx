import React from 'react';
import Image from 'next/image';

import bubblesIcon from './icons/bubbles.svg';
import iphoneIcon from './icons/iphone.svg';
import messenger from './icons/messenger.svg';
import telegram from './icons/telegram.svg';
import whatsapp from './icons/whatsapp.svg';
import './style.scss';

export const PriceByPhoto = () => {
  return (
    <div className="price-by-photo-component _flex _justify-center">
      <div className="white-bg">
        <div className="_flex _flex-col">
          <div className="title _flex _justify-center">
            {'Get the price from the photo \n with 99% accuracy'}
          </div>
          <div className="text _flex _justify-center">
            {'Send a photo of the room and comments in any convenient \n messenger, and we will make an accurate calculation for you'}
          </div>
          <div className="img-wrapper _flex _justify-center">
            <Image src={bubblesIcon} alt='' />
            <Image src={iphoneIcon} alt='' priority />
          </div>
        </div>
        <div className="_flex _justify-center _gap-6">
          <div className="social-button _flex _justify-center _gap-2 _cursor-pointer">
            <div>
              <Image width={24} height={24} src={telegram} alt='' />
            </div>
            <div>Telegram</div>
          </div>
          <div className="social-button _flex _justify-center _gap-2 _cursor-pointer">
            <div>
              <Image width={24} height={24} src={whatsapp} alt='' />
            </div>
            <div>Whatsapp</div>
          </div>
          <div className="social-button _flex _justify-center _gap-2 _cursor-pointer">
            <div>
              <Image width={24} height={24} src={messenger} alt='' />
            </div>
            <div>Messenger</div>
          </div>
        </div>
      </div>
    </div>
  )
};
