import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ListMovieCard = () => {
  const navigate = useNavigate();

  const onClickTiketingButton = () => {
    navigate('/tiketing');
  };
  const onClickDetailButton = () => {
    navigate('/moviedetail');
  };

  return (
    <Container>
      <MovieNumber>No.1</MovieNumber>
      <MovieThumnail>
        <PosterThumnail
          src="./images/postser.jpg"
          onClick={onClickDetailButton}
          alt="영화썸네일"
        />
      </MovieThumnail>
      <MovieName>영화제목</MovieName>
      <MovieRunTime>3000분</MovieRunTime>
      <TicketingButton onClick={onClickTiketingButton}>
        예매하기
      </TicketingButton>
    </Container>
  );
};

export default ListMovieCard;

const Container = styled.div`
  width: 220px;
  padding-bottom: 40px;
  text-align: left;
`;

const MovieNumber = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 5px;
  background-color: red;
  border-radius: 10px;
`;

const MovieThumnail = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

const PosterThumnail = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
`;

const TicketingButton = styled.button`
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
  padding-top: 20px;
  font-size: 25px;
`;

const MovieRunTime = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;
