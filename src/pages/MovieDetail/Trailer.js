import React, { useRef } from 'react';
import TRAILER_DATA from './trailerData';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PrevArrow, NextArrow } from './Stillcut';

const Trailer = () => {
  const videoRef = useRef();

  const settings = {
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: () => {
      videoRef.current.pause();
      videoRef.current.load();
    },
  };

  return (
    <Container>
      <SliderSection {...settings}>
        {TRAILER_DATA.map(({ trailer }, idx) => {
          return (
            <VideoBox key={idx}>
              <Video type="video/mp4" ref={videoRef} controls>
                <source src={trailer} />
              </Video>
            </VideoBox>
          );
        })}
      </SliderSection>
    </Container>
  );
};

export default Trailer;

const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
  background-color: #111;
  height: 600px;
`;

const SliderSection = styled(Slider)`
  .slick-slide {
    pointer-events: none;
  }
  .slick-active {
    pointer-events: auto;
  }
`;

const VideoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  /* height: 80%; */
  height: 600px;
`;

const Video = styled.video`
  margin: auto;
  width: 100%;
  height: 100%;
`;
