"use client";
import React, { FC } from 'react';

import { Footer } from '@/components/Footer';

import { Benefits } from './Benefits';
import { InputForm } from './InputForm';
import { Instruction } from './Instruction';
import './style.scss';

interface Props {}

export const CareerPage: FC<Props> = (props) => {
  return (
    <div className="main-page">
      <div className="main-content _flex _flex-col">
        <div className="career-title">Do you want to join T⅄T team?</div>
        <Benefits />
        <div className="career-title">How to join?</div>
        <Instruction />
        <div className="career-title">Filling form</div>
        <InputForm />
        <div className="_flex _flex-col">
          <Footer />
        </div>
      </div>
    </div>
  );
};