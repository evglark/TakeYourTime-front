"use client";
import React, { useState } from 'react';

import './style.scss';

export const InputForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [about, setAbout] = useState('');

  const onSend = async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/careers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
      body: JSON.stringify({ name, phone, email, about }),
    });

    const data = await response.json();

    setName('');
    setPhone('');
    setEmail('');
    setAbout('');
  };

  return (
    <div className="input-form-component">
      <div className="_mb-6 _flex _flex-col _gap-3">
        <div className="input-wrapper">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Surname and Name" />
        </div>
        <div className="_flex _gap-5">
          <div className="input-wrapper">
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Contact number" />
          </div>
          <div className="input-wrapper">
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
          </div>
        </div>
        <div className="input-wrapper text-about-input">
          <textarea value={about} onChange={(e) => setAbout(e.target.value)} placeholder="Add more details" />
        </div>
      </div>
      <div className="_mb-6 _flex _flex-col _gap-3">
        <div className="button-wrapper" onClick={onSend}>
          send
        </div>
      </div>
    </div>
  );
};