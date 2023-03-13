import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    ${({ container }) => container === "row" && css`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        margin-top: 100px;
    `}

    ${({ container }) => container === "button" && css`
        align-items: center;    
    `}

    ${({ container }) => container === "user" && css`
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px solid white;
        border-radius: 15px;
        padding: 20px;
        font-family: Helvetica, Arial, sans-serif;
        background-image: linear-gradient(to left top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
        color: white;
    `}

    ${({ container }) => container === "component" && css`
        margin-top: 20px;
        align-items: center;    
    `}

`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    border: 1px solid white;
    border-radius: 12.5px;
    width: 300px;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: bold;
    background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
    gap: 20px;
`

export const Input = styled.input`
    padding: 5px;
    outline: none;
    border-radius: 7.5px;
    width: 280px;
    border: 3px solid white;
`

export const Button = styled.button`
    border-radius: 10px;
    background-color: white;
    border: 1px solid white;
    padding: 12px;
    margin-top: 10px;
    cursor: pointer;
    color: black;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: bold;
    text-transform: uppercase;
`

export const ErrorLabel = styled.label`
    color: red;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: bold;
    font-size: 14px;
    padding: 5px 0px 5px 0px;
    
`