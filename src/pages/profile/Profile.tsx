import React from 'react'
import styles from './profile.module.scss'
import Header from '../../components/header/Header'

export default function Profile() {
    return (
        <div className={styles.profile}>
            <Header pageName="Profile" />
            <div className={styles.content}>
                <div className={styles.container} />
            </div>
        </div>
    )
}
