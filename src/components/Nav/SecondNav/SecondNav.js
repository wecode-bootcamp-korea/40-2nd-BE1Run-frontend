import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavBottomList from './NavBottomList';
import { NAV_LIST } from './navData';

const SecondNav = () => {
  const [isShow, setIsShow] = useState(false);
  const [userInput, setUserInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = event => {
    setUserInput(event.target.value);
  };

  const onSubmit = () => {
    navigate(`/movies/search?keyword=${userInput}`, {
      state: { value: userInput },
    });
  };

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
            <Input
              id="search"
              value={userInput}
              type="text"
              onChange={handleSearch}
              onKeyPress={onSubmit}
            />
            <SearchIcon src="/images/Nav/loupe.png" onClick={onSubmit} />
          </SearchBar>
        </Wrapper>
        <NavBottomList
          isShow={isShow}
          onMouseEnter={() => setIsShow(true)}
          onMouseLeave={() => setIsShow(false)}
          top="195px"
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

const SearchBar = styled.form`
  display: flex;
  justify-content: center;
  position: relative;
  width: 300px;
  margin: 15px 0 0 100px;
  padding: 2px;
  overflow: auto;
`;

const Input = styled.input`
  width: 260px;
  height: 30px;
  border-top: 0px;
  border-bottom: 0px;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  padding: 10px 20px 10px 30px;
  -webkit-appearance: none;
  font-size: 18px;
  position: relative;
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.img`
  width: 28px;
  display: flex;
  width: 20px;
  position: absolute;
  justify-content: space-between;
  padding-top: 1px;
  margin-right: 10px;
  top: 5px;
  left: 30px;
`;
