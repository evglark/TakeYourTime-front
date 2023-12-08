"use client";
import React, { FC, useState } from 'react';

import './style.scss';

interface Props {
	elements: {
		id: number | string;
		content: () => JSX.Element;
	}[];
	step?: number;
};

export const Slider: FC<Props> = (props) => {
	const { elements, step = 4 } = props;
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide + step) % elements.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide - step + elements.length) % elements.length);
	};

	return (
		<div className="slider-component">
			<div className="_mb-6">
				<button onClick={prevSlide} className="arrow-button arrow-button-left _cursor-pointer _opacity-75 hover:_opacity-100 _z-10">
					{'<'}
				</button>
				<div className="_flex _transition-transform _duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 25}%)` }}>
					{elements.map((el) => (
						<div className="_flex-shrink-0 _w-1/4 _flex _items-center _justify-center" key={el.id}>
							{el.content()}
						</div>
					))}
				</div>
				<button onClick={nextSlide} className="arrow-button arrow-button-right _cursor-pointer _opacity-75 hover:_opacity-100 _z-10">
					{'>'}
				</button>
			</div>
			<div className='_flex _justify-center _gap-2'>
				{Array.from({ length: elements.length / step }, (_, i) => {
					const subElement = currentSlide / step === i;

					return (
						<div className={`slider-status _transition-all _duration-500 ${subElement ? '' : 'sub'}`} key={'slider-status' + i} />
					)
				})}
			</div>
		</div>
	);
};
