import React, { useState } from 'react';
import styled from 'styled-components';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Movie = ({ Ticketing }) => {
  const [selectDay, setSelectDay] = useState(false);
  const handleDayClick = (selectDay, { selected }) => {
    if (selected) {
      setSelectDay(undefined);
    } else {
      setSelectDay(selectDay);
    }
  };

  const today = new window.Date();

  const impossibleDays = [
    {
      from: new window.Date(1999, 1, 10),
      to: today.setDate(today.getDate() - 1),
    },
    {
      from: today.setDate(today.getDate() + 6),
      to: today.setDate(today.getDate() + 10000),
    },
  ];
  Ticketing(selectDay);
  return (
    <DateContainer>
      <Title>날짜</Title>
      <DateBox>
        <DayPicker
          mode="single"
          selected={selectDay}
          onSelect={setSelectDay}
          onChange={date => setSelectDay(date)}
          onDayClick={handleDayClick}
          disabled={impossibleDays}
        />
      </DateBox>
    </DateContainer>
  );
};

export default Movie;

const DateContainer = styled.div`
  width: 400px;
  background-color: antiquewhite;
`;

const Title = styled.div`
  height: 40px;
  padding: 10px 0;
  border: 0.5px solid gray;
  border-top: none;
  background-color: #333333;
  color: white;
  font-size: 20px;
  text-align: center;
`;

const DateBox = styled.div`
  height: 350px;
  width: 400px;
  &&& {
    .DayPicker,
    .Div {
      :focus {
        outline: none;
      }
    }
    .rdp {
      --rdp-cell-size: 45px;
      --rdp-accent-color: black;
      --rdp-background-color: white;
      --rdp-outline: 0px solid gray;
      --rdp-outline-selected: 1px solid gray;
      margin: 5px 60px;
    }
    .rdp-weeknumber,
    .rdp-day {
      height: 30px;
      display: flex;
      overflow: hidden;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      width: 30px;
      max-width: 30px;
      margin: 0;
    }
  }
`;
