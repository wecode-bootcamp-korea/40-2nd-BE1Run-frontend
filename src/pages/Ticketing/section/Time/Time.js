import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Time = () => {
  const [timeInfo, setTimeInfo] = useState([]);
  const [activeTime, setActiveTime] = useState('');

  useEffect(() => {
    fetch(`/data/timecopy.json`)
      .then(response => response.json())
      .then(result => setTimeInfo(result));
  }, []);

  return (
    <TimeContainer>
      <Title>시간</Title>
      <TimeSpan>조조 심야</TimeSpan>
      <TimeWrapper>
        {timeInfo.map(item => (
          <TimeBox key={item.id}>
            <TimeCard>
              <CardTop>
                <Multiplex> {item.multiplex}</Multiplex>
                <Floor>{item.floor}</Floor>
                <Seat>{item.total_seats}석</Seat>
              </CardTop>
              <TimeSeat>
                {item.time.map(({ time_id, time }) => (
                  <TimeSquare
                    key={time_id}
                    activeTime={activeTime === time_id}
                    onClick={() => {
                      setActiveTime(time_id);
                    }}
                  >
                    {time}
                  </TimeSquare>
                ))}
              </TimeSeat>
            </TimeCard>
          </TimeBox>
        ))}
      </TimeWrapper>
    </TimeContainer>
  );
};

export default Time;

const TimeContainer = styled.div`
  width: 402px;
`;

const Title = styled.div`
  height: 40px;
  padding: 10px 0;
  border: 0.5px solid gray;
  border-top: none;
  background-color: #333333;
  color: white;
  font-size: 20px;
  text-align: center;
`;

const TimeSpan = styled.div`
  margin: 15px;
`;

const TimeBox = styled.div`
  height: 170px;
  margin-top: 10px;
  border-top: 2px solid gray;
`;

const TimeWrapper = styled.div`
  height: 460px;
  overflow: scroll;
`;

const TimeCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
`;

const CardTop = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
`;

const TimeSeat = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
  margin-left: 20px;
`;

const TimeSquare = styled.div`
  border: 2px solid black;
  padding: 10px;
  width: 75px;
  font-size: 20px;
  margin-left: 10px;
  ${({ activeTime }) =>
    activeTime &&
    `background-color: black;
  color: white;
  `};
  &:hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;

const Multiplex = styled.div`
  display: flex;
  margin: 10px 10px;
`;

const Floor = styled.span`
  font-weight: bold;
  margin: 10px 5px;
`;

const Seat = styled.span`
  color: gray;
  margin: 10px 7px;
`;
