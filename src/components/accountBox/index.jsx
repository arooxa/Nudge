import { React, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LoginForm } from './loginForm';
import { SignUpForm } from './signupForm';
import { ResetForm } from './resetForm';
import { AccountContext } from "./accountContext";

const BoxContainer = styled.div`
    width: 20%;
    min-height: 750px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
`;

const TopContainer = styled.div`
    width: 100%
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
    width: 160%;
    height: 500px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(120deg);
    top: -250px;
    left: -100px;
    background: #ef5777;
`;

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

const HeaderText = styled.h2`
    font-size: 30px;
    font-weight: 600;
    line-height: 1.2;
    color: #fff;
    z-index: 10;
    margin: 0;
`

const SmallText = styled.h5`
    color: #fff;
    font-weight: 500;
    font-size: 11px;
    z-index: 10;
    margin: 20;
`

const InnerContainer = styled.div`
    width: 100%
    display: flex;
    flex-direction: column; 
    margin-top: 15%;
    padding: 0 1.8em;
    padding-bottom: 5em;
`

const backdropVariants = {
    expanded: {
        width: "233%",
        height: "1250px",
        borderRadius: "20%",
        transform: "rotate(0deg)"
    },
    collapsed: {
        width: "160%",
        height: "500px",
        borderRadius: "50%",
        transform: "rotate(120deg)"
    }
}

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
};

export function AccountBox(props) {
    const [isExpanded, setExpanded] = useState(false);
    const[active, setActive] = useState("signin");

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 - 1400);
    }

    const switchToSignUp = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signup");
        }, 400); 
    }

    const switchToReset = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("reset");
        }, 400); 
    }

    const switchToSignIn = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signin");
        }, 400); 
    }

    const contextValue = {switchToSignUp, switchToSignIn, switchToReset};


    return (
    <AccountContext.Provider value={contextValue}>
    <BoxContainer>
        <TopContainer>
            <BackDrop 
                initial={false} 
                animate={isExpanded ? "expanded" : "collapsed"} 
                variants={backdropVariants}
                transition={expandingTransition}
            />
            {active === "signin" && <HeaderContainer>
                <HeaderText>Welcome</HeaderText>
                <HeaderText>Back</HeaderText>
                <SmallText>Please sign-in to continue!</SmallText>
            </HeaderContainer>}
            {active === "signup" && <HeaderContainer>
                <HeaderText>Create</HeaderText>
                <HeaderText>Account</HeaderText>
                <SmallText>Please sign-up to continue!</SmallText>
            </HeaderContainer>}
            {active === "reset" && <HeaderContainer>
                <HeaderText>Reset</HeaderText>
                <HeaderText>Password</HeaderText>
                <SmallText>Please enter your email!</SmallText>
            </HeaderContainer>}
        </TopContainer>
        <InnerContainer>
            {active === "signin" && <LoginForm />}
            {active === "signup" && <SignUpForm />}
            {active === "reset" && <ResetForm />}
        </InnerContainer>
    </BoxContainer>
    </AccountContext.Provider>
    )};