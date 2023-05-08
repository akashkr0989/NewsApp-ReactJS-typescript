import * as Yup from 'yup'
import { ERROR_MESSAGES } from '../../common/constants'


export const ValidationOnSignUpForm = {
    firstName: Yup.string().required(ERROR_MESSAGES.required),
    lastName: Yup.string().required(ERROR_MESSAGES.required),
    emailId: Yup.string().email(ERROR_MESSAGES.InavlidEmail).required(ERROR_MESSAGES.required),
    gender: Yup.string().required(ERROR_MESSAGES.required),
    password: Yup.string().required(ERROR_MESSAGES.required),
    confirmPassword: Yup.string().required(ERROR_MESSAGES.required)


}