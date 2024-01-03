"use client";
import React, { FC, useState } from 'react';

import { LeftArrow } from './icons/LeftArrow';
import { RightArrow } from './icons/RightArrow';
import './style.scss';

interface Props {
	elements: {
		id: number | string;
		content: () => JSX.Element;
	}[];
	step?: number;
	status?: boolean;
};

export const Slider: FC<Props> = (props) => {
	const { elements, step = 4, status = true } = props;
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide + step) % elements.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide - step + elements.length) % elements.length);
	};

	return (
		<div className="slider-wrapper">
			<div className="arrow-button-left _cursor-pointer" onClick={prevSlide}>
				<LeftArrow />
			</div>
			<div className="slider-component">
				<div className="_mb-6">
					<div className="_flex _transition-transform _duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 25}%)` }}>
						{elements.map((el) => (
							<div className="_flex-shrink-0 _w-1/4 _flex _items-center _justify-center" key={el.id}>
								{el.content()}
							</div>
						))}
					</div>
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
			<div className="arrow-button-right _cursor-pointer" onClick={nextSlide}>
				<RightArrow />
			</div>
		</div>
	);
};
