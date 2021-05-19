import { Box } from '@material-ui/core';
import React from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Pagination,
} from 'swiper/core';
SwiperCore.use([Pagination]);
import DiplomaITB from '../img/qualificações/diplomaITB.png';
import JsCursoEmVideo from '../img/qualificações/jsCursoEmVideo.png';

import '../css/CarouselQualificacoes.css';

export default function Carousel() {
  return (
    <Box className='borderNone'>
      <Swiper slidesPerView={1} spaceBetween={20} freeMode={false}
        pagination={{ 'clickable': true }} className="mySwiper">

        <SwiperSlide>
          <Box>
            <img src={DiplomaITB} className="paddingTopImgQualificacao"/>
          </Box>
        </SwiperSlide>

        <SwiperSlide >
          <Box>
            <img src={JsCursoEmVideo} className="paddingTopImgQualificacao"/>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
