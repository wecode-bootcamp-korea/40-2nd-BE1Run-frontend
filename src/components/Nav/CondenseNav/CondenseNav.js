import React, { useState } from 'react';
import styled from 'styled-components';
import NavBottomList from '../SecondNav/NavBottomList';

const CondenseNav = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <Container>
      <Menu>
        <DownCondense
          align="end"
          onMouseEnter={() => setIsShow(true)}
          onMouseLeave={() => setIsShow(false)}
        >
          {NAV_LIST.map(item => (
            <MenuList key={item.id}>{item.title}</MenuList>
          ))}
        </DownCondense>
      </Menu>
      <LogoPhrase>BIG MOVIE TEATRO</LogoPhrase>
      <LogoLink to="/">
        <LogoImg src="/images/Nav/BMTLogo.png" />
      </LogoLink>
      <NavBottomList
        isShow={isShow}
        onMouseEnter={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}
        top="100%"
      />
    </Container>
  );
};

export default CondenseNav;

const NAV_LIST = [
  { id: 1, title: '영화' },
  { id: 2, title: '극장' },
  { id: 3, title: '예매' },
  { id: 4, title: '스토어' },
];

const Container = styled.div`
  display: flex;
  text-align: center;
  position: fixed;
  color: white;
  width: 100%;
  height: 80px;
  top: 0;
  background-image: linear-gradient(
    to right,
    rgb(51, 51, 60),
    rgb(200, 80, 60) 50%,
    rgb(51, 51, 58)
  );
`;

const Menu = styled.div`
  width: 1500px;
`;

const DownCondense = styled.div`
  display: flex;
  text-align: center;
  margin-left: 95px;
`;

const LogoLink = styled.div`
  display: flex;
`;

const LogoImg = styled.img`
  width: 120px;
  height: 60px;
  margin: 10px 100px;
`;

const LogoPhrase = styled.span`
  margin-top: 27px;
  width: 300px;
  font-size: 25px;
  color: orange;
`;
const MenuList = styled.div`
  margin: 30px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  margin-left: 150px;
  white-space: nowrap;
  cursor: pointer;
`;
