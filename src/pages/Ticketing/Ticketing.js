import React, { useState, useEffect } from 'react';
import Movie from './section/Movie/Movie';
import Theater from './section/Theater/Theater';
import Date from './section/Date/Date';
import Time from './section/Time/Time';
import Ticket from '../../components/Ticket/Ticket';
import styled from 'styled-components';

const Ticketing = () => {
  const [list, setList] = useState([]);
  const [movieId, setMovieId] = useState(0);
  const [activeLocation, setActiveLocation] = useState('');
  const [activeTime, setActiveTime] = useState('');

  return (
    <Container>
      <ContainBox>
        <ResetBtn
          onClick={() => {
            setMovieId(0);
            setActiveLocation('');
            setActiveTime('');
          }}
        >
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
            <Section>
              <Theater />
            </Section>
            <Section>
              <Date
                Ticketing={Ticketing}
                movieId={movieId}
                activeLocation={activeLocation}
              />
            </Section>
          </Section>
          <Section>
            <TimeContainer>
              <Section>
                <Time
                  activeTime={activeTime}
                  setActiveTime={setActiveTime}
                  movieId={movieId}
                />
              </Section>
            </TimeContainer>
          </Section>
        </Wrapper>
      </ContainBox>
      <Ticket />
    </Container>
  );
};

export default Ticketing;

const Container = styled.h1`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #444;
`;

const ContainBox = styled.div`
  width: 1500px;
  margin-left: auto;
  margin-right: auto;
`;

const ResetBtn = styled.button`
  width: 180px;
  height: 50px;
  margin: 20px 120px 20px 1130px;
  border: 1px solid white;
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
  border: 2px solid white;
  margin: 0 auto 30px auto;
  background-color: #fff;
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

const TimeContainer = styled.div`
  display: flex;
`;
