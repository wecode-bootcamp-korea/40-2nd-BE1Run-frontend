import React, { useState } from 'react';
import styled from 'styled-components';
import { SubmitBtn } from '../Login/Login';
import { LoginInput } from '../Login/Login';
import { InputSection } from '../Login/Login';
import { InputParagraph } from '../Login/Login';
import { LoginForm } from '../Login/Login';

const SignIn = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    phoneNumber: '',
  });
  const { email, password, passwordCheck, phoneNumber } = inputValue;
  const [isFocusing, setIsFocusing] = useState(false);

  const onChangeHandler = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const paraTop = isFocusing
    ? 10
    : Object.values(inputValue).some(val => val)
    ? 10
    : 40;
  const fontsize = isFocusing
    ? 23
    : Object.values(inputValue).some(val => val)
    ? 23
    : 20;

  return (
    <SignupSection>
      <LogoImg src="images/BMTLogo.png" alt="로고 이미지" />
      <LoginForm
        onChange={onChangeHandler}
        onFocus={() => setIsFocusing(true)}
        onBlur={() => setIsFocusing(false)}
      >
        <InputSection>
          <InputParagraph top={paraTop} fontsize={fontsize}>
            Email
          </InputParagraph>
          <LoginInput type="text" name="email" value={email} />
        </InputSection>
        <InputSection>
          <InputParagraph top={paraTop} fontsize={fontsize}>
            Password
          </InputParagraph>
          <LoginInput type="password" name="password" value={password} />
        </InputSection>
        <InputSection>
          <InputParagraph top={paraTop} fontsize={fontsize}>
            Password Check
          </InputParagraph>
          <LoginInput
            type="password"
            name="passwordCheck"
            value={passwordCheck}
          />
        </InputSection>
        <InputSection>
          <InputParagraph top={paraTop} fontsize={fontsize}>
            Phone Number
          </InputParagraph>
          <LoginInput type="text" name="phoneNumber" value={phoneNumber} />
        </InputSection>

        <SubmitBtn disabled>Sign up</SubmitBtn>
      </LoginForm>
    </SignupSection>
  );
};

export default SignIn;

const SignupSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

const LogoImg = styled.img`
  position: absolute;
  top: 0;
  left: 5px;
  width: 100px;
`;
