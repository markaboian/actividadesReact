import React, { useState } from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";

import { Button, Container, ErrorLabel, Input, StyledForm } from '../styles/StyledComponents';

const Card = ({ handleValues }) => {

    const fields = [
        { id: 1, label: "Song:", placeholder: "Enter your favorite song", name: "song" },
        { id: 2, label: "Artist:", placeholder: "Enter the song artist", name: "artist" }
    ]

    const getInitialValues = () => ({
        song: "",
        artist: ""
    })

    const getValidationSchema = () => (
        Yup.lazy(() =>

            Yup.object().shape({

                song: Yup.string().trim("There shouldn't be whitespaces").strict().min(6, "The name of the song must have at least 6 characters").required("Please, enter the name of the song"),
                artist: Yup.string().min(3, "The name of the artist must have at least 3 characters").required("Please, enter the name of the artist")

            })
        )
    )

    const onSubmit = (values) => {
        console.log(values);
        handleValues(values);
    }

    const { handleSubmit, values, setFieldValue, errors } = useFormik({
        validateOnBlur: false,
        validateOnChange: false,
        initialValues: getInitialValues(),
        validationSchema: getValidationSchema(),
        onSubmit
    })

    return (

        <StyledForm action="" onSubmit={handleSubmit}>

            {
                fields.map(field => (
                    <Container key={field.id}>
                        <label style={{ color: "white", marginBottom: "5px" }}>{field.label}</label>
                        <Input type="text" name={field.name} placeholder={field.placeholder} onChange={(e) => setFieldValue(field.name, e.target.value)} />
                        {
                            errors[field.name] && (
                                <ErrorLabel>{errors[field.name]}</ErrorLabel>
                            )
                        }

                    </Container>
                ))
            }

            <Container container="button">
                <Button type="submit">Submit song</Button>
            </Container>

        </StyledForm>
    )

}

export default Card