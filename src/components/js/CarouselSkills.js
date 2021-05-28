import { Box } from '@material-ui/core';
import React from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Pagination,
} from 'swiper/core';
SwiperCore.use([Pagination]);
import { Card1, Card2, Card3, Card4, Card5, Card6, Card7} from '../cards/js';
import '../css/CarouselSkills.css';

export default function Carousel() {
  return (
    <Box className='borderNone devSkills' display={{ xl: 'none', md: 'none' }}>
      <Swiper slidesPerView={1} spaceBetween={2} freeMode={false}
        pagination={{ 'clickable': true }}
        className="mySwiper  swiper1None">

        <SwiperSlide>
          <Card1 />
        </SwiperSlide>

        <SwiperSlide >
          <Card2 />
        </SwiperSlide>

        <SwiperSlide >
          <Card3 />
        </SwiperSlide>

        <SwiperSlide >
          <Card4 />
        </SwiperSlide>

        <SwiperSlide >
          <Card5 />
        </SwiperSlide>

        <SwiperSlide >
          <Card6 />
        </SwiperSlide>

        <SwiperSlide >
          <Card7 />
        </SwiperSlide>
      </Swiper>


      <Swiper slidesPerView={2} spaceBetween={1} freeMode={false}
        pagination={{ 'clickable': true }}
        className="mySwiper swiper2None">

        <SwiperSlide>
          <Card1 />
        </SwiperSlide>

        <SwiperSlide >
          <Card2 />
        </SwiperSlide>

        <SwiperSlide >
          <Card3 />
        </SwiperSlide>

        <SwiperSlide >
          <Card4 />
        </SwiperSlide>

        <SwiperSlide >
          <Card5 />
        </SwiperSlide>

        <SwiperSlide >
          <Card6 />
        </SwiperSlide>

        <SwiperSlide >
          <Card7 />
        </SwiperSlide>

      </Swiper>

      <Swiper slidesPerView={3} spaceBetween={1} freeMode={false}
        pagination={{ 'clickable': true }}
        className="mySwiper smDisplayNone swiper3None">

        <SwiperSlide>
          <Card1 />
        </SwiperSlide>

        <SwiperSlide >
          <Card2 />
        </SwiperSlide>

        <SwiperSlide >
          <Card3 />
        </SwiperSlide>

        <SwiperSlide >
          <Card4 />
        </SwiperSlide>

        <SwiperSlide >
          <Card5 />
        </SwiperSlide>

        <SwiperSlide >
          <Card6 />
        </SwiperSlide>

        <SwiperSlide >
          <Card7 />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
