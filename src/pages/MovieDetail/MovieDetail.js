<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Stillcut from './Stillcut';
import Trailer from './Trailer';
=======
import React from 'react';
>>>>>>> db6475a (ADD: 결제 완료 페이지 레이아웃 완료)

const MovieDetail = () => {
  const [data, setData] = useState([]);
  // const [trailerData, setTrailerData] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.91:8000/movie/1')
      .then(res => res.json())
      .then(result => setData(result));
  }, []);

  // useEffect(() => {
  //   fetch('http://10.58.52.91:8000/movie/trailer/1')
  //     .then(res => res.json())
  //     .then(result => setTrailerData(result));
  // }, []);

  console.log(data);
  // console.log(trailerData);
  return (
    <Container>
      <DetailDiv>
        <Detailheader>
          <DetailImg src={data.thumbnail_image_url} />
          <DetailTextSection>
            <Title>
              <TitleParagraph fontsize="36" opacity="1">
                {data.title}
              </TitleParagraph>
              <TitleParagraph fontsize="24" opacity="0.6">
                {data.title_eng}
              </TitleParagraph>
            </Title>
            <SubSection>
              <TitleParagraph fontsize="18" opacity="1">
                감독 : {data.director}
              </TitleParagraph>
              <TitleParagraph fontsize="18" opacity="1">
                배우 : {data.actors}
              </TitleParagraph>
              <TitleParagraph fontsize="18" opacity="1">
                시간 : {data.duration_min}분
              </TitleParagraph>
              <TitleParagraph fontsize="18" opacity="1">
                개봉일 : {data.opening_date}
              </TitleParagraph>
            </SubSection>
          </DetailTextSection>
        </Detailheader>
        <DescriptSection>{data.descriptions}</DescriptSection>
        <SubParagraph>Still Cut</SubParagraph>
        <Stillcut stillcut={data.still_cut_image} />
        <SubParagraph>Trailer</SubParagraph>
        <Trailer trailer={data.trailer_videos_url} />
        <RemoteBtn>
          <p
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            ⏏︎
          </p>
        </RemoteBtn>
      </DetailDiv>
    </Container>
  );
};

export default MovieDetail;

const Container = styled.div`
  display: flex;
  background-color: #444;
  justify-content: center;
`;

const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 1000px;
`;

const Detailheader = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 300px;
  background-color: #111;
`;

const DetailImg = styled.img`
  height: 100%;
  background-color: #111;
`;

const DetailTextSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 70%;
  height: 100%;

  background-color: #bbb;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 95%;
  height: 100px;
  background-color: #ccc;
  border-bottom: 2px #aaa solid;
`;

const SubSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 95%;
  height: 150px;
  background-color: antiquewhite;
`;

const TitleParagraph = styled.p`
  font-size: ${props => props.fontsize}px;
  opacity: ${props => props.opacity};
`;

const DescriptSection = styled.div`
  padding: 30px;
  width: 100%;
  height: 500px;
  background-color: #ccc;
`;

const DescriptParagraph = styled.p``;

const SubParagraph = styled.p`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 30px;
  color: #555;
  border-radius: 5px;
  padding: 5px 15px;
  background-color: antiquewhite;
`;
const RemoteBtn = styled.button`
  position: fixed;
  left: 90%;
  top: 80%;
  width: 48px;
  height: 60px;
  border-radius: 24px;
  border: none;
  font-size: 36px;
  background-color: antiquewhite;
`;
