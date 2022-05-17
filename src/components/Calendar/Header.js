import React, {useContext} from 'react';
import { HeaderContainer, SwitchMonth, CurrentMonthBoxText, ResetMonthBoxText } from './common';
import dayjs from 'dayjs';
import 'material-icons/iconfont/material-icons.css';
import DateContext from '../../contexts/CalendarContext/DateContext';


const Header = (props) => {
    const {monthIndex, setMonthIndex} = useContext(DateContext);

    function handlePrevMonth(change) {
        setMonthIndex(monthIndex + change);
    }
    function handleReset() {
        setMonthIndex(dayjs().month());
    }
    return(
        <HeaderContainer>
            <ResetMonthBoxText onClick={() => handleReset()}>
                Today
            </ResetMonthBoxText>
            <SwitchMonth onClick={() => handlePrevMonth(-1)}>
                <span className="material-icons">chevron_left</span>
            </SwitchMonth>
            <SwitchMonth onClick={() => handlePrevMonth(1)}>
                <span className="material-icons" >chevron_right</span>
            </SwitchMonth>
            <CurrentMonthBoxText>
                {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
            </CurrentMonthBoxText>
            

        </HeaderContainer>
    );
    
}

export default Header;