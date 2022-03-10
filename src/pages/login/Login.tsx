import React from 'react'
import styles from './login.module.scss'
import Header from '../../components/header/Header'
import LoginForm from '../../components/forms/auth-forms/LoginForm'

export default function Login() {
    return (
        <div className={styles.login}>
            <Header pageName="Login" />
            <div className={styles.content}>
                <div className={styles.container}>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}
