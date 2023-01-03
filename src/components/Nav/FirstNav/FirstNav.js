import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoginBtn from '../../Modal/LoginBtn';

const FirstNav = () => {
  return (
    <Container>
      <TopBar>
        <Logo>
          <LogoLink to="/">
            <LogoImg src="/images/Nav/BMTLogo.png" />
            <LogoWord>BIG MOVIE TEATRO</LogoWord>
          </LogoLink>
        </Logo>
        <UserIconDiv>
          <IconMapDiv>
            <LoginBtn />
            {ICON_LIST.map(item => (
              <StyleLink to={item.goto} key={item.id}>
                <IconImg src={item.url} />
                <IconTitle>{item.title}</IconTitle>
              </StyleLink>
            ))}
          </IconMapDiv>
        </UserIconDiv>
      </TopBar>
    </Container>
  );
};

export default FirstNav;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 3;
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const Logo = styled.div`
  margin-top: 20px;
`;

const LogoLink = styled(Link)`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  &visited,
  &:hover,
  &:active {
    color: inherit;
  }
`;

const LogoImg = styled.img`
  margin: 10px 0 0 50px;
  width: 130px;
`;

const LogoWord = styled.div`
  margin-top: 45px;
  font-size: 25px;
  white-space: nowrap;
  color: red;
  animation: fadeIn 5s;
  -webkit-animation: fadeIn 5s;
  -moz-animation: fadeIn 5s;
  -o-animation: fadeIn 5s;
  -ms-animation: fadeIn 5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const UserIconDiv = styled.div`
  justify-content: flex-end;
  margin-top: 20px;
  cursor: pointer;
`;

const IconMapDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const IconImg = styled.img`
  margin: 30px 0 5px;
  width: 30px;
  height: 27px;
`;

const IconTitle = styled.span`
  white-space: nowrap;
  text-align: center;
  color: orange;
`;

const StyleLink = styled(Link)`
  width: 55px;
  text-decoration: none;
  margin-left: 44px;
  font-size: 15px;
  text-align: center;

  &:visited,
  &:hover,
  &:active {
    color: inherit;
  }
`;

const ICON_LIST = [
  { id: 1, url: '/images/Nav/user.png', title: 'MY BMT', goto: '/' },
  { id: 2, url: '/images/Nav/headset.png', title: '고객센터', goto: '/' },
];
