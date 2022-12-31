import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

function Search() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const location = useLocation();
  const value = location.state.value;

  useEffect(() => {
    fetch(`http://10.58.52.117:8000/movies/search?keyword=${value}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => {
        setData(result);
        setLoading(false);
      });
  }, []);

  if (loading) return;
  return (
    <Container>
      <DetailDiv>
        <Detailheader>
          <DetailImg src={data?.data[0].thumbnailImageUrl} />
          <DetailTextSection>
            <Title>
              <TitleParagraph fontsize="36" opacity="1">
                {data?.data[0].title}
              </TitleParagraph>
              <TitleParagraph fontsize="24" opacity="0.6">
                {data?.data[0].titleEng}
              </TitleParagraph>
            </Title>
            <SubSection>
              <TitleParagraph fontsize="18" opacity="1">
                감독 : {data?.data[0].director}
              </TitleParagraph>
              <TitleParagraph fontsize="18" opacity="1">
                배우 : {data?.data[0].actors}
              </TitleParagraph>
              <TitleParagraph fontsize="18" opacity="1">
                시간 : {data?.data[0].durationMin}분
              </TitleParagraph>
              <TitleParagraph fontsize="18" opacity="1">
                개봉일 : {data?.data[0].openingDate}
              </TitleParagraph>
            </SubSection>
          </DetailTextSection>
        </Detailheader>
        <DescriptSection>
          <DescriptText>{data?.data[0].descriptions}</DescriptText>
        </DescriptSection>
      </DetailDiv>
    </Container>
  );
}
export default Search;

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
  background-color: antiquewhite;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 95%;
  height: 100px;
  background-color: antiquewhite;
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
  background-color: antiquewhite;
`;

const DescriptText = styled.div`
  font-size: 24px;
  width: 70%;
  height: 400px;
`;
