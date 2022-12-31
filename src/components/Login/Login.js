import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import useOutSideClick from '../../utils/hooks/useOutSideClick';

const Login = () => {
  const [inputValue, setInputValue] = useState({ userID: '', userPW: '' });
  const ref = useRef();
  const [paraTop, setParaTop] = useState(40);
  const [fontsize, setFontSize] = useState(20);

  const REST_API_KEY = '59bb969ce2c3aaf4dbbeaf8d523ed2ce';
  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const { userID, userPW } = inputValue;

  const onChangeHandler = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const topHandler = () => {
    setParaTop(10);
    setFontSize(23);
  };

  const downHandler = () => {
    if (userID.length > 0 || userPW.length > 0) return;
    setParaTop(40);
    setFontSize(20);
  };

  useOutSideClick(ref, downHandler);
  return (
    <LoginSection>
      <LogoImg src="/images/BMTLogo.png" alt="logo" />
      <LoginForm>
        <InputSection>
          <InputParagraph top={paraTop} fontsize={fontsize}>
            Email
          </InputParagraph>
          <LoginInput
            type="text"
            name="userID"
            ref={ref}
            onClick={topHandler}
            value={userID}
            onChange={onChangeHandler}
          />
        </InputSection>
        <InputSection>
          <InputParagraph top={paraTop} fontsize={fontsize}>
            Password
          </InputParagraph>
          <LoginInput
            type="password"
            name="userPW"
            ref={ref}
            onClick={topHandler}
            value={userPW}
            onChange={onChangeHandler}
          />
        </InputSection>
        <SubmitBtn disabled>Login</SubmitBtn>
      </LoginForm>

      <a href={KAKAO_AUTH_URL}>
        <KakaoBtn>
          <KakaoImg src="/images/kakao-talk.png" alt="카카오로고" />
          카카오 로그인
        </KakaoBtn>
      </a>
    </LoginSection>
  );
};

export default Login;

const LoginSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  a {
    text-decoration-line: none;
  }
`;

const LogoImg = styled.img`
  width: 35%;
`;

export const LoginForm = styled.form`
  width: 70%;
  height: 40%;
`;

export const InputSection = styled.section`
  position: relative;
`;

export const InputParagraph = styled.p`
  position: absolute;
  font-size: ${props => props.fontsize}px;
  top: ${props => props.top}px;
  background-color: transparent;
  transition: 0.3s;
  z-index: -1;
`;

export const LoginInput = styled.input`
  width: 100%;
  height: 25%;
  margin-top: 60px;
  padding-bottom: 5px;
  background-color: transparent;
  font-size: 20px;
  border: none;
  border-bottom: solid 1px;
  border-image: linear-gradient(to left, #ffd700 0%, #fff 50%, #d6b534 100%);
  border-image-slice: 1;
  outline: none;
`;

export const SubmitBtn = styled.button`
  margin-top: 30px;
  border-radius: 3px;
  width: 300px;
  height: 45px;
  background-color: #bbb;
  cursor: pointer;
  &:hover {
    background-color: #333;
    color: white;
  }
`;
export const KakaoImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const KakaoBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  margin-bottom: 20px;
  font-weight: bold;
  background-color: #f9e000;
  color: black;
  border: black solid 2px;
  border-radius: 5px;
  opacity: 0.8;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
