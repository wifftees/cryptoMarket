import React, { useEffect, useState } from 'react'
import { useDebounce } from '../../../hooks/useDeferredValue'
import styles from './searchBox.module.scss'

type SearchBoxProps = {
    setSearchTerm: (value: string) => void
}

export default function SearchBox({ setSearchTerm }: SearchBoxProps) {
    const [searchValue, setSearchValue] = useState<string>('')
    const debouncedSearchTerm = useDebounce(searchValue, 500)

    useEffect(() => {
        setSearchTerm(debouncedSearchTerm)
    }, [debouncedSearchTerm])
    return (
        <input
            className={styles.input}
            placeholder="Search"
            onChange={(event) => setSearchValue(event.target.value)}
        />
    )
}
