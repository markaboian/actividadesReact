import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
    background-image: linear-gradient(to right, red, orange); 
    box-sizing: content-box;
`;

export const TitleCounter = styled.h1`
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.5em;
    text-align: center;
    text-decoration: underline;
    letter-spacing: .5px;
    color: white;
`

export const ContainerCounter = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

export const SpanCounter = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3em;
    height: 3em;
    border: 1px solid black;
    border-radius: 50%;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 2em;
    color: white;
    background-color: grey;
`;

export const ButtonOperation = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid black;
    background-color: white;
    color: black;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.5em;

    ${({ operation }) => operation === "add" && css`
        background-color: grey;
        color: white;
        border: 1px solid black;
        position: relative;
        right: 22px;
        cursor: pointer;
    `};
    
    ${({ operation }) => operation === "subtract" && css`
        position: relative;
        left: 22px;
        cursor: pointer;
    `}
`;