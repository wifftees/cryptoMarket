import React from 'react'
import { Formik, Form, Field } from 'formik'
import styles from './authForm.module.scss'
import { validateLoginForm } from '../../../helpers/validateForms'
import DialogWindow from '../../dialog-window/DialogWindow'
import { useLoginData } from '../../../hooks/authHooks/useLogin'

export default function LoginForm() {
    const { loginInitialValues, dialogData, submit, handleClose } =
        useLoginData()
    return (
        <>
            <Formik
                initialValues={loginInitialValues}
                validationSchema={validateLoginForm}
                onSubmit={submit}
            >
                {(formik) => {
                    const { errors, touched, isValid, dirty } = formik
                    return (
                        <Form className={styles.form}>
                            <div className={styles.wrapper}>
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    className={
                                        errors.email && touched.email
                                            ? 'input-error'
                                            : ''
                                    }
                                />
                                {errors.email && touched.email && (
                                    <span>{errors.email}</span>
                                )}
                            </div>
                            <div className={styles.wrapper}>
                                <Field
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    className={
                                        errors.password && touched.password
                                            ? 'input-error'
                                            : ''
                                    }
                                />
                                {errors.password && touched.password && (
                                    <span>{errors.password}</span>
                                )}
                            </div>
                            <button
                                type="submit"
                                className={
                                    !(dirty && isValid) ? styles.disabled : ''
                                }
                                disabled={!(dirty && isValid)}
                            >
                                Login
                            </button>
                        </Form>
                    )
                }}
            </Formik>
            <DialogWindow dialogData={dialogData} handleClose={handleClose} />
        </>
    )
}
