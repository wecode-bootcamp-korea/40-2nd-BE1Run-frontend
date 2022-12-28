import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import MOVIE_DATA from './movieData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function NextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <img
      src="/images/right-arrow.png"
      alt="nextBtn"
      className={className}
      style={{
        ...style,
        display: 'block',
<<<<<<< HEAD
        width: '48px',
        height: '48px',
        opacity: '0.4',
        right: '-50px',
=======
        width: '24px',
        height: '24px',
        opacity: '0.4',
>>>>>>> b45fa6c (Add: detail 레이아웃완료 ,  서버 데이터 수신확인)
      }}
      onClick={onClick}
    />
  );
}

export function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      src="/images/left-arrow.png"
      alt="prevBtn"
      className={className}
      style={{
        ...style,
        display: 'block',
<<<<<<< HEAD
        width: '48px',
        height: '48px',
        opacity: '0.4',
        left: '-50px',
=======
        width: '24px',
        height: '24px',
        opacity: '0.4',
>>>>>>> b45fa6c (Add: detail 레이아웃완료 ,  서버 데이터 수신확인)
      }}
      onClick={onClick}
    />
  );
}
const Stillcut = props => {
  const { stillcut } = props;

  const data = stillcut?.split(' ');

  return (
    <Container>
      <SliderSection {...settings}>
        {data?.map((e, idx) => {
          return (
            <ImageBox key={idx}>
              <Image src={e} alt="캐러셀 이미지" />
            </ImageBox>
          );
        })}
      </SliderSection>
    </Container>
  );
};

export default Stillcut;

const settings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  centerPadding: '60px',
  slidesToShow: 3,
  speed: 500,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerPadding: '40px',
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: '30px',
      },
    },
  ],
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 230px;
`;

const SliderSection = styled(Slider)`
  width: 100%;
  height: 100%;
  background-color: #111;

  .slick-list {
    height: 100%;
  }

  .slick-track {
    height: 100%;
  }

  .slick-slide div {
    height: 100%;
    cursor: pointer;
  }

  .slick-center img {
    width: 90%;
    height: 210px;
    -ms-transform: scale(1.08);
    transform: scale(1.08);
    transition: 0.5s;
    border-radius: 5px;
  }
`;

const ImageBox = styled.div`
  height: 100%;
`;

const Image = styled.img`
  margin-top: 15px;
  width: 90%;
  height: 200px;
  border-radius: 5px;
`;
