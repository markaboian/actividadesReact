import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    
    ${({ content }) => content === "evenly" && css`
        flex-direction: row;
        justify-content: space-evenly;
        height: 100vh;
        align-items: center;
    `}

    ${({ contButtons }) => contButtons === "login" && css`
        flex-direction: row;
        justify-content: space-evenly;
        margin-top: 10px;
    `}

    ${({ contButtons }) => contButtons === "register" && css`
        margin-top: 10px;
    `}

`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 30px;
    border: 5px solid white;
    border-radius: 15px;
    gap: 15px;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: bold;
    background-image: linear-gradient(to bottom, #141e30, #243b55);
    color: white;
    

    ${({ from }) => from === "register-form" && css`
        background-image: linear-gradient(to bottom, #000428, #004e92);
        align-items: center;
    `}

`

export const Input = styled.input`
    padding: 5px;
    border-radius: 10px;
    border: 2px solid black;
    outline: none;
    margin-top: 5px;
    padding: 8px;
    
    ${({input}) => input === "register" && css`
        width: 240px;
        border: 3px solid white;
    `}
`

export const Button = styled.button`
    font-family: Helvetica, Arial, sans-serif;
    font-weight: bold;
    width: 120px;
    height: 35px;
    border-radius: 10px;
    border: 1px solid green;
    background-color: green;
    color: black;
    cursor: pointer;

    ${({ typeButton }) => typeButton === "cancel" && css `
        background-color: red;
        border: 1px solid red;
        color: black;
    `}

    ${({whichBtn}) => whichBtn === "register" && css`
        margin-top: 10px;
    `}

`