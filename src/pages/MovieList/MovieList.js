import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ListMovieCard from './ListMovieCard';

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
