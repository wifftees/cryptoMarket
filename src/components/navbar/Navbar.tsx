import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { HiCollection } from 'react-icons/hi'
import { GiToken } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'
import { useAppSelector } from '../../hooks/redux'
import getUser from '../../redux/selectors/authSelectors'

export default function Navbar() {
    const { user } = useAppSelector(getUser)
    return (
        <nav className={styles.navbar}>
            <Link to="/home" className={styles.title}>
                <h1>Marketplace</h1>
            </Link>
            <div className={styles.list}>
                <div className={styles.pages}>
                    <div className={styles.item}>
                        <Link to="/profile">
                            <div className={styles.icon}>
                                <AiOutlineUser className={styles.iconImage} />
                            </div>
                            <span>Profile</span>
                        </Link>
                    </div>
                    <div className={styles.item}>
                        <Link to="/collections">
                            <div className={styles.icon}>
                                <HiCollection className={styles.iconImage} />
                            </div>
                            <span>Collections</span>
                        </Link>
                    </div>
                    <div className={styles.item}>
                        <Link to="/tokenslist">
                            <div className={styles.icon}>
                                <GiToken className={styles.iconImage} />
                            </div>
                            <span>Tokens</span>
                        </Link>
                    </div>
                </div>
                {user ? (
                    <div>Setting</div>
                ) : (
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
