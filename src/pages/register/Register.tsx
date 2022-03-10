import React from 'react'
import styles from './profile.module.scss'
import Header from '../../components/header/Header'
import RegisterForm from '../../components/forms/auth-forms/RegisterForm'

export default function Register() {
    return (
        <div className={styles.register}>
            <Header pageName="Register" />
            <div className={styles.content}>
                <div className={styles.container}>
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}
