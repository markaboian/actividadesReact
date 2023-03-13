import React from 'react'
import { Container } from '../styles/StyledComponents'

const User = ({song, artist}) => {
    return (
        <Container container='user'>
            <h1>Hello!</h1>
            <h2>Here is your favorite song: {song}, by {artist}</h2>
        </Container>
    )
}

export default User