import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainMovieCard = ({ id, url, name, runtime, age }) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const onClickTiketingButton = () => {
    navigate(`/ticketing/${id}`);
  };
  const onClickDetailButton = () => {
    navigate(`/movie-detail/${id}`);
  };

  return (
    <Container>
      <MovieThumnail
        onMouseEnter={() => {
          setIsVisible(true);
        }}
        onMouseLeave={() => {
          setIsVisible(false);
        }}
      >
        <PosterThumnail src={url} alt="영화썸네일" />
        {isVisible === false ? (
          <OffMouse>{age === 0 ? '전체이용가' : ` ${age}세이용가`}</OffMouse>
        ) : (
          <OnMouse>
            <DetailButton onClick={onClickDetailButton}>상세보기</DetailButton>
            <TicketingButton onClick={onClickTiketingButton}>
              예매하기
            </TicketingButton>
          </OnMouse>
        )}
      </MovieThumnail>
      <MovieName>{name}</MovieName>
      <MovieRunTime>{runtime}분</MovieRunTime>
    </Container>
  );
};

export default MainMovieCard;

const Container = styled.div`
  margin: auto;
  width: 200px;
  padding-bottom: 40px;
  color: white;
`;

const MovieThumnail = styled.div`
  position: relative;
  width: 200px;
  height: 250px;
`;

const OffMouse = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
  color: white;
  background-color: gray;
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
`;

const OnMouse = styled.div`
  position: absolute;
  top: 0;
  background-color: #111;
  border-radius: 10px;
  opacity: 0.7;
  width: 100%;
  height: 100%;
`;
const PosterThumnail = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const DetailButton = styled.button`
  position: absolute;
  width: 110px;
  height: 30px;
  color: white;
  background-color: black;
  top: 90px;
  left: 40px;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    opacity: 60%;
  }
`;

const TicketingButton = styled.button`
  position: absolute;
  width: 110px;
  height: 30px;
  color: white;
  background-color: black;
  top: 130px;
  left: 40px;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    opacity: 40%;
  }
`;

const MovieName = styled.div`
  text-align: center;
  padding-top: 20px;
  font-size: 23px;
`;

const MovieRunTime = styled.div`
  text-align: center;
  padding-top: 10px;
`;
