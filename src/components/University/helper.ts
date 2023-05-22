import * as Yup from 'yup';




export const ValidationOnUniversityForm = {
    country : Yup.string().max(50).min(2)
}