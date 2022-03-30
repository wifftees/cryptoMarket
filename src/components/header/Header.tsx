import React from 'react'
import { useLocation } from 'react-router-dom'
import {
    capitalizeFirstLetter,
    reverseString,
} from '../../helpers/stringHelpers'
import styles from './header.module.scss'

export default function Header() {
    const location = useLocation()
    const regEx = /^[^/]*/
    const reversedPath = reverseString(location.pathname)
    const revesedPagenName = String(reversedPath.match(regEx))
    const pageName = capitalizeFirstLetter(reverseString(revesedPagenName))
    return (
        <header className={styles.header}>
            <h2>{pageName}</h2>
        </header>
    )
}
