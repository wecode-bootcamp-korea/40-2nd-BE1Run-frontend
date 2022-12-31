import React, { useState, useRef } from 'react';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import styled from 'styled-components';
import useOutSideClick from '../../utils/hooks/useOutSideClick';

const Modal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  const modalOpen = () => {
    setIsVisible(true);
  };

  const modalClose = () => {
    setIsVisible(false);
  };

  useOutSideClick(ref, modalClose);
  return (
    <ModalContainer>
      <ModalImg src="/images/Nav/padlock.png" onClick={modalOpen}>
        로그인
      </ModalImg>
      {isVisible && (
        <ModalSection ref={ref}>
          <CloseBtn onClick={modalClose}>X</CloseBtn>
          <Login />
        </ModalSection>
      )}
    </ModalContainer>
  );
};
export default Modal;

const ModalContainer = styled.div`
  text-align: center;
  color: orange;
`;

const ModalImg = styled.img`
  margin: 30px 0 5px;
  width: 30px;
  height: 27px;
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 20px;
  border: #aaa solid 1px;
  border-radius: 20px;
  width: 30px;
  height: 30px;
  &:hover {
    background-color: #555;
    color: white;
  }
`;

const ModalSection = styled.section`
  position: fixed;
  border: 2px solid;
  border-image: linear-gradient(0deg, #ffd700 0%, #fff 50%, #d6b534 100%);
  border-image-slice: 2;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: auto;
  width: 600px;
  height: 600px;
`;
