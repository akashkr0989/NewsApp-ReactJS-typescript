import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from '../CommonComponents/TextError'
import { ValidationOnSignUpForm } from './helper'
import { intialValues } from './type'
import { Navigate, useNavigate } from 'react-router-dom'
import * as utility from '../../common/utilityService'
import './SignupStyle.css'
import { Box, Container } from '@mui/material'
import { REGISTER } from '../../axios/ApiCall'
import MessageDialog from '../Dialogs'


const validationSchema = Yup.object({ ...ValidationOnSignUpForm })

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

// const onSubmit = (values: any) => {
//     console.log('Form Data', values)

//     const payload = {
//         firstName: values.firstName,
//         lastName: values.lastName,
//         password: values.password,
//         gender: values.gender,
//         emailId: values.emailId
//     }

//     try {
//         const response = REGISTER.post('register', payload);
//         console.log(response);
//         setMessage(response.message)


//     } catch (error: any) {
//         console.log(error?.message);
//     }

// }




export default function SignUp() {

    const [message, setMessage] = useState('');
    const [dialogOpen, setDialogOpen] = useState(false);
    const [pathNavigate, setPathNavigate] = useState('');


    const handleOpenDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    const onSubmit = async (values: any) => {
        console.log('Form Data', values)

        const payload = {
            firstName: values.firstName,
            lastName: values.lastName,
            password: values.password,
            gender: values.gender,
            emailId: values.emailId
        }

        try {
            const response: any = await REGISTER.post('register', payload);
            setMessage(response.data.message)
            setPathNavigate('/login')
            handleOpenDialog();
            // navigateToLogin();

        } catch (error: any) {
            setMessage(error.response.data.message.toUpperCase())
            handleOpenDialog();

        }

    }



    const navigate = useNavigate();

    if (utility.getLoginToken()) {
        return <Navigate to={'/'} />
    }

    const navigateToLogin = () => {
        navigate('/login')
    }


    return (
        <>

            <Box>
                <Container maxWidth='md'>

                    <div className="heading-label">

                        <h1>Register</h1>
                    </div>
                    <div className="container box">
                        <Formik
                            initialValues={intialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}>

                            <Form>

                                <div>


                                    <div className='form-floating mb-3'>
                                        <Field className="form-control" type='text' required id='firstName' name='firstName' placeholder='First name' />
                                        <label htmlFor="firstName">First Name</label>
                                        <ErrorMessage name='firstName' component={TextError} />
                                    </div>

                                    <div className='form-floating mb-3'>
                                        <Field className="form-control" type='text' id='lastName' name='lastName' placeholder='Last name' />
                                        <label htmlFor="lastName">Last Name</label>
                                        <ErrorMessage name='lastName' component={TextError} />
                                    </div>

                                    <div className='form-floating mb-3'>
                                        <Field className="form-control" type='email' id='emailId' name='emailId' placeholder='abc@xyz.com' />
                                        <label htmlFor="emailId">Email Id</label>
                                        <ErrorMessage name='emailId' component={TextError} />
                                    </div>

                                    <div className='form-floating mb-3'>
                                        <Field className="form-control" type='text' id='gender' name='gender' placeholder='gender' />
                                        <label htmlFor="gender">Gender</label>
                                        <ErrorMessage name='gender' component={TextError} />
                                    </div>

                                    <div className='form-floating mb-3'>
                                        <Field className="form-control" type='text' id='password' name='password' placeholder='Password' />
                                        <label htmlFor="password">Password</label>
                                        <ErrorMessage name='password' component={TextError} />
                                    </div>

                                    <div className='form-floating mb-3'>
                                        <Field className="form-control" type='text' id='confirmPassword' name='confirmPassword' placeholder='Confirm password' />
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <ErrorMessage name='confirmPassword' component={TextError} />
                                    </div>

                                </div>

                                <div className='button-group' style={{ paddingTop: '20px' }}>
                                    <button className="btn btn-dark" type='submit'>Submit</button> &nbsp; &nbsp;
                                    <button className="btn btn-light" onClick={navigateToLogin} type='button'>Login</button>
                                </div>

                            </Form>
                        </Formik>
                    </div>

                    <MessageDialog message={message} onClose={handleCloseDialog} open={dialogOpen} path={pathNavigate}/>


                </Container>
            </Box>
        </>
    )
}
