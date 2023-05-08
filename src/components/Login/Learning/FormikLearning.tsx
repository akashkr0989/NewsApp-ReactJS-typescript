import React, { Component } from 'react'
// import '../../Login/Login.css'
import { Formik, Form, Field, ErrorMessage, FieldArray  } from 'formik'
import * as Yup from 'yup'
import TextError from '../../CommonComponents/TextError';


const initialValues = {
    username: '',
    password: '',
    anything: '',
    // address: ''
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbersArray: ['']

}

const onSubmit = (values: any) => {
    console.log('Form Data', values)
}


const validationSchema = Yup.object({
    username: Yup.string().required('This field is required!'),
    // email: Yup.string().email('Invalid email').required('Required')
    password: Yup.string().required('This field is required!'),
    anything: Yup.string().required('This field is required!'),
    // address: Yup.string().required('This field is required!')
    // github.com/jquense/yup    || Readmefile for all the validations needed inbuilt
})

export default function FormikLearning() {

    // const formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //     // validate
    //     validationSchema
    // })

    // console.log('Form Errors', formik.errors)
    // console.log('Form touched', formik.touched)

    return (
        <>
            <div className='container'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                    <Form>
                        <div className="form-control">
                            <label htmlFor='username'>User Name</label>
                            <Field
                                type='text'
                                id='username'
                                name='username' placeholder="username"
                            // {...formik.getFieldProps('username')}
                            />
                            <ErrorMessage name="username" component={TextError} />
                        </div>

                        <div className="form-control">
                            <label htmlFor='password'>Password</label>
                            <Field
                                type='password'
                                id='password'
                                name='password' placeholder="password"
                            // {...formik.getFieldProps('password')}
                            />
                            <ErrorMessage component={TextError} name="password" />
                        </div>

                        <div className="form-control">
                            <label htmlFor='anything'>Anything</label>
                            <Field
                                as='textarea'
                                id='anything'
                                name='anything'
                            // {...formik.getFieldProps('anything')}
                            />
                            <ErrorMessage component={TextError} name="anything" />
                        </div>

                        <div className="form-control">
                            <label htmlFor="facebook">Facebook Profile</label>
                            <Field type="text" id='facebook' name='social.facebook' />
                        </div>

                        <div className="form-control">
                            <label htmlFor="twitter">Twitter Profile</label>
                            <Field type="text" id='twitter' name='social.twitter' />
                        </div>

                        <div className="form-control">
                            <label htmlFor="primary">Primary Phone Numbers</label>
                            <Field type="number" id='primary' name='phoneNumbers[0]' />
                        </div>

                        <div className="form-control">
                            <label htmlFor="secondary">Primary Phone Numbers</label>
                            <Field type="number" id='secondary' name='phoneNumbers[1]' />
                        </div>

                        <div className="form-control">
                            <label htmlFor="phNumbersArray">List of Phone Numbers</label>
                            <FieldArray name="phNumbersArray" >
                                {
                                    fieldArrayProps => {
                                        console.log(fieldArrayProps)
                                        const { push, remove, form } = fieldArrayProps
                                        const { values } = form
                                        const { phNumbersArray } = values
                                        return (
                                            <div>
                                                {
                                                    phNumbersArray.map((phNumbersArray: [], index: number) =>
                                                        <div key={index}>
                                                            <Field name={`phNumbersArray[${index}]`} />
                                                            {
                                                                index > 0 &&
                                                                <button type='button' onClick={() => { remove(index) }}>-</button>
                                                            }
                                                            <button type='button' onClick={() => { push('') }}>+</button>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        )
                                    }
                                }
                            </FieldArray>
                        </div>


                        {/* <div className="form-control">
                            <label htmlFor='address'>Address</label>
                            <Field name="address">
                                {(props: any) => {
                                    const { field, form, meta } = props
                                    console.log('Render props', props);
                                    return (
                                        <div>
                                            <input type="text" id="address" {...field} />
                                            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                        </div>
                                    )
                                }}
                            </Field>
                        </div> */}

                        <div className="button-class">
                            <button type='submit' className="btn btn-primary">Submit</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    )
}
