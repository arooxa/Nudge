import React from "react"
import styled from 'styled-components'
import background from '../images/landing-background.svg'
import logo from '../images/zebra-head.jpg'
import { AccountBox } from '../components/accountBox'

const Landing = () => {
  return (
      <Background>
            <AccountBox />
      </Background>
    
  );
};

const Background = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    justify-content: center;
    align-items: center;
`;

export default Landing;
