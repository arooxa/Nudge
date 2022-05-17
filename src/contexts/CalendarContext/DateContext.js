import React from 'react';

const DateContext = React.createContext({
    monthIndex: 0,
    setMonthIndex: (index) => {},
});

export default DateContext;

