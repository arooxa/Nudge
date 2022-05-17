import styled from "styled-components";

/*
    CALENDAR STYLES =====================
*/
export const Container = styled.div`
    height: 100%;
    width: 100%;
    margin: 0% 5%;
    // border: 2px solid green;
    flex-direction: column;
    display: flex;
    
`
/*
    HEADER STYLES =====================
*/
export const HeaderContainer = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    //border: 2px solid yellow;
`

export const HeaderText = styled.h1`
    display: flex;
    font-size: 20px;
    color: #FFF;
    font-weight: 200;
    text-align: center;
    align-self: center;
    padding: 20px;
`

export const CurrentMonthBoxText = styled.h1`
    display: flex;
    font-size: 20px;
    color: #FFF;
    font-weight: 200;
    align-self: center;
    padding: 20px;
    outline: 1px solid white;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    border-radius: 40px;

    &:hover {
        transition: all 0.4s ease-in-out;
        background: #ef5777;
    }
`

export const ResetMonthBoxText = styled.button`
    all: unset;
    display: flex;
    font-size: 20px;
    text-align: center;
    align-self: center;
    color: #FFF;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    outline: 1px solid white;
    transition: all 0.2s ease-in-out;
    border-radius: 40px;
    &:hover {
        transition: all 0.4s ease-in-out;
        background: #ef5777;
    }
    padding: 20px;
    
`

export const SwitchMonth = styled.button`
    all: unset;
    display: flex;
    font-size: 20px;
    text-align: center;
    align-self: center;
    color: #FFF;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
        transition: all 0.4s ease-in-out;
        
    }
    padding: 20px;
    
`


/*
    MONTH STYLES =====================
*/
export const MonthContainer = styled.div`
    flex: 5;
    width: 100%;
    // border: 2px solid blue;
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;    
`

/*
    DAY STYLES =====================
*/
export const DayContainer = styled.button`
    all: unset;
    width: calc(100% / 7);
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    outline: 1px solid white;
    display: flex;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    border-radius: 40px;

    &:hover {
        transition: all 0.4s ease-in-out;
        background: #ef5777;
    }
`;

export const DayText = styled.h1`
    font-size: 20px;
    color: #FFF;
    font-weight: 200;
    margin: 0.2rem;
    text-align: center;
`
/*
    MODAL STYLES =====================
*/

export const ModalBackground = styled.div`
    position: fixed;
    padding: 0;
    margin: 0;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(2px);
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const ModalContainer = styled.div`
    width: 40%;
    height: 50%;
    position: fixed;
    border-radius: 12px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    padding: 25px;

    -webkit-animation-name: modal-animation;
    -webkit-animation-duration: 0.5s;
    animation-name: modal-animation;
    animation-duration: 0.5s;

    @-webkit-keyframes modal-animation {
        from {
            top: -200px;
            opacity: 0;
        }
        to {
            top: 25%;
            opacity: 1;
        }
    }
      
    @keyframes modal-animation {
        from {
            top: -200px;
            opacity: 0;
        }
        to {
            top: 25%;
            opacity: 1;
        }
    }
`



export const ModalTitle = styled.div`
    display: flex;
    //outline: 1px solid green;
    width: 100%;
    height: 10%;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
`



export const ModalBody = styled.div`
    display: flex;
    //outline: 1px solid red;
    width: 100%;
    height: 75%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5% 5% 5% 5%;
`

export const ModalTextEntry = styled.input`
    display: flex;
    height: 25%;
    width: 60%;
    border: 1px solid #000;
    transition: all 200ms ease-in-out;
    font-size: 20px;
    text-align: center;
    margin-top: 2%;

    &::placeholder {
    color: #000;
    }

    &:focus {
    outline: none;
    border: 2px solid rgb(239, 87, 119);
    }
`

export const ModalImageContainer = styled.div`
    display: flex;
    outline: 1px dashed #808080;
    height: 75%;
    width: 60%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #FBFBFF;
    border-radius: 20px;

    .image-upload {
        display: flex;
        flex-wrap: wrap;
    }
        >input {
            display: none;
        }

        .uploaded-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
        }

`
export const ImagePreview = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    //outline: 1px solid red;

    #uploaded-image{
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 20px;
    }

    .close-icon{
        background: #000;
        border-radius: 5px;
        opacity: .8;
        position: absolute;
        z-index: 10;
        right: 15px;
        top: 20px;
        cursor: pointer;
        :hover {
            opacity: 1;
        }   
    }
`

export const ModalUploadText = styled.h1`
    font-size: 20px;
    text-align: center;
    color: #000;
`

export const ModalBottom = styled.div`
    display: flex;
    //outline: 1px solid yellow;
    width: 100%;
    height: 15%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const ModalExit = styled.button`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    width: 20%;
    color: #FFF;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    background: #e84118;
    border-radius: 20px;

    &:hover {
        transition: all 0.4s ease-in-out;
        background: #000;
    }
    padding: 20px;
`
export const ModalUpload = styled.button`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    width: 20%;
    color: #FFF;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    background: #487eb0;
    border-radius: 20px;
    
    &:hover {
        transition: all 0.4s ease-in-out;
        background: #000;
    }
    padding: 20px;
`