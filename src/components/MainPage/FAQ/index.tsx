import React, { useState } from 'react';
import Image from 'next/image';

import arrowDownSvg from './icons/arrow-down.svg';
import './style.scss';

const faqQuestions = [
  { title: 'How do I make an order?', text: 'You have three booking options: online, phone, or social media. For online bookings, instant card payment is available. If you choose phone or social media and prefer online payment, notify the manager for a payment link sent to you' },
  { title: 'Subscription', text: 'If you book cleanings regularly, you get a guaranteed discount: one cleaning per week — a 20% discount, two cleanings per month — a 15% discount, one cleaning per month — a 10% discount. We can agree on a different schedule and calculate an individual discount for you' },
  { title: 'How to cancel the order', text: 'Once you book on our website, an email confirmation follows, containing links to pay, edit, or cancel. You can self-cancel up to 12 hours before your appointment. If within 12 hours, reach out to us via call center or social media for assistance' },
  { title: 'Do I need to provide my own cleaning supplies?', text: 'Our experts have everything they need to clean the entire apartment and wash the windows. We use professional supplies You only need to open the door' },
  { title: 'What should I do if I\'m dissatisfied with how the \n cleaning was done?', text: 'After the cleaning service, you have 24 hours to check whether you like the results. If you\'re not satisfied, you can, take pictures and send them to our email or social media. Please contact our customer support via email or phone, and tell us about what went wrong. You may request a free \'correction cleaning\' (with the same, or different cleaner depending on your preference). You may also be eligible for a discount on future cleanings, as well as a partial or 100% refund' },
  { title: 'Is it possible for me to cancel, reschedule, \n or modify the reservation?', text: 'Once you\'ve made a reservation through our website, a confirmation email will be sent to you. This email includes links for payment, as well as options to modify or cancel your booking. You have the freedom to cancel your booking independently as long as it\'s at least 12 hours prior to your appointment. If you need to cancel within the 12-hour window, please get in touch with our call center or message us via social media. Similarly, you can adjust the details of your booking and the chosen date through these same channels. During the cleaning, you can also request additional services or remove some of the options, which will be reflected in your final bill' },
  { title: 'Things which are not included in cleaning services', text: 'Cleaning of high or hard-to-reach areas (e.g., ceiling fans or light fixtures) Exterior areas (e.g., patios, decks, and yards) Mold or mildew removal, especially for severe cases Wall washing or scrubbing We don\'t move items and furniture' },
  { title: 'Can I order few services at the same time?', text: 'Yes, you can order any type of cleaning, ozonation and dry cleaning at the same time as well. It will not affect the duration of the cleaning.' },
  { title: 'What is the eco-cleaning', text: 'Many people are allergic to household chemicals, for them eco-friendly cleaning is the only way to keep clean' },
  { title: 'Promocodes', text: 'Apply the code "TYT" for a 15% discount on your first order. We also offer seasonal promotions with unique codes. Use the code when booking online or share it with our call center. Promo code availability is limited; we might suggest minor date changes for your cleaning' },
];

export const FAQ = () => {
  const [activeQuest, setActiveQuest] = useState('');

  const toggleActiveQuest = (title: string) => {
    setActiveQuest(c => c === title ? '' : title);
  };

  return (
    <div className="faq-component">
      <div className="title">FAQ</div>
      {activeQuest}
      <div className="_w-full _flex _space-between _gap-5">
        <div className="_w-6/12 _flex _flex-col _gap-6">
          {faqQuestions.map((item, i) => i%2 ? (
            <div className={`_w-full item-faq-wrapper`} key={JSON.stringify(item)}>
              <div className="_flex _justify-between">
                <div className="item-title">{item.title}</div>
                <div style={{ width: 44 }} className="_flex _justify-center _items-center _cursor-pointer" onClick={() => toggleActiveQuest(item.title)}>
                  <Image src={arrowDownSvg} alt="" />
                </div>
              </div>
              {activeQuest === item.title && (
                <div className="item-faq-content">
                  {item.text}
                </div>
              )}
            </div>
          ): null)}
        </div>
        <div className="_w-6/12 _flex _flex-col _gap-6">
          {faqQuestions.map((item, i) => !(i%2) ? (
            <div className="_w-full item-faq-wrapper" key={JSON.stringify(item)}>
              <div className="_flex _justify-between">
                <div className="item-title">{item.title}</div>
                <div style={{ width: 44 }} className="_flex _justify-center _items-center _cursor-pointer" onClick={() => toggleActiveQuest(item.title)}>
                  <Image src={arrowDownSvg} alt="" />
                </div>
              </div>
              {activeQuest === item.title && (
                <div className="item-faq-content">
                  {item.text}
                </div>
              )}
            </div>
          ): null)}
        </div>
      </div>
    </div>
  )
};
