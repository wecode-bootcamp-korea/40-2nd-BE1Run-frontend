import React, { useState } from 'react';
import styled from 'styled-components';
import NavBottomList from './NavBottomList';
import { NAV_LIST } from './navData';

const SecondNav = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <BorderLine>
      <Container>
        <Wrapper>
          <NavDropdownList
            onMouseEnter={() => setIsShow(true)}
            onMouseLeave={() => setIsShow(false)}
          >
            {NAV_LIST.map(item => {
              return (
                <NavDropdownTitle key={item.id}>{item.title}</NavDropdownTitle>
              );
            })}
          </NavDropdownList>
          <SearchBar>
            <Input />
            <SearchIcon src="/images/Nav/loupe.png" />
          </SearchBar>
        </Wrapper>
        <NavBottomList
          isShow={isShow}
          onMouseEnter={() => setIsShow(true)}
          onMouseLeave={() => setIsShow(false)}
          top="20%"
        />
      </Container>
    </BorderLine>
  );
};

export default SecondNav;

const BorderLine = styled.div`
  margin: 20px 0 10px 0;
  padding-bottom: 8px;
  border-top: solid orange 2px;
  border-bottom: 3px solid red;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  width: 1500px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const NavDropdownList = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

const NavDropdownTitle = styled.h1`
  display: flex;
  white-space: nowrap;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  margin-left: 180px;
  cursor: pointer;
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 300px;
  margin: 15px 0 0 100px;
  padding: 2px;
`;

const Input = styled.input`
  width: 280px;
  height: 30px;
  border-top: 0px;
  border-bottom: 0px;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  padding: 10px 50px 10px 10px;
  font-size: 18px;
  position: relative;
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.img`
  width: 28px;
  position: absolute;
  padding-top: 1px;
  margin-right: 10px;
`;
