import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MainMovieCard from './MainMovieCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="images/right-arrow.png"
      alt="nextBtn"
      className={className}
      style={{
        ...style,
        width: '32px',
        height: '32px',
        display: 'block',
        top: '40%',
        right: '-50px',
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="images/left-arrow.png"
      alt="rigthBtn"
      className={className}
      style={{
        ...style,
        width: '32px',
        height: '32px',
        display: 'block',
        top: '40%',
        left: '-50px',
      }}
      onClick={onClick}
    />
  );
}

const Main = () => {
  const [mainMovie, setMainMovie] = useState([]);
  const videoRef = useRef();

  useEffect(() => {
    fetch('/data/maindata.json')
      .then(result => result.json())
      .then(data => setMainMovie(data));
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Container>
      <MovieVideo>
        <MovieVideoAd>
          <video ref={videoRef}>
            <source src="https://preview.keycutstock.com/mp4/SU/00/SU00270.mp4" />
          </video>
          <MovieIntro>영화 - BE1Run의 영웅</MovieIntro>
          <MovieIntrodetail>
            "2차프로젝트의 영웅 탄생!" <br /> BE1Run의 자긍심, 드디어 개봉! 예매
            ▶
          </MovieIntrodetail>
          <MoviePlayButton
            onClick={() => {
              videoRef.current.play();
            }}
            src="/images/playbtn.png"
            alt="재생버튼"
          />

          <MoviePauseButton
            onClick={() => {
              videoRef.current.pause();
            }}
            src="/images/pausebtn.png"
            alt="정지버튼"
          />
        </MovieVideoAd>
      </MovieVideo>

      <MovieChartContents>
        <MovieChartTitle>
          <TitleFirst>무비차트</TitleFirst>
          <TitleSecond>
            <Link to="/movie-list">전체보기</Link>
          </TitleSecond>
        </MovieChartTitle>
        <Slider {...settings}>
          {mainMovie.map(mainMovies => {
            return (
              <MainMovieCard
                key={mainMovies.id}
                id={mainMovies.id}
                name={mainMovies.name}
                url={mainMovies.url}
                runtime={mainMovies.runtime}
              />
            );
          })}
        </Slider>
      </MovieChartContents>
    </Container>
  );
};

const Container = styled.div`
  background-color: #222;
`;

const MovieVideo = styled.div`
  display: flex;
  justify-content: center;
  background-color: #111;
  width: 100%;
  height: auto;
  margin: none;
  color: white;
  text-align: center;
`;
const MovieVideoAd = styled.div`
  width: 80%;
  position: relative;
`;

const MovieIntro = styled.div`
  position: absolute;
  font-size: 4vh;
  font-weight: bold;
  top: 30%;
`;

const MovieIntrodetail = styled.div`
  position: absolute;
  top: 50%;
  text-align: left;
  font-weight: bold;
  line-height: 3vh;
`;

const MoviePlayButton = styled.img`
  position: absolute;
  top: 70%;
  left: 20px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const MoviePauseButton = styled.img`
  position: absolute;
  top: 70%;
  left: 70px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const MovieChartContents = styled.div`
  width: 1000px;
  margin: auto;
  padding-top: 3vh;
  background-color: #222;
`;

const MovieChartTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 3vh;
  font-weight: bold;
  padding-bottom: 30px;
`;

const TitleFirst = styled.div`
  color: white;
`;
const TitleSecond = styled.div`
  a {
    text-decoration-line: none;
    color: white;
  }
`;

export default Main;
