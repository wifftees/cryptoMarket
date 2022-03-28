import React, { useEffect, useState } from 'react'
import { AiOutlineFieldTime, AiFillFire } from 'react-icons/ai'
import { GiPartyPopper } from 'react-icons/gi'
import styles from './tags.module.scss'

type TagsProps = {
    setFilterTerm: (tagName: string) => void
}

export default function Tags({ setFilterTerm }: TagsProps) {
    const [filter, setFilter] = useState<string>('')

    const handleTag = (tagName: string) => () =>
        setFilter((prevValue) => (prevValue === tagName ? '' : tagName))

    useEffect(() => setFilterTerm(filter), [filter])
    return (
        <div className={styles.tags}>
            <div
                className={`${styles.tag} ${
                    filter === 'new' ? styles.active : undefined
                }`}
                onClick={handleTag('new')}
            >
                <AiOutlineFieldTime className={styles.icon} />
                New
            </div>
            <div
                className={`${styles.tag} ${
                    filter === 'hot' ? styles.active : undefined
                }`}
                onClick={handleTag('hot')}
            >
                <AiFillFire className={styles.icon} />
                Hot
            </div>
            <div
                className={`${styles.tag} ${
                    filter === 'popular' ? styles.active : undefined
                }`}
                onClick={handleTag('popular')}
            >
                <GiPartyPopper className={styles.icon} />
                Popular
            </div>
        </div>
    )
}
