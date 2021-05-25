import { Box } from '@material-ui/core';
import React from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Pagination,
} from 'swiper/core';
SwiperCore.use([Pagination]);
import CardCert1 from '../cards/js/CardCert1';
import CardCert2 from '../cards/js/CardCert2';
import '../css/CarouselQualificacoes.css';

export default function Carousel() {
  return (
    <Box className='borderNone'>
      <Box className=''>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          freeMode={false}
          pagination={{ 'clickable': true }}
          className="mySwiper swiper1None">

          <SwiperSlide>
            <CardCert1 />
          </SwiperSlide>

          <SwiperSlide >
            <CardCert2 />
          </SwiperSlide>

        </Swiper>
      </Box>

      <Box className=''>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          freeMode={false}
          pagination={{ 'clickable': true }}
          className="mySwiper swiper2None">

          <SwiperSlide>
            <CardCert1 />
          </SwiperSlide>

          <SwiperSlide >
            <CardCert2 />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
}
