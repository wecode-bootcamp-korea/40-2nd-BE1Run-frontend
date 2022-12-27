import React, { useState } from 'react';
import styled from 'styled-components';
import INFO_DATA from './INFODATA';
import ORDER_DATA from './ORDERDATA';
import ORDER_TITLE_DATA from './OrderTitleData';
import PAYMENT_TITLE_DATA from './PaymentTitleData';
import AGREE_DATA from './AgreeData';

const OrderPage = () => {
  const [buttonAble, setButtonAble] = useState(0);
  return (
    <OrderPageDiv>
      <Box>
        <OrderTitle>예매내역 확인</OrderTitle>
        <OrderBox>
          <OrderInfo>
            <InfoHeader>
              <HeaderParagraph size={18}>예매정보</HeaderParagraph>
              <HeaderParagraph size={12} topdata={5} color={'#aaa'}>
                결제하기 전 예매 내역을 확인해 주세요.
              </HeaderParagraph>
            </InfoHeader>
            <OrderBody>
              <Imgsection>
                <InfoImg src={ORDER_DATA.img} />
              </Imgsection>
              <Infosection width={80} height={160}>
                {ORDER_TITLE_DATA.map(data => {
                  return (
                    <OrderParagragh color={'#888'} key={data.id}>
                      {data.value}
                    </OrderParagragh>
                  );
                })}
              </Infosection>
              <Infosection width={400} height={160}>
                {ORDER_DATA.exp.map((d, idx) => {
                  return <OrderParagragh key={idx}>{d.value}</OrderParagragh>;
                })}
              </Infosection>
            </OrderBody>
          </OrderInfo>
          <PaymentInfo>
            <InfoHeader>
              <HeaderParagraph size={18}>결제정보</HeaderParagraph>
              <HeaderParagraph size={12} topdata={5} color={'#aaa'}>
                결제하기 버튼을 클릭하시면 결제가 완료됩니다
              </HeaderParagraph>
            </InfoHeader>
            <PaymentBody>
              <Infosection width={80} height={80}>
                {PAYMENT_TITLE_DATA.map(data => {
                  return (
                    <OrderParagragh key={data.id} color={'#888'}>
                      {data.value}
                    </OrderParagragh>
                  );
                })}
              </Infosection>
              <Infosection width={300} height={80}>
                <OrderParagragh color={'#666'}>
                  {ORDER_DATA.headerCount * 15000} 원
                </OrderParagragh>
                <OrderParagragh color={'#666'}>카카오 페이 결제</OrderParagragh>
              </Infosection>
            </PaymentBody>
          </PaymentInfo>
          <TextBox>
            <TextUl>
              {INFO_DATA.map(data => {
                return <li key={data.id}>{data.text}</li>;
              })}
            </TextUl>
          </TextBox>
        </OrderBox>
        <OrderFooter>
          <FooterSection>
            {AGREE_DATA.map(data => {
              return (
                <div key={data.id}>
                  <input
                    type="checkbox"
                    onClick={e => {
                      e.target.checked
                        ? setButtonAble(buttonAble + 1)
                        : setButtonAble(buttonAble - 1);
                    }}
                  />
                  {data.text}
                </div>
              );
            })}
          </FooterSection>
          <FooterSection>
            <PayBtn
              disabled={buttonAble >= 3 ? false : true}
              onClick={() => {}}
            >
              결제하기
            </PayBtn>
          </FooterSection>
        </OrderFooter>
      </Box>
    </OrderPageDiv>
  );
};

export default OrderPage;

const OrderPageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 750px;
`;
const Box = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 700px;
  height: 90%;
  background-color: #f6f5f3;
  border: solid 2px #111;
`;

const OrderBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 70%;
  background-color: #f6f5f3;
`;

const OrderInfo = styled.article`
  width: 650px;
  height: 200px;
  background-color: #f5f5f4;
`;

const OrderTitle = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #111;
  color: white;
  border: solid 1px #eee;
  padding-left: 15px;
  font-size: 20px;
`;

const OrderBody = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 170px;
`;

const Imgsection = styled.article`
  display: flex;
  justify-content: center;
  height: 160px;
  background-color: #111;
`;

const InfoImg = styled.img`
  height: 100%;
`;

const Infosection = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

const OrderParagragh = styled.p`
  color: ${props => props.color};
  font-size: 18px;
  font-weight: 500;
`;

const PaymentInfo = styled.article`
  width: 650px;
  height: 150px;
  background-color: #f5f5f4;
`;

const PaymentBody = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
`;

const InfoHeader = styled.article`
  display: flex;
  align-items: center;
  width: 100%;
  height: 35px;
  border-top: solid 2px #ddd;
  border-bottom: solid 2px #ddd;
  padding-left: 10px;
  background-color: #ececea;
`;

const HeaderParagraph = styled.p`
  padding-right: 10px;
  font-size: ${props => props.size}px;
  margin-top: ${props => props.topdata}px;
  color: ${props => props.color};
`;

const TextBox = styled.article`
  width: 650px;
  height: 80px;
  border-top: solid 1px #ccc;
  font-size: 12px;
  color: #aaa;
`;

const TextUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`;

const OrderFooter = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 20%;
  background-color: #ededed;
  border-top: solid 2px #ddd;
`;

const FooterSection = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50%;
  height: 90%;
  padding: 20px;
  border-left: 1px #ddd solid;
`;

const PayBtn = styled.button`
  font-size: 24px;
  color: white;
  background-color: #bf0a28;
  width: 50%;
  height: 50px;
  border: black solid 1px;
  border-radius: 5px;
  &:disabled {
    opacity: 0.5;
  }
`;
