import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContents>
        <FooterMenu>
          <Link to="#">회사소개</Link>
          <Link to="#">IR</Link>
          <Link to="#">채용정보</Link>
          <Link to="#">광고/제휴/출점문의</Link>
          <Link to="#">이용약관</Link>
          <Link to="#">편성기준</Link>
          <Link to="#">개인정보처리방침</Link>
          <Link to="#">법적고지</Link>
        </FooterMenu>

        <FooterInfo>
          (00210)서울시 강남구 테헤란로 427 위워크 타워(위워크 선릉 2호점)
          <br />
          프로젝트매니져 : 곽민경 | 사업자등록번호 : 123-21-321 |
          통신판매업신고번호 : 8282-서울-8282 <br />
          호스팅사업자 : BE1Run | 프로덕트매니져 : 신창훈 | 대표이메일 :
          BMT@be1runbmt.net <br />
          ㈜BE1Run BMT. All Rights Reserved
        </FooterInfo>
      </FooterContents>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background-color: black;
  color: white;
`;

const FooterContents = styled.div`
  width: 80%;
  padding-top: 3vh;
  padding-bottom: 4vh;
  margin: auto;
`;

const FooterMenu = styled.div`
  display: flex;
  gap: 40px;
  padding-bottom: 3vh;
  border-bottom: solid;
  a {
    text-decoration-line: none;
    color: white;
  }
`;

const FooterInfo = styled.div`
  text-align: left;
  padding-top: 3vh;
  line-height: 140%;
`;
