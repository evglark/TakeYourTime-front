import React, { useState } from 'react';

export const TimePicker = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  const generateTimeOptions = () => {
    const timeOptions = [];
    const startHour = 0;
    const endHour = 23;
    const intervalMinutes = 30;

    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute = 0; minute < 60; minute += intervalMinutes) {
        const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
        const formattedMinute = minute === 0 ? '00' : `${minute}`;
        const time = `${formattedHour}:${formattedMinute}`;
        timeOptions.push(
          <div
            key={time}
            className={`_border _p-2 _cursor-pointer ${
              selectedTime === time ? '_bg-blue-500 _text-white' : '_text-gray-600 hover:_bg-gray-200'
            }`}
            onClick={() => handleTimeClick(time)}
          >
            {time}
          </div>
        );
      }
    }

    return timeOptions;
  };

  const handleTimeClick = (time: any) => {
    setSelectedTime(time);
  };

  return (
    <div className="_p-4">
      <div className="_text-xl _font-bold _mb-4">Выберите время</div>
      <div className="_grid _grid-cols-4 _gap-2">{generateTimeOptions()}</div>
      {selectedTime && (
        <div className="_mt-4 _text-gray-600">Выбранное время: {selectedTime}</div>
      )}
    </div>
  );
};
