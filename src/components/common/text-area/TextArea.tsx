import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { OutlinedInput } from '@mui/material'

type TextAreaProps = {
    placeholder: string
    setValue: Dispatch<SetStateAction<string>>
}

export default function TextArea({ placeholder, setValue }: TextAreaProps) {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
        setValue(event.target.value)
    return (
        <OutlinedInput
            placeholder={placeholder}
            multiline
            onChange={handleChange}
        />
    )
}
