import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const OrderFinishPage = () => {
  const [ticketReceipt, setTicketReceipt] = useState([]);

  useEffect(() => {
    fetch('/data/ticketInfo.json', {
      headers: {
        'Content-type': 'application/json',
      },
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => {
        setTicketReceipt(result[0]);
      });
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title>예매 완료</Title>
        <FinishAlert>예매가 완료되었습니다.</FinishAlert>
        <TicketFinish>
          <TicketPoster src={ticketReceipt.posterImage} />
          <TicketWrapper>
            <TicketInfo>
              <TicketSubtitle>예매번호</TicketSubtitle>
              <TicketContext>{ticketReceipt.ticketNumber}</TicketContext>
            </TicketInfo>
            <TicketInfo>
              <TicketSubtitle>극장</TicketSubtitle>
              <TicketContext>{ticketReceipt.theater}</TicketContext>
            </TicketInfo>
            <TicketInfo>
              <TicketSubtitle>일시</TicketSubtitle>
              <TicketContext>
                {ticketReceipt.date}(날짜) {ticketReceipt.time}(시간)
              </TicketContext>
            </TicketInfo>
            <TicketInfo>
              <TicketSubtitle>인원</TicketSubtitle>
              <TicketContext>일반 {ticketReceipt.headCount}명</TicketContext>
            </TicketInfo>
            <TicketInfo>
              <TicketSubtitle>좌석</TicketSubtitle>
              <TicketContext>{ticketReceipt.seatNumber}</TicketContext>
            </TicketInfo>
            <TicketInfo>
              <TicketSubtitle>결제금액</TicketSubtitle>
              <TicketContext>{ticketReceipt.payment}원</TicketContext>
            </TicketInfo>
            <TicketInfo>
              <TicketSubtitle>결제수단</TicketSubtitle>
              <TicketContext>카카오페이</TicketContext>
            </TicketInfo>
          </TicketWrapper>
        </TicketFinish>
        <BookingBtn>
          <PrintBtn>예매정보 출력</PrintBtn>
          <CheckBtn>예매확인/취소</CheckBtn>
          <MessageBtn>메인 페이지</MessageBtn>
        </BookingBtn>
        <Warning>
          <WarningTitle>예매 유의사항</WarningTitle>
          <WarningContext>
            BM 포인트는 상영일 익일 적립됩니다. <br /> 영화 상영 스케줄은 영화관
            사정에 의해 변경될 수 있습니다. <br /> 비회원예매하신 경우는
            예매내역이 이메일로 발송되지 않습니다.
          </WarningContext>
        </Warning>
      </Wrapper>
    </Container>
  );
};

export default OrderFinishPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: #444;
`;

const Wrapper = styled.div`
  background-color: antiquewhite;
  width: 1000px;
  height: 700px;
  border: 1px solid #fff;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  background-color: #333333;
  color: white;
  padding-top: 12px;
  font-size: 24px;
`;

const FinishAlert = styled.div`
  margin: 30px 100px;
  font-size: 24px;
`;

const TicketFinish = styled.div`
  display: flex;
`;

const TicketPoster = styled.img`
  background-color: white;
  margin-left: 100px;
  width: 250px;
  height: 350px;
`;

const TicketWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TicketInfo = styled.div`
  display: grid;
  grid-template-columns: 100px 500px;
  column-gap: 40px;
  margin-top: 20px;
`;

const TicketSubtitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 70px;
  font-size: 18px;
  font-weight: bold;
  white-space: nowrap;
`;

const TicketContext = styled.span`
  display: flex;
  margin-left: 50px;
  font-size: 18px;
  font-weight: normal;
`;

const BookingBtn = styled.div`
  display: flex;
  width: 800px;
  margin: 0 350px;
`;

const PrintBtn = styled.button`
  text-align: center;
  margin-left: 50px;
  width: 150px;
  height: 50px;
  color: white;
  font-size: 16px;
  background-color: red;
  border-radius: 5%;
  border: 0;
  outline: 0;
  &:hover {
    cursor: pointer;
    background-color: darkred;
  }
`;

const MessageBtn = styled.button`
  text-align: center;
  margin-left: 50px;
  width: 150px;
  height: 50px;
  color: white;
  font-size: 16px;
  background-color: gray;
  border-radius: 5%;
  border: 0;
  outline: 0;
  &:hover {
    cursor: pointer;
    background-color: #333333;
  }
`;

const CheckBtn = styled.button`
  text-align: center;
  margin-left: 50px;
  width: 150px;
  height: 50px;
  color: white;
  font-size: 16px;
  background-color: orange;
  border-radius: 5%;
  border: 0;
  outline: 0;
  &:hover {
    cursor: pointer;
    background-color: darkorange;
  }
`;

const Warning = styled.div`
  display: flex;
  border-top: solid gray 1px;
  margin: 50px 100px;
`;

const WarningTitle = styled.div`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
`;

const WarningContext = styled.div`
  margin: 20px;
  padding: 2px;
  font-size: 17px;
`;
