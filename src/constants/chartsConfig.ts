export const options = {
    maintainAspectRatio: false,
    scales: {
        yAxes: {
            ticks: {
                display: false,
            },
        },
        xAxes: {
            ticks: {
                display: false,
            },
        },
    },
    plugins: {
        tooltip: {
            titleFont: {
                size: 16,
                family: 'Roboto',
                weight: 'bold',
            },
            bodyFont: {
                size: 16,
                family: 'Roboto',
                weight: 'normal',
            },
            bodyAlign: 'center' as const,
            displayColors: false,
        },
        legend: {
            display: false,
        },
    },
}

export const availableChartSet = [
    {
        value: '24h',
        text: '24 hours',
    },
    {
        value: '7d',
        text: '7 days',
    },
    {
        value: '1m',
        text: '1 month',
    },
]
