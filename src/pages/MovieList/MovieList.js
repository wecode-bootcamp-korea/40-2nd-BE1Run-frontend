import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ListMovieCard from './ListMovieCard';

const MovieList = () => {
  const [movieCards, setMovieCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://10.58.52.80:8000/movies/')
      .then(response => response.json())
      .then(result => {
        setMovieCards(result);
        setLoading(false);
      });
  }, []);

  if (loading) return;
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
          {movieCards.map((movieInfo, idx) => {
            return (
              <ListMovieCard
                key={movieInfo.id}
                id={movieInfo.id}
                name={movieInfo.title}
                url={movieInfo.thumbnail_image_url}
                runtime={movieInfo.duration_min}
                age={movieInfo.age_limit}
                number={idx}
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
