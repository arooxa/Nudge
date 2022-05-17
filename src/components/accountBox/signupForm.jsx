    import { React, useContext, useRef, useState } from 'react';
    import Alert from 'react-bootstrap/Alert';
    import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton, BoldLink } from './common';
    import { Marginer } from '../marginer';
    import { AccountContext } from "./accountContext";
    import { useAuth }from '../../contexts/AuthContext';
    import { useNavigate } from 'react-router-dom';
    import { db } from '../../firebase-config';
    import {doc, setDoc} from 'firebase/firestore';

export function SignUpForm(props) {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        console.log('submitted');
        e.preventDefault()
        
        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate('/home'); 
        } catch(error) {
            setError("Failed to create an Account")
        }
        setLoading(false);

    }

    const { switchToSignIn } = useContext(AccountContext);

    

    return <BoxContainer>
        <FormContainer >
            {error && <Alert variant="success">{error}</Alert>}
            <Input type="text" ref={nameRef} placeholder="Full Name" required />
            <Marginer direction="vertical" margin={10} />
            <Input type="email" ref={emailRef} placeholder="Email"  required/>
            <Marginer direction="vertical" margin={10} />
            <Input type="password" ref={passwordRef} placeholder="Password" required/>
            <Marginer direction="vertical" margin={10} />
            <Input type="password" ref={passwordConfirmRef} placeholder="Confirm Password" required/>
            
        </FormContainer>
            <MutedLink href='#'>
                Password must contain atleast 
                <ul>
                    <li>8 characters</li>
                    <li>1 number</li>
                    <li>1 special character (ex. !@#$)</li>
                </ul>
            </MutedLink>
            <SubmitButton onClick={handleSubmit} disabled={loading} type="submit">Sign Up</SubmitButton>
            <Marginer direction="vertical" margin={5} />
            <MutedLink href='#'>
                Have an account already?  
                <BoldLink href='#' onClick={switchToSignIn}> Log In</BoldLink>
            </MutedLink>
    </BoxContainer>
}