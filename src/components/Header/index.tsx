'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from './logo.png'
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
        <div className="logo-wrapper _mr-5 _flex _flex-col">
          <Link className="navbar-brand" href={'/'}>
            <div className="_flex _justify-center">
              <Image width={50} height={50} src={logo} alt="" />
            </div>
            <div className="logo-title-wrapper">
              Washee
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
            <div className="_flex _flex-col _justify-center">Icon</div>
            <div className="_flex _flex-col _justify-center">Icon</div>
            <div className="_flex _flex-col _justify-center">Icon</div>
          </div>
        </div>
      </nav>
    </header>
  )
};
