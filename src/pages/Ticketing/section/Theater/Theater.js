import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Theater = ({ ticketInfo, setTicketInfo, ticketingData }) => {
  const [theaterList, setTheaterList] = useState([]);
  const [activeLocation, setActiveLocation] = useState('');

  useEffect(() => {
    fetch('/data/theaters.json')
      .then(response => response.json())
      .then(result => setTheaterList(result));
  }, []);

  return (
    <TheaterContainer>
      <Title>극장</Title>
      <Information>
        <TheaterList>
          {ticketingData &&
            ticketingData.map(item => (
              <List
                onClick={() => {
                  setActiveLocation(item.name);
                  setTicketInfo({ ...ticketInfo, loc: item.name });
                }}
                activeLocation={activeLocation === item.name}
                key={item.id}
              >
                {item.name}
              </List>
            ))}
        </TheaterList>
      </Information>
    </TheaterContainer>
  );
};

export default Theater;

const TheaterContainer = styled.div`
  width: 400px;
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

const Information = styled.div`
  display: flex;
  flex-direction: column;
`;

const TheaterList = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 170px;
`;

const List = styled.div`
  padding: 20px;
  text-align: left;
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  cursor: pointer;

  ${({ activeLocation }) =>
    activeLocation &&
    `
  background-color: black;
  color: white;`}
  &:hover {
    background-color: lightgray;
  }
`;
