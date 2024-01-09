'use client';
import React, { FC, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Cookies from 'js-cookie';

import { useLocales } from '@/hooks/useLocales';
import { MessengerIcon } from '@/components/common/icons/components/Messenger';
import { TelegramIcon } from '@/components/common/icons/components/Telegram';
import { WhatsappIcon } from '@/components/common/icons/components/Whatsapp';
import { LocaleContext } from '@/components/Providers';
import { ILocales } from '@/locales';

import { LogoIcon } from './icons/Logo';
import { Polygon } from './icons/Polygon';
import './style.scss';

const mainLocales = {
  en: 'English',
  ru: 'Russian',
  pl: 'Polish',
  uk: 'Ukrainian',
};

interface Props {
  locales: ILocales[];
};

export const Header: FC<Props> = ({ locales }) => {
  const { t } = useLocales(locales);
  const [localesModal, setLocalesModal] = useState(false);
  const { locale, setNewLocal } = useContext(LocaleContext);
  const pathname = usePathname();

  const navigation = [
    { title: 'Service header' },
    { title: 'FAQ header' },
    { title: 'Subscription header' },
    { href: '/career', title: 'Career header' },
    { title: 'Gift header' },
  ];

  const onSelectLocale = (e: any, language: string) => {
    e.stopPropagation();
    const newLocale = Object.keys(mainLocales).find(key => {
      // @ts-ignore
      return mainLocales[key] === language;
    }) || 'en';

    Cookies.set('locale', newLocale);
    setNewLocal(newLocale);
    setLocalesModal(false);
  }

  useEffect(() => {
    const locale = Cookies.get('locale') || 'en';
    setNewLocal(locale);
  }, []);

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
        {navigation.map(navItem => (
          <div className={`navigation-wrapper ${pathname === navItem.href ? 'navigation-wrapper-active' : ''} _flex _flex-col _justify-center`} key={navItem.title}>
            <Link href={navItem.href || '/'} className="_px-4 _py-2">
              <div className="nav-link">{t(navItem.title)}</div>
            </Link>
          </div>
        ))}
        <div
          className="navigation-wrapper _flex _justify-between _items-center _cursor-pointer"
          onClick={() => setLocalesModal(true)}
        >
          <Link href={'/'} className="_py-2 _pr-1 _pl-4">
            {/* @ts-ignore */}
            <div className="nav-link">{t(mainLocales[locale])}</div>
          </Link>
          <Polygon />
          {localesModal ? (
            <div className="navigation-sub-menu-wrapper">
              {Object.values(mainLocales).map((option) => (
                <div
                  className="navigation-sub-menu-item"
                  onClick={(e) => onSelectLocale(e, option)}
                  key={option}
                >
                  {t(option)}
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="sub-menu-wrapper _ml-auto _flex _gap-6">
          <div className="_flex _flex-col _justify-center">+48 730 003 997</div>
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
