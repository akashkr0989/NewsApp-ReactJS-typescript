import * as Yup from 'yup'
import { ERROR_MESSAGES } from '../../common/constants'


export const ValidationOnSignInForm = {
    emailId: Yup.string().email(ERROR_MESSAGES.InavlidEmail).required(ERROR_MESSAGES.required),
    password: Yup.string().required(ERROR_MESSAGES.required),
}