import { React, useContext, useRef, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton, BoldLink } from './common';
import { Marginer } from '../marginer';
import { AccountContext } from "./accountContext";
import { useAuth }from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export function LoginForm(props) {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        console.log('submitted');
        e.preventDefault()
        
        try {
            setError('')
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            navigate('/home');
        } catch(error) {
            setError("Failed to sign in")
        }
        setLoading(false);

    }
    const { switchToSignUp } = useContext(AccountContext);


    return <BoxContainer>
        <FormContainer>
            {error && <Alert variant="success">{error}</Alert>}
            <Input type="email" ref={emailRef} placeholder="Email" required />
            <Marginer direction="vertical" margin={20} />
            <Input type="password" ref={passwordRef} placeholder="Password" required />
        </FormContainer>

        <Marginer direction="vertical" margin={5} />
        <MutedLink href='#'>Forget your password?</MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <SubmitButton type="submit" onClick={handleSubmit} disabled={loading}>Sign In</SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href='#'>
            Don't have an account?   
            <BoldLink href='#' onClick={switchToSignUp}> Sign Up</BoldLink>
        </MutedLink>
        
    </BoxContainer>
}