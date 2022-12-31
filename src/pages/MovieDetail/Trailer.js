<<<<<<< HEAD
import React from 'react';
=======
import React, { createRef, useRef, useEffect, useState } from 'react';
>>>>>>> b45fa6c23fdacbbbf8a9684740a6c93357938c41
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
<<<<<<< HEAD
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
=======
import Stillcut, { PrevArrow, NextArrow } from './Stillcut';
import TRAILER_DATA from './trailerData';

const videoInitConfig = {
  preload: false,
  paused: true,
};

const Trailer = () => {
  // const [currentIdx, setCurrentIdx] = useState(0);
  const [trailerData, setTrailerData] = useState([]);
  const [videosConfig, setVideoConfig] = useState(
    Array(TRAILER_DATA.length).fill(videoInitConfig)
  );

  // const items = Array.from({length: 2}, a => useRef(null));

  const refs = useRef();

  // const refs.current=[];

  // const videoRefs = useRef();

  const [videoPaused, setVideoPaused] = useState('paused');
  console.log('config', videosConfig);

  // console.log('stat4e ===>', videosConfig);

  // const videoRefs = useRef(TRAILER_DATA.map(createRef));
  // const trailerRefs = useRef(trailerData?.map(createRef));

  const settings = {
    fade: true,
    infinite: true,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (curr, next) => {
      console.log(refs);
      // console.log('ref ===========', videoRefs.current);

      // videoRefs.current.pause();
      // videoRefs.current.load();

      setVideoPaused('paused');
      setVideoConfig(
        videosConfig.map((config, i) => {
          if (i === next)
            return { preload: !config.preload, paused: !config.paused };
          return { preload: false, paused: true };
        })
      );
      // videoRefs.current[curr].current.paused();
      // videoRefs.current[next].current.preload();
    },
  };

  useEffect(() => {
    fetch('http://10.58.52.91:8000/movie/trailer/1')
      .then(res => res.json())
      .then(result => {
        setTrailerData(result);
        setVideoConfig(Array(result.length).fill(videoInitConfig));
      });
  }, []);
  console.log(trailerData);
  // console.log('td ===>', trailerData);

  // console.log(TRAILER_DATA);
  // console.log(videoRefs);
  // console.log(trailerRefs);

  return (
    <Container>
      {/* <SliderSection {...settings}>
        {TRAILER_DATA.map(({ trailer }, idx) => {
          return (
            <VideoBox key={idx}>
              <Video type="video/mp4" ref={videoRefs.current[idx]} controls>
                <source src={trailer} />
              </Video>
            </VideoBox>
          );
        })}
      </SliderSection> */}
      <SliderSection {...settings}>
        {TRAILER_DATA?.map(({ trailer }, idx) => {
          console.log('current Config:::', videosConfig[idx]);
          return (
            <VideoBox
              key={idx}
              ref={element => (refs.current[{ trailer }.id] = element)}
            >
              {/* <Video type="video/mp4" ref={videoRefs.current[idx />]} controls> */}
              <Video
                type="video/mp4"
                // ref={videoRefs}
                controls
                {...videosConfig[idx]}
                videoPaused
              >
                {/* <source src="https://vod-progressive.akamaized.net/exp=1672136213~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4876%2F7%2F199383367%2F672434768.mp4~hmac=00a40ccf9989510d060fae2c600353ccbe2908e422879a94fab7aa515397850b/vimeo-prod-skyfire-std-us/01/4876/7/199383367/672434768.mp4" /> */}
                <source src={trailer} />
              </Video>
>>>>>>> b45fa6c23fdacbbbf8a9684740a6c93357938c41
            </VideoBox>
          );
        })}
      </SliderSection>
    </Container>
  );
};

export default Trailer;

<<<<<<< HEAD
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
=======
const Container = styled.div`
  width: 100%;
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
>>>>>>> b45fa6c23fdacbbbf8a9684740a6c93357938c41

const VideoBox = styled.div`
  width: 100%;
  height: 80%;
`;

const Video = styled.video`
<<<<<<< HEAD
  width: 100%;
  height: 80%;
=======
  margin-top: 25px;
  width: 100%;
  height: 550px;
>>>>>>> b45fa6c23fdacbbbf8a9684740a6c93357938c41
`;
