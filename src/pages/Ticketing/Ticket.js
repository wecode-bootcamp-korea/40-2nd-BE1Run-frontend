import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Arrow from '../../assets/ticketing/right-arrow.png';
import Right from '../../assets/ticketing/right_gray.png';

const Ticket = props => {
  const navigate = useNavigate();

  const { title, duration, hall, img, age, loc, date, time } = props.ticketInfo;

  const onNavigate = () => {
    navigate('/seat-page', { state: { ...props } });
  };

  return (
    <Container>
      <Wrapper>
        <Poster>
          <PosterImg>{img && <PosterImage src={img} alt="image" />}</PosterImg>
          <PosterInfo>
            <PosterTitle>{title}</PosterTitle>
            <PosterAge>{age}세 관람가</PosterAge>
            <PosterAge>{duration}분</PosterAge>
          </PosterInfo>
        </Poster>
        <TicketInfo>
          <Info>
            <BoldInfo>극장 {loc}</BoldInfo>
          </Info>
          <Info>
            <BoldInfo>
              일시 {date} {time}
            </BoldInfo>
          </Info>
          <Info>{hall > 0 && <BoldInfo>상영관 {hall} 관</BoldInfo>}</Info>
        </TicketInfo>
        <Process>
          <ProcessWord>좌석선택</ProcessWord>
          <ProcessArrow src={Right} />
          <ProcessWord>결제</ProcessWord>
          <ProcessArrow src={Right} />
        </Process>
        <ToSelectSeat onClick={onNavigate}>
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

const PosterImage = styled.img`
  width: 100%;
  height: 100%;
`;
const PosterInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 10px;
`;

const PosterTitle = styled.div`
  font-weight: bold;
  color: white;
`;

const PosterAge = styled.div`
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
  font-size: 20px;
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
