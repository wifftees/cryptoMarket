import React from 'react'
import styles from './button.module.scss'

type ButtonProps = {
    text: string
    disabled: boolean
}

export default function Button({ text, disabled }: ButtonProps) {
    return (
        <div className={disabled ? styles.buttonDisabled : styles.button}>
            {text}
        </div>
    )
}
