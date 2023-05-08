import React, { Component } from 'react'
import "./Login.css";
import { useFormik } from 'formik'
import * as Yup from 'yup'


const initialValues = {
    username: '',
    password: '',
    anything: ''
}

const onSubmit = (values: any) => {
    console.log('Form Data', values)
}

const validate = (values: any) => {

    let errors: any = {}

    if (!values.username) {
        errors.username = 'This field is required'
    }

    if (!values.password) {
        errors.password = 'This field is required'
    }
    //  else if (regex) {
    //     errors.password = 'Invalid format'
    // }

    if (!values.anything) {
        errors.anything = 'This field is required'
    }

    return errors;
}


const validationSchema = Yup.object({
    username: Yup.string().required('This field is required!'),
    // email: Yup.string().email('Invalid email').required('Required')
    password: Yup.string().required('This field is required!'),
    anything: Yup.string().required('This field is required!')
    // github.com/jquense/yup    || Readmefile for all the validations needed inbuilt
})

export default function LoginOld() {

    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate
        validationSchema
    })

    // console.log('Form Errors', formik.errors)
    // console.log('Form touched', formik.touched)

    return (
        <>
            <div className='container'>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-control">
                        <label htmlFor='username'>User Name</label>
                        <input
                            type='text'
                            id='username'
                            name='username'
                            onChange={formik.handleChange}
                            value={formik.values.username}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.username && formik.errors.username ? (<div className='error'>{formik.errors.username}</div>) : null}
                    </div>

                    <div className="form-control">
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password ? (<div className='error'>{formik.errors.password}</div>) : null}
                    </div>

                    <div className="form-control">
                        <label htmlFor='anything'>Anything</label>
                        <input
                            type='text'
                            id='anything'
                            name='anything'
                            onChange={formik.handleChange}
                            value={formik.values.anything}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.anything && formik.errors.anything ? (<div className='error'>{formik.errors.anything}</div>) : null}
                    </div>

                    <div className="button-class">
                        <button type='submit' className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
