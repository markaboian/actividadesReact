import React, { useState } from 'react'
import { FormContainer, Container, Input, Button } from '../styles/StyledComponents'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log({ email }, { password });
        setEmail("");
        setPassword("");
    }

    return (
        <FormContainer from="login-form" id='login' onSubmit={submitHandler}>
            <Container>
                <label>Email:</label>
                <Input
                    placeholder='Ingrese su email'
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Container>
            <Container>
                <label>Password:</label>
                <Input
                    placeholder='Ingrese su contraseña'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Container>
            <Container contButtons="login">
                <Button typeButton="cancel">Cancel</Button>
                <Button form='login'>Submit</Button>
            </Container>
        </FormContainer>
    )
}

export default Login