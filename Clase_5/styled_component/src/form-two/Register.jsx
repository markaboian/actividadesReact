import React from 'react'
import { CustomInput } from '../common/CustomInput'
import { FormContainer, Container } from '../styles/StyledComponents'

const types = ["Name", "Email", "Password", "Repeat Password"]

const Register = () => {
  return (
    <FormContainer from="register">

      {
        types.map(tipo => (
          <CustomInput key={tipo} name={tipo}/>
        ))
      }


      {/* <CustomInput name="Name" />
      <CustomInput name="Email" />
      <CustomInput name="Password" />
      <CustomInput name="Repeat Password" /> */}
    </FormContainer>
  )
}

export default Register