import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Stillcut from './Stillcut';
import Trailer from './Trailer';

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
      <RemoteBtn
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        ⏏︎
      </RemoteBtn>
    </DetailDiv>
  );
};

export default MovieDetail;

const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 70%;
`;

const Detailheader = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 300px;
  background-color: #ddd;
`;

const DetailImg = styled.img`
  height: 100%;
  background-color: #aaa;
`;

const DetailTextSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 78%;
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
  background-color: #ccc;
`;

const TitleParagraph = styled.p`
  font-size: ${props => props.fontsize}px;
  opacity: ${props => props.opacity};
`;

const DescriptSection = styled.div`
  padding: 30px;
  width: 100%;
  height: 700px;
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
  background-color: #eee;
`;
const RemoteBtn = styled.button`
  position: fixed;
  left: 90%;
  top: 80%;
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;
