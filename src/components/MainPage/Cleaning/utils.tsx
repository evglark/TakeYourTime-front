import React from 'react';
import Image from 'next/image';

import BalconyPng from './images/Balcony.png';
import BathroomPng from './images/Bathroom.png';
import BedroomPng from './images/Bedroom.png';
import CorridorPng from './images/Corridor.png';
import KitchenPng from './images/Kitchen.png';

export const getRoom = (room: string) => {
  if (room === 'Bedroom') return <Image src={BedroomPng} alt="" />;
  if (room === 'Kitchen') return <Image src={KitchenPng} alt="" />;
  if (room === 'Corridor') return <Image src={CorridorPng} alt="" />;
  if (room === 'Bathroom') return <Image src={BathroomPng} alt="" />;
  if (room === 'Balcony') return <Image src={BalconyPng} alt="" />;
  return null;
};
