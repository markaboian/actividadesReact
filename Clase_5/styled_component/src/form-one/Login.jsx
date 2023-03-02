import React from 'react'
import { FormContainer, Container } from '../styles/StyledComponents'
import { CustomInput } from '../common/CustomInput'

const Login = () => {

  const types = ["Email", "Password"]

  return (
    <FormContainer from="login">
      {
        types.map(type => (
          <CustomInput key={type} name={type}/>
        ))
      }
    </FormContainer>
  )
}

export default Login