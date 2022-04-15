import { React, useContext } from 'react';
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton, BoldLink } from './common';
import { Marginer } from '../marginer';
import { AccountContext } from "./accountContext";

export function LoginForm(props) {

    const { switchToSignUp } = useContext(AccountContext);

    return <BoxContainer>
        <FormContainer>
            <Input type="email" placeholder="Email" />
            <Marginer direction="vertical" margin={20} />
            <Input type="password" placeholder="Password" />
        </FormContainer>

        <Marginer direction="vertical" margin={5} />
        <MutedLink href='#'>Forget your password?</MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit">Sign In</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href='#'>
            Don't have an account?   
            <BoldLink href='#' onClick={switchToSignUp}> Sign Up</BoldLink>
        </MutedLink>
        
    </BoxContainer>
}