import { React, useState, useContext, useEffect } from 'react';
import Month from './Month';
import Header from './Header';
import { Container } from './common';
import dayjs from "dayjs";
import DateContext from '../../contexts/CalendarContext/DateContext';

const CalendarDisplay = (props) => {
    const [month, setMonth] = useState(getMonth());
    const {monthIndex} = useContext(DateContext);

    useEffect(() => {
        setMonth(getMonth(monthIndex));
    }, [monthIndex]);

    function getMonth(month = dayjs().month()) {
        month = Math.floor(month);
        const year = dayjs().year();
        const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
        let currentMonthCount = 0 - firstDayOfTheMonth;
        const daysMatrix = new Array(5).fill([]).map(() => {
            return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return dayjs(new Date(year, month, currentMonthCount));
            });
        });
        return daysMatrix;
    }

    return(
        <Container>
                <Header/>
                <Month month={month}/>
        </Container>
    );
    
}

export default CalendarDisplay;