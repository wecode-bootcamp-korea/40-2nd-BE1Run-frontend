import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const SUB_TITLE_DATA = [
  { subTitleText: '감독' },
  { subTitleText: '배우' },
  { subTitleText: '시간' },
  { subTitleText: '개봉일' },
];

function Search() {
  const [loading, setLoading] = useState(true);
  const [searchData, setSearchData] = useState([]);
  const location = useLocation();
  const value = location.state.value;

  console.log(searchData);

  useEffect(() => {
    fetch(`http://10.58.52.80:8000/movies/search?keyword=${value}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => {
        setSearchData(result);
        setLoading(false);
      });
  }, []);

  if (loading) return;
  return (
    <Container>
      <DetailDiv>
        <Detailheader>
          <DetailImg src={searchData.data[0].thumbnailImageUrl} />
          <DetailTextSection>
            <Title>
              <TitleParagraph fontsize="36" opacity="1">
                {searchData.data[0].title}
              </TitleParagraph>
              <TitleParagraph fontsize="24" opacity="0.6">
                {searchData.data[0].titleEng}
              </TitleParagraph>
            </Title>
            <SubDiv>
              <SubSection width={20}>
                {SUB_TITLE_DATA.map((searchData, idx) => {
                  return (
                    <TitleParagraph fontsize="20" opacity="1" key={idx}>
                      {searchData.subTitleText}
                    </TitleParagraph>
                  );
                })}
              </SubSection>
              <SubSection width={70}>
                <TitleParagraph fontsize="20" opacity="1">
                  {searchData.data[0].director}
                </TitleParagraph>
                <TitleParagraph fontsize="20" opacity="1">
                  {searchData.data[0].actors}
                </TitleParagraph>
                <TitleParagraph fontsize="20" opacity="1">
                  {searchData.data[0].durationMin}분
                </TitleParagraph>
                <TitleParagraph fontsize="20" opacity="1">
                  {searchData.data[0].openingDate.substr(0, 10)}
                </TitleParagraph>
              </SubSection>
            </SubDiv>
          </DetailTextSection>
        </Detailheader>
        <DescriptSection>
          <DescriptText>{searchData.data[0].descriptions}</DescriptText>
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

const SubDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const SubSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  background-color: antiquewhite;
`;

const DescriptText = styled.div`
  font-size: 24px;
  width: 70%;
  height: 400px;
`;
