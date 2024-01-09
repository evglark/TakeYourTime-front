import React from 'react';

import { MessengerIcon } from '@/components/common/icons/components/Messenger';
import { WhatsappIcon } from '@/components/common/icons/components/Whatsapp';
import { TelegramIcon } from '@/components/common/icons/components/Telegram';

import { FooterLogo } from './icons/FooterLogo';
import './style.scss';

export const Footer = (props: any) => {
  const { t } = props;

  return (
    <footer className="footer-wrapper">
      <div className="_flex _justify-center">
        <div className="logo-wrapper">
          <FooterLogo />
        </div>
      </div>
      <div className="title _flex _justify-center">
        <div>{t('Take Your Time')}</div>
      </div>
      <div className="_flex _justify-center">
        <div className="links-wrapper _flex _justify-between">
          <div>{t('Services footer')}</div>
          <div>{t('FAQ footer')}</div>
          <div>{t('Subscription footer')}</div>
          <div>{t('Gift Cards footer')}</div>
        </div>
      </div>
      <div className="_flex _justify-center">
        <div className="contacts-wrapper _flex _justify-between _gap-3">
          <div className="_flex _gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clipPath="url(#clip0_7152_2572)">
                <path fillRule="evenodd" clipRule="evenodd" d="M16.551 22.133C15.111 22.08 11.03 21.516 6.75602 17.243C2.48302 12.969 1.92002 8.88897 1.86602 7.44797C1.78602 5.25197 3.46802 3.11897 5.41102 2.28597C5.645 2.18494 5.90122 2.14647 6.15455 2.17435C6.40788 2.20222 6.64961 2.29548 6.85602 2.44497C8.45602 3.61097 9.56002 5.37497 10.508 6.76197C10.7166 7.0667 10.8058 7.43752 10.7586 7.80377C10.7114 8.17002 10.5311 8.5061 10.252 8.74797L8.30102 10.197C8.20677 10.265 8.14042 10.365 8.1143 10.4783C8.08818 10.5916 8.10407 10.7105 8.15902 10.813C8.60102 11.616 9.38702 12.812 10.287 13.712C11.188 14.612 12.44 15.45 13.299 15.942C13.4067 16.0024 13.5335 16.0193 13.6533 15.9892C13.7731 15.9591 13.8767 15.8842 13.943 15.78L15.213 13.847C15.4465 13.5368 15.7909 13.329 16.1742 13.2672C16.5575 13.2053 16.9498 13.2941 17.269 13.515C18.676 14.489 20.318 15.574 21.52 17.113C21.6817 17.3209 21.7845 17.5684 21.8177 17.8296C21.851 18.0908 21.8134 18.3562 21.709 18.598C20.872 20.551 18.754 22.214 16.551 22.133Z" fill="#13277E"/>
              </g>
              <defs>
                <clipPath id="clip0_7152_2572">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            +48 730 003 997
          </div>
          <div className="_flex _gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clipPath="url(#clip0_7152_2579)">
                <path d="M22 7.53503V17C22 17.7652 21.7077 18.5015 21.1827 19.0583C20.6578 19.615 19.9399 19.9501 19.176 19.995L19 20H5C4.23479 20.0001 3.49849 19.7077 2.94174 19.1828C2.38499 18.6578 2.04989 17.9399 2.005 17.176L2 17V7.53503L11.445 13.832L11.561 13.898C11.6977 13.9648 11.8478 13.9995 12 13.9995C12.1522 13.9995 12.3023 13.9648 12.439 13.898L12.555 13.832L22 7.53503Z" fill="#13277E"/>
                <path d="M19.0003 4C20.0803 4 21.0273 4.57 21.5553 5.427L12.0003 11.797L2.44531 5.427C2.69604 5.01977 3.04053 4.6784 3.45002 4.43138C3.85951 4.18436 4.32214 4.03886 4.79931 4.007L5.00031 4H19.0003Z" fill="#13277E"/>
              </g>
              <defs>
                <clipPath id="clip0_7152_2579">
                  <rect width="24" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            Mail: tytimeinbox@gmail.com
          </div>
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
        {t('All rights reserved')}
      </div>
    </footer>
  )
};
