import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage, } from 'formik'
import * as Yup from 'yup'
import TextError from '../CommonComponents/TextError'
import { ValidationOnSignInForm } from './helper'
import { intialValues } from './type'
import * as utility from '../../common/utilityService'
import { Navigate, useNavigate } from 'react-router-dom'
// import TextField from '@mui/material/TextField';


const validationSchema = Yup.object({ ...ValidationOnSignInForm });


export default function Login() {

    const navigate = useNavigate();
    

    if (utility.getLoginToken()) {
        return <Navigate to={'/'} />
    }


    const onSubmit = (values: any) => {

        console.log('Form Data', values)

        utility.setLocalStorage('token', 'true');
        if (utility.getLoginToken()) {
            navigate('/')

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

        </>
    )
}
