import React, { Component, useContext, useState } from 'react'
import { Formik, Form, Field, ErrorMessage, } from 'formik'
import * as Yup from 'yup'
import TextError from '../CommonComponents/TextError'
import { ValidationOnSignInForm } from './helper'
import { intialValues } from './type'
import * as utility from '../../common/utilityService'
import { Navigate, useNavigate } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import MessageDialog from '../Dialogs'
import { LOGIN } from '../../axios/ApiCall'
import { SnackbarContext } from '../CommonComponents/SnackBarComponent'
// import TextField from '@mui/material/TextField';


const validationSchema = Yup.object({ ...ValidationOnSignInForm });


export default function Login() {

    const navigate = useNavigate();

    const { showSnackbar } = useContext(SnackbarContext);


    const [message, setMessage] = useState('');
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleOpenDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };


    if (utility.getLoginToken()) {
        return <Navigate to={'/'} />
    }

    const onSubmit = async (values: any) => {

        console.log('Form Data', values)

        try {
            const response: any = await LOGIN.post('login', values);
            // setMessage(response.data.message)
            console.log(response.data)
            utility.setLocalStorage('token', response.data.data.authToken);
            showSnackbar(response.data.message);
            navigate('/')

        } catch (error: any) {
            setMessage(error.response.data.message.toUpperCase())
            handleOpenDialog();

        }

    }


    const navigateToRegister = () => {
        navigate('/register');
    }


    return (
        <>

            {/* <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    '& > :not(style)': {
                        m: 25,
                        width: 600,
                        height: 600,
                    },
                }}
            >

            </Box> */}


            <br /><br />

            <Box>
                <Container maxWidth='md'>

                    <h1>Login</h1>
                    <br /><br />
                    <div className="container">
                        <Formik
                            initialValues={intialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}>

                            <Form>

                                <div>

                                    <div className="form-floating mb-3">
                                        <Field
                                            type="email"
                                            className="form-control"
                                            required
                                            id='emailId'
                                            name='emailId'
                                            placeholder="Email"
                                        />
                                        <ErrorMessage name='emailId' component={TextError} />
                                        <label htmlFor="emailId">Email address</label>
                                    </div>
                                    <div className="form-floating">
                                        <Field
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            required
                                            placeholder="Password"
                                        />
                                        <ErrorMessage name='password' component={TextError} />
                                        <label htmlFor="password">Password</label>
                                    </div>

                                </div>

                                <div className='button-group' style={{ paddingTop: '20px' }}>
                                    <button className="btn btn-dark" type='submit'>Login</button> &nbsp; &nbsp;
                                    <button className="btn btn-light" onClick={navigateToRegister} type='button'>Register</button>
                                </div>

                            </Form>
                        </Formik>
                    </div>
                    {/* </Box> */}

                    <MessageDialog message={message} onClose={handleCloseDialog} open={dialogOpen} />

                </Container>
            </Box>


        </>
    )
}
