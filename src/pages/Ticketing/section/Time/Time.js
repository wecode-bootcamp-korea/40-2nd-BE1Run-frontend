import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const time = [
  { time_id: 1, time: '09:00' },
  { time_id: 2, time: '12:00' },
  { time_id: 3, time: '15:00' },
  { time_id: 4, time: '18:00' },
  { time_id: 5, time: '21:00' },
];

const Time = ({ ticketInfo, setTicketInfo, ticketingData }) => {
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
      {ticketInfo.hall > 0 && <Halltext>{ticketInfo.hall} 관</Halltext>}
      <TimeWrapper>
        <TimeBox>
          <TimeCard>
            <TimeSeat>
              {time.map(({ time_id, time }) => (
                <TimeSquare
                  key={time_id}
                  activeTime={activeTime === time_id}
                  onClick={() => {
                    setActiveTime(time_id);
                    setTicketInfo({
                      ...ticketInfo,
                      time: time,
                    });
                  }}
                >
                  {time}
                </TimeSquare>
              ))}
            </TimeSeat>
          </TimeCard>
        </TimeBox>
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
  font-size: 30px;
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
  margin-top: 30px;
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

const Halltext = styled.p`
  margin-top: 30px;
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 700;
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
