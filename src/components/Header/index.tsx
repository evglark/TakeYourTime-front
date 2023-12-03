'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { MessengerIcon } from '@/components/common/icons/Messenger';
import { TelegramIcon } from '@/components/common/icons/Telegram';
import { WhatsappIcon } from '@/components/common/icons//Whatsapp';
import { LogoIcon } from './Logo';
import './style.scss';

export const Header = () => {
  const navigation = [
    { title: 'Service' },
    { title: 'FAQ' },
    { title: 'Subscription' },
    { title: 'Career' },
    { title: 'Gift' },
    { title: 'English' },
  ];

  return (
    <header>
      <nav className="container _flex">
        <div className="logo-wrapper">
          <Link className="navbar-brand" href={'/'}>
            <div>
              <LogoIcon />
            </div>
          </Link>
        </div>
        {navigation.map((item, index) => (
          <div className="navigation-wrapper _flex _flex-col _justify-center" key={item.title + index}>
            <Link href={'/'} className="_px-4 _py-2">
              <div className="nav-link">{item.title}</div>
            </Link>
          </div>
        ))}
        <div className="sub-menu-wrapper _ml-auto _flex _gap-6">
          <div className="_flex _flex-col _justify-center">+48 575 247 882</div>
          <div className="_flex _gap-3">
            <div className="icon _flex _flex-col _justify-center">
              <TelegramIcon />
            </div>
            <div className="icon _flex _flex-col _justify-center">
              <WhatsappIcon />
            </div>
            <div className="icon _flex _flex-col _justify-center">
              <MessengerIcon />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
};
