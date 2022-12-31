import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Arrow from '../../assets/ticketing/right-arrow.png';
import Right from '../../assets/ticketing/right_gray.png';

const Ticket = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <Poster>
          <PosterImg>포스터</PosterImg>
          <PosterInfo>
            <PosterTitle>아바타 : 물의 길</PosterTitle>
            <PosterAge>12세 관람가</PosterAge>
          </PosterInfo>
        </Poster>
        <TicketInfo>
          <Info>
            <BoldInfo>극장 : </BoldInfo> BMT 강남
          </Info>
          <Info>
            <BoldInfo>일시 : </BoldInfo> 2022.12.29 목 12:00
          </Info>
          <Info>
            <BoldInfo>상영관 : </BoldInfo> 1관 6층
          </Info>
        </TicketInfo>
        <Process>
          <ProcessWord>좌석선택</ProcessWord>
          <ProcessArrow src={Right} />
          <ProcessWord>결제</ProcessWord>
          <ProcessArrow src={Right} />
        </Process>
        <ToSelectSeat
          onClick={() => {
            navigate('/seat-page');
          }}
        >
          <ValidArrow src={Arrow} alt="화살표" />
        </ToSelectSeat>
      </Wrapper>
    </Container>
  );
};

export default Ticket;

const Container = styled.div`
  color: white;
  width: 100%;
  height: 150px;
  background-color: #333333;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 1400px;
  margin-right: auto;
  margin-left: auto;
`;

const Poster = styled.div`
  display: flex;
  width: 250px;
  border-right: white solid 1px;
`;

const PosterImg = styled.div`
  display: flex;
  margin-top: 5px;
  width: 120px;
  height: 140px;
  background-color: gray;
`;

const PosterInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const PosterTitle = styled.div`
  margin: 30px 10px;
  font-weight: bold;
  color: white;
`;

const PosterAge = styled.div`
  margin: 30px 10px;
  font-weight: bold;
  color: Lightgray;
`;

const TicketInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 250px;
  border-right: white solid 1px;
  font-size: 18px;
`;

const BoldInfo = styled.strong`
  display: flex;
  font-weight: 700;
  flex-direction: row;
  margin-right: 5px;
`;

const Info = styled.span`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const Process = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 100px;
  width: 300px;
`;

const ProcessWord = styled.div`
  margin-top: 55px;
  font-size: 40px;
  color: gray;
  white-space: nowrap;
`;

const ProcessArrow = styled.img`
  margin-top: 20px;
  height: 100px;
`;

const ToSelectSeat = styled.button`
  border: 2px solid gray;
  margin-top: 10px;
  background-color: #333333;
  width: 130px;
  height: 130px;
`;

const ValidArrow = styled.img`
  width: 90px;
`;
