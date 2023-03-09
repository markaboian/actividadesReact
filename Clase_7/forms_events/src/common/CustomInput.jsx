import React from 'react'
import styled from 'styled-components'
import { Container } from '../styles/StyledComponents'


export const Input = styled.input`
    padding: 5px;
    border-radius: 10px;
    outline: none;
`

export const CustomInput = ({ type }) => {

    return (
        <Container>
            <span>{type}:</span>
            <Input type={type !== "password" ? 'email' : 'password'} placeholder={`Enter your ${type}`}  />
        </Container>
    )
}

