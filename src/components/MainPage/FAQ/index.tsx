import React from 'react';
import './style.scss';

const faqQuestions = [
  [
    { title: 'How do I make an order?', text: '' },
    { title: 'Subscription', text: '' },
  ],
  [
    { title: 'How to cancel the order', text: '' },
    { title: 'Do I need to provide my own cleaning supplies?', text: '' },
  ],
  [
    { title: 'What should I do if I\'m dissatisfied with how the \n cleaning was done?', text: '' },
    { title: 'Is it possible for me to cancel, reschedule, \n or modify the reservation?', text: '' },
  ],
  [
    { title: 'Things which are not included in cleaning services', text: '' },
    { title: 'Can I order few services at the same time?', text: '' },
  ],
  [
    { title: 'What is the eco-cleaning', text: '' },
    { title: '', text: '' },
  ],
];

export const FAQ = () => {
  return (
    <div className="faq-component">
      <div className="title">FAQ</div>
      <div className="_flex _flex-col _gap-6">
        {faqQuestions.map((el, index) => (
          <div className="_flex _justify-center _gap-5" key={JSON.stringify(el)}>
            {el.map((item) => (
              <div className="item-faq-wrapper _flex _justify-between" key={JSON.stringify(item)}>
                <div className="item-title">{item.title}</div>
                <div>icon</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
};
