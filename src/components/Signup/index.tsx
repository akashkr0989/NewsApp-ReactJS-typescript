import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from '../CommonComponents/TextError'
import { ValidationOnSignUpForm } from './helper'
import { intialValues } from './type'
import { Navigate, useNavigate } from 'react-router-dom'
import * as utility from '../../common/utilityService'
import './SignupStyle.css'



const validationSchema = Yup.object({ ...ValidationOnSignUpForm })

const onSubmit = (values: any) => {
    console.log('Form Data', values)
}




export default function SignUp() {

    const navigate = useNavigate();

    if (utility.getLoginToken()) {
        return <Navigate to={'/'} />
    }

    const navigateToLogin = () => {
        navigate('/login')
    }


    return (
        <>
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
        </>
    )
}
