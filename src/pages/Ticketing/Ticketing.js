import React, { useState, useEffect } from 'react';
import Movie from './section/Movie/Movie';
import Theater from './section/Theater/Theater';
import Date from './section/Date/Date';
import Time from './section/Time/Time';
import Ticket from './section/Ticket/Ticket';
import styled from 'styled-components';

const Ticketing = () => {
  const [list, setList] = useState([]);
  const [movieId, setMovieId] = useState(0);
  const [activeLocation, setActiveLocation] = useState('');
  const [activeTime, setActiveTime] = useState('');

  return (
    <div>
      <Container>
        <Title>예매</Title>
        <ContainBox>
          <ResetBtn onClick={() => window.location.replace('/ticketing')}>
            <Icon className="fa-solid fa-arrow-rotate-left" />
            &nbsp;예매 다시하기
          </ResetBtn>
          <Wrapper>
            <Section>
              <MovieClass>
                <Movie />
              </MovieClass>
            </Section>
            <Section>
              <TheaterClass>
                <Theater />
              </TheaterClass>
              <DateClass>
                <Date
                  Ticketing={Ticketing}
                  movieId={movieId}
                  activeLocation={activeLocation}
                />
              </DateClass>
            </Section>
            <Section>
              <TimeContainer>
                <TimeClass>
                  <Time
                    activeTime={activeTime}
                    setActiveTime={setActiveTime}
                    movieId={movieId}
                  />
                </TimeClass>
              </TimeContainer>
            </Section>
          </Wrapper>
        </ContainBox>
        <Ticket />
      </Container>
    </div>
  );
};

export default Ticketing;

const Container = styled.h1`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ContainBox = styled.div`
  width: 1500px;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.div`
  display: flex;
  flex-direction: space-around;
  margin: 100px 0 30px 250px;
  font-size: 30px;
`;

const ResetBtn = styled.button`
  width: 180px;
  height: 50px;
  margin: 0 120px 20px 1130px;
  border: 1px solid black;
  border-radius: 6px;
  background-color: #333333;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

const Icon = styled.i`
  font-size: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 1205px;
  border: 2px solid black;
  margin: 0 auto 30px auto;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieClass = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const TheaterClass = styled.div`
  display: flex;
  flex-direction: column;
`;

const TimeContainer = styled.div`
  display: flex;
`;

const DateClass = styled.div`
  display: flex;
  flex-direction: column;
`;

const TimeClass = styled.div`
  display: flex;
  flex-direction: column;
`;
