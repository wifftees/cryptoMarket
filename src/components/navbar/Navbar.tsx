import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { getUser } from '../../redux/selectors/userSelectors'
import { currentUserExists } from '../../services/auth.service'
import userSlice from '../../redux/reducers/userReducer'
import { navbarRoutes } from '../../constants/navbar'

export default function Navbar() {
    const { isUser } = useAppSelector(getUser)
    const { signInUserInLocalStorage } = userSlice.actions

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (currentUserExists()) {
            dispatch(signInUserInLocalStorage())
        }
    }, [])
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
                {isUser ? null : (
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
