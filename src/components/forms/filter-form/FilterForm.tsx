import React, { useState } from 'react'
import {
    FormControlLabel,
    FormGroup,
    Radio,
    RadioGroup,
    TextField,
} from '@mui/material'
import styles from './filterForm.module.scss'
import { FilterFormOutput } from '../../../constants/defaultFilterConfig'
import Button from '../../common/button/Button'

type FilterFormProps = {
    setFilterTerm: (value: FilterFormOutput) => void
}

export default function FilterForm({ setFilterTerm }: FilterFormProps) {
    const [fromPrice, setFromPrice] = useState<number>(0)
    const [toPrice, setToPrice] = useState<number>(10000)
    const [fromVolume, setFromVolume] = useState<number>(0)
    const [toVolume, setToVolume] = useState<number>(10000000)
    const [isTradable, setTradable] = useState(true)

    const handleClick = () => {
        setFilterTerm({
            price: { from: fromPrice, to: toPrice },
            volume: { from: fromVolume, to: toVolume },
            tradable: isTradable,
        })
    }
    return (
        <div className={styles.filters}>
            <div className={styles.title}>Filters</div>
            <div className={styles.fieldsContainer}>
                <div className={styles.field}>
                    <h2>Price (USD)</h2>
                    <div className={styles.numberFields}>
                        <TextField
                            defaultValue={fromPrice}
                            id="outlined-number"
                            label="From"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) =>
                                setFromPrice(Number(event.target.value))
                            }
                        />
                        <TextField
                            defaultValue={toPrice}
                            id="outlined-number"
                            label="To"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) =>
                                setToPrice(Number(event.target.value))
                            }
                        />
                    </div>
                </div>
                <div className={styles.field}>
                    <h2>Volume (USD)</h2>
                    <div className={styles.numberFields}>
                        <TextField
                            defaultValue={fromVolume}
                            id="outlined-number"
                            label="From"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) =>
                                setFromVolume(Number(event.target.value))
                            }
                        />
                        <TextField
                            defaultValue={toVolume}
                            id="outlined-number"
                            label="To"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event) =>
                                setToVolume(Number(event.target.value))
                            }
                        />
                    </div>
                </div>
                <div className={styles.field}>
                    <h2>Tradable</h2>
                    <div className={styles.radio}>
                        <FormGroup>
                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="yes"
                                name="radio-buttons-group"
                                onChange={(event) =>
                                    setTradable(event.target.value === 'yes')
                                }
                            >
                                <FormControlLabel
                                    value="yes"
                                    control={<Radio />}
                                    label="Yes"
                                />
                                <FormControlLabel
                                    value="no"
                                    control={<Radio />}
                                    label="No"
                                />
                            </RadioGroup>
                        </FormGroup>
                    </div>
                </div>
            </div>
            <div className={styles.button} onClick={handleClick}>
                <Button text="Apply" disabled={false} />
            </div>
        </div>
    )
}
