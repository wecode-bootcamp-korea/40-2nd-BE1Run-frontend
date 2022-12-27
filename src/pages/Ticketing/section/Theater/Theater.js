import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Theater = () => {
  const [theaterList, setTheaterList] = useState([]);
  const [getTheaterId, setGetTheaterId] = useState(0);
  const [activeLocation, setActiveLocation] = useState('');

  useEffect(() => {
<<<<<<< HEAD
    fetch('/data/theaters.json')
=======
    fetch('data/theaters.json')
>>>>>>> 432c637 (ADD: 예매 페이지 레이아웃 초안)
      .then(response => response.json())
      .then(result => setTheaterList(result));
  }, []);

  return (
    <TheaterContainer>
      <Title>극장</Title>
      <Information>
        <TheaterList>
          {theaterList &&
            theaterList.map(item => (
              <List
                onClick={() => {
                  setActiveLocation(item.theater_name);
                  setGetTheaterId(item.theater_id);
                  fetch(`data/theaters.json`)
                    .then(response => response.json())
                    .then(result => setTheaterList(result));
                }}
                activeLocation={activeLocation === item.theater_name}
                key={item.theater_id}
              >
                {item.theater_name}점
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
