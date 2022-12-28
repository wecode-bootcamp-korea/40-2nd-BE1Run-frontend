import React, { useState } from 'react';
import styled from 'styled-components';
import SEAT_DATA from './SeatData';
import resetBtn from '../../assets/images/resetBtn.png';
import unChecked from '../../assets/images/unchecked.png';
import checkedImg from '../../assets/images/checked.png';
import disabled from '../../assets/images/disabled.png';

const HEAD_COUNTS = [
  { id: 0, count: 1 },
  { id: 1, count: 2 },
  { id: 2, count: 3 },
  { id: 3, count: 4 },
];

const RAW_COUNT = [
  { id: 1, raw: 'A열' },
  { id: 2, raw: 'B열' },
  { id: 3, raw: 'C열' },
  { id: 4, raw: 'D열' },
];

const Seatpage = () => {
  const [max, setMax] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSelect = seatId => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => seatId !== id));
    } else {
      setSelectedSeats(selectedSeats.concat(seatId));
    }
  };

  return (
    <SeatPage>
      <SeatDiv>
        <SeatTitle>인원 / 좌석</SeatTitle>
        <SeatHeader>
          <HeaderSection width={45} color={'transparent'}>
            {HEAD_COUNTS.map(({ id, count }) => (
              <React.Fragment key={id}>
                <HeaderDiv>
                  <Radiorable>
                    <RadioBtn
                      type="radio"
                      name="people"
                      value={count}
                      onClick={() => {
                        setMax(count);
                        setSelectedSeats([]);
                      }}
                    />
                    <RadioDiv
                      bgColor={id + 1 === max ? 'black' : null}
                      fontColor={id + 1 === max ? 'white' : 'black'}
                    >
                      {count}명
                    </RadioDiv>
                  </Radiorable>
                </HeaderDiv>
              </React.Fragment>
            ))}
            {max === 0 && <WarningText>인원을 선택해 주세요</WarningText>}
          </HeaderSection>
          <HeaderSection width={55} color={'white'}>
            <HeaderDiv>영화관 : {SEAT_DATA.loc}</HeaderDiv>
            <HeaderDiv>상영관 : {SEAT_DATA.theotor}</HeaderDiv>
            <HeaderDiv>상영날짜 : {SEAT_DATA.date}</HeaderDiv>
            <HeaderDiv>시간 : {SEAT_DATA.runningTime}</HeaderDiv>
          </HeaderSection>
        </SeatHeader>
        <SeatBody>
          <Screen>
            Screen
            <ResetBtn
              resetBtn={resetBtn}
              onClick={() => {
                setSelectedSeats([]);
                // setMax(0);
              }}
            />
          </Screen>
          <SeatSection>
            {SEAT_DATA.seat.map((status, idx) => {
              return (
                <Seat
                  seatnum={status.id}
                  type="checkbox"
                  key={idx}
                  checkImg={checkedImg}
                  unCheckImg={unChecked}
                  disabledImg={disabled}
                  disabled={
                    status.status === 1 ||
                    (selectedSeats.length >= max &&
                      !selectedSeats.includes(status.id))
                  }
                  checked={selectedSeats.includes(status.id)}
                  onClick={() => handleSelect(status.id)}
                />
              );
            })}
            <RawSection>
              {RAW_COUNT.map(raw => {
                return <RawTitle key={raw.id}>{raw.raw}</RawTitle>;
              })}
            </RawSection>
          </SeatSection>
        </SeatBody>
      </SeatDiv>
    </SeatPage>
  );
};

export default Seatpage;

const SeatPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80vh;
  background-color: #444;
  z-index: -1;
`;

const SeatDiv = styled.div`
  width: 700px;
  height: 80%;
  background-color: #eee;
  border: 1px solid white;
`;

const SeatTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5%;
  color: white;
  background-color: #333333;
  border: none;
`;

const SeatHeader = styled.div`
  display: flex;
  width: 100%;
  height: 25%;
  background-color: #333333;
  border-bottom: solid 1px white;
`;

const HeaderSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: ${props => props.width}%;
  height: 100%;
  padding: 20px;
  background-color: antiquewhite;
  border-left: solid 1px ${props => props.color};
`;

const HeaderDiv = styled.div`
  font-size: 18px;
`;

const RadioBtn = styled.input`
  margin-right: 20px;
  display: none;
`;
const Radiorable = styled.label`
  display: flex;
`;
const RadioDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100px;
  height: 30px;
  color: ${props => props.fontColor};
  background-color: ${props => props.bgColor};
  &:hover {
    color: white;
    background-color: #666;
  }
`;

const WarningText = styled.p`
  position: absolute;
  top: 10%;
  left: 170px;
  color: red;
`;

const SeatBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 5%;
  width: 100%;
  height: 70%;
  background-color: #fdf6e4;
`;

const Screen = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 30px;
  background-color: #343333;
  color: white;
`;

const ResetBtn = styled.div`
  position: absolute;
  border: none;
  background-image: url(${props => props.resetBtn});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  right: -30px;
  top: 5px;
  width: 20px;
  height: 20px;
`;

const SeatSection = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 40px 70px repeat(3, 40px) 70px repeat(2, 40px);
  width: 385px;
  height: 200px;
`;

const RawSection = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  left: -40px;
  width: 30px;
  height: 100%;
`;

const RawTitle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
`;

const Seat = styled.input`
  margin-right: ${props =>
    props.seatnum === 6 ||
    props.seatnum % 8 === 6 ||
    props.seatnum === 2 ||
    props.seatnum % 8 === 2
      ? 30
      : 0}px;
  appearance: none;
  background-image: url(${props => props.unCheckImg});
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;

  &:checked {
    border-color: white;
    background-image: url(${props => props.checkImg});
    background-size: contain;
    background-position: 50%;
    background-repeat: no-repeat;
    z-index: 999;
  }
  &:disabled {
    opacity: 0.8;
    background-image: url(${props => props.disabledImg});
    background-size: contain;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`;
