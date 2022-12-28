<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ListMovieCard from './ListMovieCard';
=======
import React from 'react';
>>>>>>> db6475a (ADD: 결제 완료 페이지 레이아웃 완료)
=======
import React from 'react';
>>>>>>> b45fa6c (Add: detail 레이아웃완료 ,  서버 데이터 수신확인)

const MovieList = () => {
  const [movieCard, setMovieCard] = useState([]);
  useEffect(() => {
    fetch('/data/MovieList.json')
      .then(result => result.json())
      .then(data => setMovieCard(data));
  }, []);

  return (
    <Container>
      <Contents>
        <MovieListTitle>
          <h1>무비차트</h1>
          <Link to="#">▶무비차트</Link>
        </MovieListTitle>
        <MovieListSort>
          <Select>
            <option value="highTiketing">예매율순</option>
            <option value="highScore">평점순</option>
            <option value="viewPeople">관람객순</option>
          </Select>
        </MovieListSort>
        <MovieChart>
          {movieCard.map(movieCards => {
            return (
              <ListMovieCard
                key={movieCards.id}
                id={movieCards.id}
                name={movieCards.name}
                url={movieCards.url}
                runtime={movieCards.runtime}
              />
            );
          })}
        </MovieChart>
      </Contents>
    </Container>
  );
};

export default MovieList;

const Container = styled.div`
  color: white;
  background-color: #333;
`;

const Contents = styled.div`
  width: 70%;
  margin: auto;
`;

const MovieListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 3vh;
  padding-bottom: 3vh;
  border-bottom: solid;

  h1 {
    font-size: 5vh;
    font-weight: bold;
  }
  a {
    text-decoration-line: none;
    padding-top: 2vh;
    color: white;
  }
`;

const MovieListSort = styled.div`
  text-align: right;
  margin-top: 1vh;
`;

const MovieChart = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  padding-top: 30px;
`;

const Select = styled.select`
  width: 100px;
  height: 30px;
  background: white;
`;
