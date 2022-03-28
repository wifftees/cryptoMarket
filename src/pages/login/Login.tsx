import React from 'react'
import styles from './login.module.scss'
import LoginForm from '../../components/forms/auth-forms/LoginForm'

export default function Login() {
    return (
        <div className={styles.login}>
            <div className={styles.content}>
                <div className={styles.container}>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}
