import { Box, Typography } from '@material-ui/core';
import React from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Pagination} from 'swiper/core';
SwiperCore.use([Pagination]);
import ReactLogo from '../img/logo/react.png';
import MUILogo from '../img/logo/MUI.png';
import JsLogo from '../img/logo/js.png';
import HtmlLogo from '../img/logo/html.png';
import CssLogo from '../img/logo/css3.png';
import NodeLogo from '../img/logo/nodejs.png';
import FigmaLogo from '../img/logo/figma.png';
import '../css/Carousel.css';

export default function Carousel() {
  return (
    <Box className='borderNone'>
      <Swiper slidesPerView={1} spaceBetween={20} freeMode={false}
        pagination={{ 'clickable': true }} className="mySwiper">

        <SwiperSlide>
          <Box>
            <Typography className='fontPrimaryTopic  colorGreen'>
              React
            </Typography>
          </Box>
          <Box>
            <img src={ReactLogo} className='reactWH'/>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box>
            <Typography className='fontPrimaryTopic  colorGreen'>
              Material UI
            </Typography>
          </Box>
          <Box>
            <img src={MUILogo} className='muiWH'/>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box>
            <Typography className='fontPrimaryTopic  colorGreen'>
              JavaScript
            </Typography>
          </Box>
          <Box>
            <img src={JsLogo} className='jsWH'/>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box>
            <Typography className='fontPrimaryTopic  colorGreen'>
              HTML 5
            </Typography>
          </Box>
          <Box>
            <img src={HtmlLogo} className='htmlWH'/>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box>
            <Typography className='fontPrimaryTopic  colorGreen'>
              CSS 3
            </Typography>
          </Box>
          <Box>
            <img src={CssLogo} className='cssWH'/>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box>
            <Typography className='fontPrimaryTopic  colorGreen'>
              Node.js
            </Typography>
          </Box>
          <Box>
            <img src={NodeLogo} className='nodeWH'/>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box>
            <Typography className='fontPrimaryTopic  colorGreen'>
              Figma
            </Typography>
          </Box>
          <Box>
            <img src={FigmaLogo} className='figmaWH'/>
          </Box>

        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
