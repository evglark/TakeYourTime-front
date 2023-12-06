import React, { useState } from 'react';

const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

export const DatePicker = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date: any) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return new Date(year, month, 0).getDate();
  };

  const getFirstDayOfMonth = (date: any) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth);
    const calendar = [];

    // Добавляем пустые ячейки для дней предыдущего месяца
    for (let i = 0; i < firstDayOfMonth; i++) {
      calendar.push(
        <div key={`empty-${i}`} className="_border _p-2 _text-gray-500">
          {' '}
        </div>
      );
    }

    // Добавляем ячейки для дней текущего месяца
    for (let day = 1; day <= daysInMonth; day++) {
      calendar.push(
        <div key={day} className="_border _p-2">
          {day}
        </div>
      );
    }

    return calendar;
  };

  const prevMonth = () => {
    const prevMonthDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
    setCurrentMonth(prevMonthDate);
  };

  const nextMonth = () => {
    const nextMonthDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
    setCurrentMonth(nextMonthDate);
  };

  return (
    <div className="_p-4">
      <div className="_flex _items-center _justify-between _mb-4">
        <button className="_text-sm _font-medium _text-gray-600" onClick={prevMonth}>
          Предыдущий месяц
        </button>
        <div className="_text-xl _font-bold">
          {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </div>
        <button className="_text-sm _font-medium _text-gray-600" onClick={nextMonth}>
          Следующий месяц
        </button>
      </div>
      <div className="_grid _grid-cols-7 _gap-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="_text-center _font-semibold">
            {day}
          </div>
        ))}
        {generateCalendar()}
      </div>
    </div>
  );
};
