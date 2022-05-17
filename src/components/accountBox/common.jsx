import styled from "styled-components";


export const BoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    
`;

export const MutedLink = styled.a`
    font-size: 12px;
    color: rgba(200, 200, 200, 0.8);
    font-weight: 500;
    text-decoration: none;
    margin: 2%;
`;

export const BoldLink = styled.a`
    font-size: 12px;
    color: #ef5777;
    font-weight: 500;
    text-decoration: none;
`;

export const Input = styled.input`
    height: 40px;
    width: 100%;
    outline: none;
    border: 1px solid rgba(200, 200, 200, 0.4);
    padding: 20px 10px;
    transition: all 200ms ease-in-out;
    font-size: 14px;

    &::placeholder {
        color: rgba(200, 200, 200, 1);
    }

    &:focus {
        outline: none;
        border-bottom: 2px solid rgb(239, 87, 119);
    }
`;

export const SubmitButton = styled.button`
    padding: 10px 0px;
    width: 70%;
    border-radius: 20px;
    background: #fff;
    color:#ef5777;
    outline: none;
    border: 1px solid #ef5777;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-size: 30px;

    &:hover {
        transition: all 0.4s ease-in-out;
        background: #ef5777;
        color: #fff;
    }

`;

export const Alert = styled.div`
    width: 100%;
    height: 30px;
    color: red
`;
