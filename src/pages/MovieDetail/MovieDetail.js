import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Stillcut from './Stillcut';
import Trailer from './Trailer';

const SUB_TITLE_DATA = [
  { subTitleText: '감독' },
  { subTitleText: '배우' },
  { subTitleText: '시간' },
  { subTitleText: '개봉일' },
];

const MovieDetail = () => {
  const [data, setData] = useState({});
  const [trailerData, setTrailerData] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.60:8000/movie/1')
      .then(res => res.json())
      .then(result => setData(result));
  }, []);

  useEffect(() => {
    fetch('http://10.58.52.60:8000/movie/trailer/1')
      .then(res => res.json())
      .then(result => setTrailerData(result));
  }, []);

  console.log(trailerData);
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
            <SubDiv>
              <SubSection width={20}>
                {SUB_TITLE_DATA.map((data, idx) => {
                  return (
                    <TitleParagraph fontsize="20" opacity="1" key={idx}>
                      {data.subTitleText}
                    </TitleParagraph>
                  );
                })}
              </SubSection>
              <SubSection width={80}>
                <TitleParagraph fontsize="20" opacity="1">
                  {data.director}
                </TitleParagraph>
                <TitleParagraph fontsize="20" opacity="1">
                  {data.actors}
                </TitleParagraph>
                <TitleParagraph fontsize="20" opacity="1">
                  {data.duration_min}분
                </TitleParagraph>
                <TitleParagraph fontsize="20" opacity="1">
                  {data.opening_date}
                </TitleParagraph>
              </SubSection>
            </SubDiv>
          </DetailTextSection>
        </Detailheader>
        <DescriptSection>{data.descriptions}</DescriptSection>
        <SubParagraph>Still Cut</SubParagraph>
        <Stillcut stillcut={data.still_cut_image} />
        <SubParagraph>Trailer</SubParagraph>
        <Trailer trailer={trailerData} />
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

const SubDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 95%;
`;

const SubSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${props => props.width}%;
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
