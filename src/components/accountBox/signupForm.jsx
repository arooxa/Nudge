import { React, useContext } from 'react';
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton, BoldLink } from './common';
import { Marginer } from '../marginer';
import { AccountContext } from "./accountContext";

export function SignUpForm(props) {

    const { switchToSignIn } = useContext(AccountContext);

    return <BoxContainer>
        <FormContainer>
            <Input type="text" placeholder="Full Name" />
            <Marginer direction="vertical" margin={10} />
            <Input type="email" placeholder="Email" />
            <Marginer direction="vertical" margin={10} />
            <Input type="password" placeholder="Password" />
            <Marginer direction="vertical" margin={10} />
            <Input type="password" placeholder="Confirm Password" />
        </FormContainer>
            <MutedLink href='#'>
                Password must contain atleast 
                <ul>
                    <li>8 characters</li>
                    <li>1 number</li>
                    <li>1 special character (ex. !@#$)</li>
                </ul>
            </MutedLink>
            <SubmitButton type="submit">Sign Up</SubmitButton>
            <Marginer direction="vertical" margin={5} />
            <MutedLink href='#'>
                Have an account already?  
                <BoldLink href='#' onClick={switchToSignIn}> Log In</BoldLink>
            </MutedLink>
    </BoxContainer>
}