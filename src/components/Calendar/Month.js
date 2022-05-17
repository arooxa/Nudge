import React from 'react';
import { MonthContainer } from './common';
import Day from './Day';

const Month = ({month}) => {
    return(
        <MonthContainer>
            {month.map((row, i) => (
                <React.Fragment key={i}>
                {row.map((day, idx) => (
                    <Day day={day} key={idx} rowIdx={i} />
                ))}
                </React.Fragment>
            ))}
        </MonthContainer>
    );
    
}

export default Month;