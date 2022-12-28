<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FirstNav from './FirstNav/FirstNav';
import SecondNav from './SecondNav/SecondNav';
import CondenseNav from './CondenseNav/CondenseNav';

const totalNavHeight = 200;
=======
import React from 'react';
>>>>>>> b45fa6c (Add: detail 레이아웃완료 ,  서버 데이터 수신확인)

const Nav = () => {
  const [scroll, setScroll] = useState(0);

  const onScroll = event => {
    setScroll(event.currentTarget.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <Container>
      <FirstNav />
      <SecondNav />
      {scroll >= totalNavHeight && <CondenseNav />}
    </Container>
  );
};
export default Nav;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  top: 0px;
  background-color: #333333;
  z-index: 10000;
`;
