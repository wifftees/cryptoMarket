import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { HiCollection } from 'react-icons/hi'
import { GiToken } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link to="/home" className={styles.title}>
                <h1>Marketplace</h1>
            </Link>
            <ul>
                <li>
                    <Link to="/profile">
                        <div className={styles.icon}>
                            <AiOutlineUser className={styles.iconImage} />
                        </div>
                        <span>Profile</span>
                    </Link>
                </li>
                <li>
                    <Link to="/collections">
                        <div className={styles.icon}>
                            <HiCollection className={styles.iconImage} />
                        </div>
                        <span>Collections</span>
                    </Link>
                </li>
                <li>
                    <Link to="/tokenslist">
                        <div className={styles.icon}>
                            <GiToken className={styles.iconImage} />
                        </div>
                        <span>Tokens</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
