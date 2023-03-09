import React, { useState } from 'react'
import { FormContainer, Input, Button, Container } from '../styles/StyledComponents'

const Register = () => {

    const [value, setValues] = useState({
        name: "",
        email: "",
        password: "",
        repeatPassword: ""
    })

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(value);

        setValues({
            name: "",
            email: "",
            password: "",
            repeatPassword: ""
        })
    }

    return (
        <FormContainer from="register-form" onSubmit={submitHandler}>
            <Container>
                <label>Name:</label>
                <Input input='register'
                    type="text"
                    name='name'
                    placeholder='Ingrese su nombre'
                    value={value.name}
                    onChange={(e) => setValues({ ...value, name: e.target.value })}
                />
            </Container>
            <Container>
                <label>Email:</label>
                <Input input='register'
                    type="email"
                    name='email'
                    placeholder='Ingrese su email'
                    value={value.email}
                    onChange={(e) => setValues({ ...value, email: e.target.value })}
                />
            </Container>
            <Container>
                <label>Contraseña:</label>
                <Input input='register'
                    type="password"
                    name='password'
                    placeholder='Ingrese su contraseña'
                    value={value.password}
                    onChange={(e) => setValues({ ...value, password: e.target.value })}
                />
            </Container>
            <Container>
                <label>Confirmar contraseña:</label>
                <Input input='register'
                    type="password"
                    name='repeatPassword'
                    placeholder='Repita la contraseña'
                    value={value.repeatPassword}
                    onChange={(e) => setValues({ ...value, repeatPassword: e.target.value})}
                />
            </Container>
            <Container contButtons="register">
                <Button whichBtn='register'>Register</Button>
            </Container>
        </FormContainer>
    )
}

export default Register