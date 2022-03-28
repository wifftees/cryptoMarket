import React from 'react'
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import styles from './dropdown.module.scss'

type MenuItemProps = {
    value: string
    text: string
}

type DropdownProps = {
    items: MenuItemProps[]
    setValue: (value: string) => void
    defaultValue: string
}

export default function Dropdown({
    items,
    setValue,
    defaultValue,
}: DropdownProps) {
    const handleChange = (event: SelectChangeEvent) =>
        setValue(event.target.value)
    return (
        <FormControl className={styles.formControl}>
            <Select onChange={handleChange} defaultValue={defaultValue}>
                {items.map(({ value, text }) => (
                    <MenuItem key={text} value={value}>
                        {text}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
