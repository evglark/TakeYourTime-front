import React, { useState } from 'react';
import Image from 'next/image';

import { ArrowLeft } from './icons/ArrowLeft';
import { ArrowRight } from './icons/ArrowRight';

import './style.scss';

export const DatePicker = () => {
	const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
	const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
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

	const prevMonth = () => {
		const prevMonthDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
		setCurrentMonth(prevMonthDate);
	};

	const nextMonth = () => {
		const nextMonthDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
		setCurrentMonth(nextMonthDate);
	};

	const generateCalendar = () => {
		const daysInMonth = getDaysInMonth(currentMonth);
		const firstDayOfMonth = getFirstDayOfMonth(currentMonth);
		const calendar = [];

		for (let i = 0; i < firstDayOfMonth; i++) {
			calendar.push(
				<div className="day-cell" key={`empty-${i}`}>{' '}</div>
			);
		}

		for (let day = 1; day <= daysInMonth; day++) {
			calendar.push(
				<div className="day-cell _flex _items-center _justify-center _cursor-pointer" key={day}>
					{day}
				</div>
			);
		}

		return calendar;
	};

	return (
		<div className="date-picker-component _p-4">
			<div className="_flex _items-center _justify-between _mb-5">
				<div className="_text-xl _font-bold">
					{months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
				</div>
				<div className="button-date-picker-wrapper _flex _justify-between">
					<button className="button-date-picker _flex _items-center _justify-center" onClick={prevMonth}>
						<ArrowLeft />
					</button>
					<button className="button-date-picker _flex _items-center _justify-center" onClick={nextMonth}>
						<ArrowRight />
					</button>
				</div>
			</div>
			<div className="_grid _grid-cols-7">
				{daysOfWeek.map((day) => (
					<div className="week-day-cell _flex _items-center _justify-center" key={day}>
						<div>{day}</div>
					</div>
				))}
				{generateCalendar()}
			</div>
		</div>
	);
};
