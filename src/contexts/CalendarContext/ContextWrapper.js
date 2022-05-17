import React, { useState } from 'react';
import dayjs from 'dayjs';
import DateContext from './DateContext';

export default function ContextWrapper(props) {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    return(
        <DateContext.Provider value={{monthIndex, setMonthIndex}}>
            {props.children}
        </DateContext.Provider>
    );
}