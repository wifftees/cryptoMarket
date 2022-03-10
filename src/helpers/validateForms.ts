import { object, string, ref } from 'yup'

export const validateLoginForm = object().shape({
    email: string().email('Invalid email').required('This field is required'),
    password: string().required('This field is required'),
})

export const validateRegistrationForm = object().shape({
    firstName: string()
        .min(2, 'Must be at least 2 characters long')
        .max(50, 'Must be less than 50 characters long')
        .required('This field is required'),
    secondName: string()
        .min(2, 'Must be at least 2 characters long')
        .max(50, 'Must be less than 50 characters long')
        .required('This field is required'),
    email: string().email('Invalid email').required('This field is required'),
    password: string()
        .min(6, 'Must be at least 6 characters long')
        .required('This field is required')
        .matches(
            /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/,
            'The password must contain letters and numbers'
        ),
    confirm: string()
        .required('This field is required')
        .oneOf([ref('password'), null], 'Passwords must be the same'),
})
