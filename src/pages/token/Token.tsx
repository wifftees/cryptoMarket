import React, { useState } from 'react'
import { Chart as ChartJS, registerables } from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useNavigate, useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import { skipToken } from '@reduxjs/toolkit/dist/query'
import { useFetchTokenQuery } from '../../api/tokenApi'
import Star from '../../components/common/star/Star'
import styles from './token.module.scss'
import { availableChartSet, options } from '../../constants/chartsConfig'
import { capitalizeFirstLetter } from '../../helpers/stringHelpers'
import { useFetchWatchlistTokenQuery } from '../../api/watchlistApi'
import { useToggleWatchlistEntry } from '../../hooks/useToggleWatchlistEntry'
import Dropdown from '../../components/common/dropdown/Dropdown'
import { currentUserExists } from '../../services/auth.service'

export default function Token() {
    const history = useNavigate()
    const isUser = currentUserExists()
    const [dropdownValue, setDropdownValue] = useState<string>('24h')
    const { token } = useParams()
    const {
        data: tokenData,
        isLoading,
        error,
    } = useFetchTokenQuery(token || skipToken)
    const fetchWatchlistData = token && isUser ? token : skipToken
    const { data: watchlistToken, isLoading: watchlistLoading } =
        useFetchWatchlistTokenQuery(fetchWatchlistData)
    const { handleToggling, isEnabled } = useToggleWatchlistEntry(
        tokenData?.id,
        Boolean(watchlistToken)
    )
    if (!token) {
        history('/error')
    }
    if (isLoading || watchlistLoading) {
        return <CircularProgress />
    }
    if (error || !tokenData) {
        return <h1>Sorry we can not load data from a server</h1>
    }
    ChartJS.register(...registerables)
    const {
        name,
        nameSymbol,
        tradable,
        dayPrice,
        weekPrice,
        monthPrice,
        marketCap,
        volume,
        change,
    } = tokenData
    const dayData = dayPrice.map(({ price }) => price)
    const weekData = weekPrice.map(({ price }) => price)
    const monthData = monthPrice.map(({ price }) => price)
    const dayLabels = dayPrice.map(({ timestamp }) => timestamp)
    const weekLabels = weekPrice.map(({ timestamp }) => timestamp)
    const monthLables = monthPrice.map(({ timestamp }) => timestamp)

    const renderSwitchCharts = () => {
        switch (dropdownValue) {
            case '24h':
                return (
                    <Line
                        data={{
                            labels: dayLabels,
                            datasets: [
                                {
                                    data: dayData,
                                    fill: false,
                                    borderColor: 'rgb(75, 192, 192)',
                                    tension: 0,
                                },
                            ],
                        }}
                        options={options}
                    />
                )
            case '7d':
                return (
                    <Line
                        data={{
                            labels: weekLabels,
                            datasets: [
                                {
                                    data: weekData,
                                    fill: false,
                                    borderColor: 'rgb(75, 192, 192)',
                                    tension: 0,
                                },
                            ],
                        }}
                        options={options}
                    />
                )
            case '1m':
                return (
                    <Line
                        data={{
                            labels: monthLables,
                            datasets: [
                                {
                                    data: monthData,
                                    fill: false,
                                    borderColor: 'rgb(75, 192, 192)',
                                    tension: 0,
                                },
                            ],
                        }}
                        options={options}
                    />
                )
            default:
                return null
        }
    }
    return (
        <div className={styles.content}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.mainInfo}>
                        <div className={styles.avatar} />
                        <div className={styles.mainInfoText}>
                            <div className={styles.tokenNames}>
                                <h2>{capitalizeFirstLetter(name)}</h2>
                                <div className={styles.nameSymbol}>
                                    {nameSymbol.toLocaleUpperCase()}
                                </div>
                            </div>
                            <span className={styles.tokenStatus}>
                                {tradable ? 'Tradable' : 'Not tradable'}
                            </span>
                        </div>
                    </div>
                    {watchlistToken !== undefined ? (
                        <div className={styles.button}>
                            {isEnabled ? (
                                <>
                                    <Star
                                        handleClick={handleToggling}
                                        enabled
                                    />
                                    <span>Watchlist</span>
                                </>
                            ) : (
                                <>
                                    <Star
                                        handleClick={handleToggling}
                                        enabled={false}
                                    />
                                    <span>Add in watchList</span>
                                </>
                            )}
                        </div>
                    ) : null}
                </div>
                <div className={styles.dropdown}>
                    <Dropdown
                        setValue={setDropdownValue}
                        items={availableChartSet}
                        defaultValue="24h"
                    />
                </div>
                <div className={styles.chart}>{renderSwitchCharts()}</div>
                <h2 className={styles.statsTitle}>Market stats</h2>
                <div className={styles.stats}>
                    <div>Market cap</div>
                    <div>Volume</div>
                    <div>Change</div>
                    <div>{`${marketCap} USD`}</div>
                    <div>{`${change} %`}</div>
                    <div>{`${volume} USD`}</div>
                </div>
            </div>
        </div>
    )
}
