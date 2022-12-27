import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Movie = () => {
  const [movieList, setMovieList] = useState([]);
  const [activeMovie, setActiveMovie] = useState('');
  const [getMovieId, setGetMovieId] = useState(0);

  useEffect(() => {
<<<<<<< HEAD
    fetch('/data/ticketingList.json')
=======
    fetch('data/movieList.json')
>>>>>>> 432c637 (ADD: 예매 페이지 레이아웃 초안)
      .then(response => response.json())
      .then(result => setMovieList(result));
  }, []);

  return (
    <MovieContainer>
      <Title>영화</Title>
      <Information>
        <Top>
          <AgeLimit>연령</AgeLimit>
          <MovieName>제목</MovieName>
        </Top>
        <MovieList key={getMovieId.id}>
          {movieList &&
            movieList.map(item => (
              <List
                onClick={() => {
                  setActiveMovie(item.name);
                  setGetMovieId(item.id);
                  fetch(`data/movieList.json`)
                    .then(response => response.json())
                    .then(result => setMovieList(result));
                }}
                activeMovie={activeMovie === item.name}
                key={item.id}
              >
                <Age>{item.age_grade}</Age>
                {item.name}
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
