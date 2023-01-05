import { useState } from 'react';
import styled from 'styled-components';

const Movie = ({ ticketInfo, setTicketInfo, ticketingData }) => {
  return (
    <MovieContainer>
      <Title>영화</Title>
      <Information>
        <Top>
          <AgeLimit>연령</AgeLimit>
          <MovieName>제목</MovieName>
        </Top>
        <MovieList>
          {ticketingData?.map(item => (
            <List
              onClick={() => {
                setTicketInfo({
                  ...ticketInfo,
                  title: item.title,
                  age: item.age_limit,
                  img: item.thumbnail_image_url,
                  duration: item.duration_min,
                  hall: item.id,
                });
              }}
              activeMovie={ticketInfo.title === item.title}
              key={item.id}
            >
              <Age>{item.age_limit}</Age>
              {item.title}
            </List>
          ))}
        </MovieList>
      </Information>
    </MovieContainer>
  );
};

export default Movie;

const MovieContainer = styled.div`
  width: 400px;
  text-align: center;
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

const Top = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 20px;
`;

const AgeLimit = styled.span`
  display: flex;
`;

const MovieName = styled.span`
  display: flex;
  margin-left: 50px;
`;

const MovieList = styled.div`
  overflow: scroll;
  height: 460px;
`;

const List = styled.div`
  padding: 20px;
  text-align: left;
  font-size: 20px;
  cursor: pointer;

  ${({ activeMovie }) =>
    activeMovie &&
    `
  background-color: black;
  color: white;`}
  &:hover {
    background-color: lightgray;
  }
`;

const Age = styled.i`
  font-size: 18px;
  margin-right: 50px;
  padding: 5px 7px;
  width: 70px;
  background-color: gray;
  border-radius: 50%;
  color: white;
`;
