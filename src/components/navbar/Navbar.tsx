import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'
import { currentUserExists } from '../../services/auth.service'
import { navbarRoutes } from '../../constants/navbar'

export default function Navbar() {
    const isUser = currentUserExists()
    return (
        <nav className={styles.navbar}>
            <div className={styles.title}>
                <Link to="/home" className={styles.title}>
                    <h1>Marketplace</h1>
                </Link>
            </div>
            <div className={styles.list}>
                <div className={styles.pages}>
                    {navbarRoutes.map(({ route, title, Icon }) => (
                        <div className={styles.item} key={title}>
                            <Link to={route}>
                                <div className={styles.icon}>
                                    <Icon className={styles.iconImage} />
                                </div>
                                <span>{title}</span>
                            </Link>
                        </div>
                    ))}
                </div>
                {!isUser && (
                    <div className={styles.auth}>
                        <Link to="/register">
                            <div className={styles.button}>Register</div>
                        </Link>
                        <Link to="/login">
                            <div className={styles.button}>Login</div>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    )
}
