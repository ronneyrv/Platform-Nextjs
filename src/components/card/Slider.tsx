"use client";

import { Swiper, SwiperProps } from "swiper/react";
import { EffectCards, Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-cards';
import { ReactNode } from "react";

import './styles.css';

interface SliderProps {
  settings: SwiperProps;
  children: ReactNode;
}

export default function Slider({ settings, children }: SliderProps) {
  return <Swiper modules={[EffectCards, Autoplay, Navigation, Pagination, A11y]} {...settings}>{children}</Swiper>;
}
