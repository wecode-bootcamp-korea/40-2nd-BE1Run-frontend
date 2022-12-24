import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TRAILER_DATA from './trailerData';
import { PrevArrow } from './Stillcut';
import { NextArrow } from './Stillcut';

const Trailer = () => {
  return (
    <Container>
      <SliderSection {...settings}>
        {TRAILER_DATA.map(({ id, trailer }) => {
          return (
            <VideoBox key={id}>
              <Video src={trailer} />
            </VideoBox>
          );
        })}
      </SliderSection>
    </Container>
  );
};

export default Trailer;

const settings = {
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  background-color: #111;
`;

const SliderSection = styled(Slider)``;

const VideoBox = styled.div`
  width: 100%;
  height: 80%;
`;

const Video = styled.video`
  width: 100%;
  height: 80%;
`;
