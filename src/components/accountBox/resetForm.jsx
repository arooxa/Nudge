import { React, useContext, useRef, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton, BoldLink } from './common';
import { Marginer } from '../marginer';
import { AccountContext } from "./accountContext";
import { useAuth }from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export function ResetForm(props) {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()
        
        try {
            setError('')
            setLoading(true);
            await login(emailRef.current.value);
            navigate('/');
        } catch(error) {
            setError("Failed to reset");
        }
        setLoading(false);

    }
    const { switchToSignIn, switchToSignUp } = useContext(AccountContext);


    return <BoxContainer>
        <FormContainer>
            {error && <Alert variant="success">{error}</Alert>}
            <Input type="email" ref={emailRef} placeholder="Email" required />
        </FormContainer>

        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit" onClick={handleSubmit} disabled={loading}>Reset Password</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <BoldLink href='#' onClick={switchToSignIn}> Log In</BoldLink>
        <MutedLink href='#'>
            Don't have an account?   
            <BoldLink href='#' onClick={switchToSignUp}> Sign Up</BoldLink>
        </MutedLink>
        
    </BoxContainer>
}