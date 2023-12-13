'use client';
import React, { Fragment, useContext, useState } from 'react';
import Link from 'next/link';

import { MessengerIcon } from '@/components/common/icons/Messenger';
import { TelegramIcon } from '@/components/common/icons/Telegram';
import { WhatsappIcon } from '@/components/common/icons//Whatsapp';
import { LocaleContext } from '@/components/Providers';

import { LogoIcon } from './icons/Logo';
import { Polygon } from './icons/Polygon';
import './style.scss';

const locales = {
  en: 'English',
  ru: 'Russian',
  pl: 'Polish',
  uk: 'Ukrainian',
};

export const Header = () => {
  const [localesModal, setLocalesModal] = useState(false);
  const { locale, setNewLocal } = useContext(LocaleContext);
  const navigation = [
    { title: 'Service' },
    { title: 'FAQ' },
    { title: 'Subscription' },
    { title: 'Career' },
    { title: 'Gift' },
    {
      // @ts-ignore
      title: locales[locale],
      type: 'list',
      options: [
        'English',
        'Russian',
        'Polish',
        'Ukrainian',
      ],
    },
  ];

  const onSelectLocale = (e: any, language: string) => {
    e.stopPropagation();
    // @ts-ignore
    const newLocale = Object.keys(locales).find(key => locales[key] === language) || 'en';

    setNewLocal(newLocale);
    setLocalesModal(false);
  }

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
        {navigation.map((item, index) => item.type === 'list' ? (
          <Fragment key={item.title + index}>
            <div
              className="navigation-wrapper _flex _justify-between _items-center _cursor-pointer"
              onClick={() => setLocalesModal(true)}
            >
              <Link href={'/'} className="_py-2 _pr-1 _pl-4">
                <div className="nav-link">{item.title}</div>
              </Link>
              <Polygon />
              {localesModal ? (
                <div className="navigation-sub-menu-wrapper">
                  {item.options.map((option) => (
                    <div className="navigation-sub-menu-item" onClick={(e) => onSelectLocale(e, option)} key={option}>
                      {option}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </Fragment>
        ) : (
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
