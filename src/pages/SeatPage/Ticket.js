import { max } from 'date-fns';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Arrow from '../../assets/ticketing/right-arrow.png';
import Right from '../../assets/ticketing/right_gray.png';

const Ticket = props => {
  const navigate = useNavigate();
  const { title, duration, img, age, loc, date, hall, time, seat } =
    props.ticketInfo;

  return (
    <Container>
      <Wrapper>
        <Poster>
          <PosterImg>
            <PosterImage src={img} alt="image" />
          </PosterImg>
          <PosterInfo>
            <PosterTitle>{title}</PosterTitle>
            <PosterAge>{age}세 관람가</PosterAge>
            <PosterAge>{duration}분</PosterAge>
          </PosterInfo>
        </Poster>
        <TicketInfo>
          <Info>
            <BoldInfo>극장 : </BoldInfo> {loc}
          </Info>
          <Info>
            <BoldInfo>일시 : </BoldInfo> {date} {time}
          </Info>
          <Info>
            <BoldInfo>상영관 : </BoldInfo> {hall} 관
          </Info>
        </TicketInfo>
        <Process>
          {props.max === 0 ? (
            <ProcessWord>좌석선택</ProcessWord>
          ) : (
            <SeatDiv>
              <SeatParagraph>좌석 : </SeatParagraph>
              <SeatName>{seat?.join(', ')}</SeatName>
            </SeatDiv>
            //TODO : 좌석 이름 가져와서 돌리기
          )}
          <ProcessArrow src={Right} />
          <ProcessWord>결제</ProcessWord>
          <ProcessArrow src={Right} />
        </Process>
        <ToSelectSeat
          onClick={() => {
            navigate('/order-page', { state: { ...props.ticketInfo } });
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
  align-items: center;
`;

const SeatDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-right: 20px;
  height: 150px;
`;

const SeatParagraph = styled.p`
  font-size: 30px;
  margin-right: 20px;
`;

const SeatName = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-around;
  height: 100%;

  font-size: 30px;
`;

const ProcessWord = styled.div`
  font-size: 40px;
  color: gray;
  white-space: nowrap;
`;

const ProcessArrow = styled.img`
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
