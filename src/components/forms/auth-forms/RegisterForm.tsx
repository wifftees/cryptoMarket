import React from 'react'
import { Formik, Form, Field } from 'formik'
import DialogWindow from '../../common/dialog-window/DialogWindow'
import { validateRegistrationForm } from '../../../helpers/validateForms'
import { useRegisterData } from '../../../hooks/authHooks/useRegister'
import styles from './authForm.module.scss'

export default function RegisterForm() {
    const { registerInitialValues, dialogData, submit, handleClose } =
        useRegisterData()
    return (
        <>
            <Formik
                initialValues={registerInitialValues}
                validationSchema={validateRegistrationForm}
                onSubmit={submit}
            >
                {(formik) => {
                    const { errors, touched, isValid, dirty } = formik
                    return (
                        <Form className={styles.form}>
                            <div className={styles.names}>
                                <div className={styles.wrapper}>
                                    <Field
                                        name="firstName"
                                        type="text"
                                        placeholder="First name"
                                        className={
                                            errors.firstName &&
                                            touched.firstName
                                                ? 'input-error'
                                                : ''
                                        }
                                    />
                                    {errors.firstName && touched.firstName && (
                                        <span>{errors.firstName}</span>
                                    )}
                                </div>
                                <div className={styles.wrapper}>
                                    <Field
                                        name="secondName"
                                        type="text"
                                        placeholder="Second name"
                                        className={
                                            errors.secondName &&
                                            touched.secondName
                                                ? 'errorInput'
                                                : ''
                                        }
                                    />
                                    {errors.secondName &&
                                        touched.secondName && (
                                            <span>{errors.secondName}</span>
                                        )}
                                </div>
                            </div>
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
                            <div className={styles.wrapper}>
                                <Field
                                    name="confirm"
                                    type="password"
                                    placeholder="Repeat password"
                                    className={
                                        errors.confirm && touched.confirm
                                            ? 'input-error'
                                            : ''
                                    }
                                />
                                {errors.confirm && touched.confirm && (
                                    <span>{errors.confirm}</span>
                                )}
                            </div>
                            <button
                                type="submit"
                                className={
                                    !(dirty && isValid) ? styles.disabled : ''
                                }
                                disabled={!(dirty && isValid)}
                            >
                                Register
                            </button>
                        </Form>
                    )
                }}
            </Formik>
            <DialogWindow dialogData={dialogData} handleClose={handleClose} />
        </>
    )
}
