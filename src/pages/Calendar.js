import * as React from 'react';
import styled from 'styled-components'
import CalendarDisplay from "../components/Calendar/Calendar";

const Calendar = () => {
  return (
    <Background>
      <CalendarDisplay />
    </Background>
  );
};



const Background = styled.section`
    height: calc(100vh - 60px);
    width: 100vw;
    display: flex;
    background-color: #ff6b81; 
    // background-color: #9b59b6;
    justify-content: center;
    align-items: center;
    padding-bottom: 2%;
`;

export default Calendar;
