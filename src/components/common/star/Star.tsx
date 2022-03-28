import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import styles from './star.module.scss'

type StarProps = {
    handleClick: () => void
    enabled: boolean
}

export default function Star({ handleClick, enabled }: StarProps) {
    return (
        <BsFillStarFill
            className={enabled ? styles.starEnabled : styles.starDisabled}
            onClick={(event) => {
                event.stopPropagation()
                handleClick()
            }}
        />
    )
}
