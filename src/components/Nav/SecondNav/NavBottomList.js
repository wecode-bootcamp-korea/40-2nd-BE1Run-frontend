import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NAV_LIST } from './navData';

const NavBottomList = ({ isShow, onMouseEnter, onMouseLeave, top }) => {
  return (
    <Container
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      top={top}
      isShow={isShow}
    >
      {NAV_LIST.map(tab => (
        <Menu key={tab.id}>
          {tab.subTabs.map(item => (
            <ListLink to={item.url} key={item.id}>
              <MenuList>{item.title}</MenuList>
            </ListLink>
          ))}
        </Menu>
      ))}
    </Container>
  );
};

export default NavBottomList;

const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-around;
  margin-left: 170px;
  top: ${props => props.top};
  height: ${props => (props.isShow ? '300px' : '0px')};
  overflow: hidden;
  transition: height ease-in-out 0.2s 0s;
  color: white;
  background-color: #333333;
  position: absolute;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 20px 52px;
  width: 100%;
`;

const ListLink = styled(Link)`
  text-decoration: none;
  margin: 10px 7px;
  padding: 4px;
  white-space: nowrap;
  font-size: 18px;
  &:visited,
  &:hover,
  &:active {
    color: inherit;
  }
`;

const MenuList = styled.li`
  &:hover {
    color: red;
  }
`;
