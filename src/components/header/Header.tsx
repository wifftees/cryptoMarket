import React from 'react'
import styles from './header.module.scss'

type HeaderProps = {
    pageName: string
}

export default function Header({ pageName }: HeaderProps) {
    return (
        <header className={styles.header}>
            <h2>{pageName}</h2>
        </header>
    )
}
