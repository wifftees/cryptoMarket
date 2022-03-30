import webpackMockServer from 'webpack-mock-server'
import fs from 'fs'
import nodePath from 'path'
import cors from 'cors'
import { User } from './src/types/User'
import { Token, MarketToken, WatchlistToken } from './src/types/Token'
import { FilterFormOutput } from './src/constants/defaultFilterConfig'

type Watchlist = {
    user: string
    tokens: WatchlistToken[]
}

const allUsers: User[] = JSON.parse(
    fs.readFileSync(nodePath.join(__dirname, './data/users.json'), 'utf-8')
)
const allWatchlists: Watchlist[] = JSON.parse(
    fs.readFileSync(nodePath.join(__dirname, './data/watchlists.json'), 'utf-8')
)
const tokenList: Token[] = JSON.parse(
    fs.readFileSync(nodePath.join(__dirname, './data/tokens.json'), 'utf-8')
)

export default webpackMockServer.add((app, helper) => {
    app.use(cors())
    app.post('/register', (_req, res) => {
        try {
            const { email } = _req.body

            const user = allUsers.find((foundUser) => foundUser.email === email)

            if (user) {
                res.status(400).send({
                    message: 'This email had been already taken',
                })
            }
            allUsers.push(_req.body)
            res.status(200).send({
                message: 'User was successfully created',
            })
        } catch (error) {
            res.status(500).send({
                message: 'Server encountered with unexpected error',
            })
        }
    })

    app.post('/login', (_req, res) => {
        try {
            const { email, password } = _req.body

            const foundUser = allUsers.find((user) => user.email === email)

            if (!foundUser) {
                res.status(400).send({
                    message: 'Email or password are incorrect',
                })
            }

            if (foundUser?.password !== password) {
                res.status(400).send({
                    message: 'Email or password are incorrect',
                })
            }

            res.status(200).send({
                values: _req.body,
                message: 'You have successfully loged in',
            })
        } catch (error) {
            res.status(500).send({
                message: 'Server encountered with unexpected error',
            })
        }
    })

    app.get('/get-user-data', (_req, res) => {
        const { currentUser } = _req.query
        const foundUser = allUsers.find((user) => user.email === currentUser)

        if (!foundUser) {
            res.status(404).send({
                message: 'User not found',
            })
        } else {
            res.send(foundUser)
        }
    })

    app.post('/update-user-description', (_req, res) => {
        const { currentUser } = _req.query
        const description = _req.body

        const foundUser = allUsers.find((user) => user.email === currentUser)

        if (!foundUser) {
            res.status(404).send({
                message: 'User not found',
            })
        } else {
            foundUser.description = description
            res.send(foundUser.description)
        }
    })

    app.get('/get-user-watchlist', (_req, res) => {
        const { currentUser } = _req.query
        const foundWatchlist = allWatchlists.find(
            (watchlist) => watchlist.user === currentUser
        )

        if (!foundWatchlist) {
            res.status(404).send({
                message: 'Watchlist not found',
            })
        } else {
            res.status(200).send(foundWatchlist.tokens)
        }
    })

    app.get('/get-watchlist-token', (_req, res) => {
        const { currentUser, name } = _req.query
        const foundWatchlist = allWatchlists.find(
            (watchlist) => watchlist.user === currentUser
        )
        if (!foundWatchlist) {
            res.status(404).send({
                message: 'Watchlist not found',
            })
        }

        const foundToken = foundWatchlist?.tokens.find(
            (token) => token.name === name
        )
        if (foundToken) {
            res.status(200).send(foundToken)
        } else {
            res.status(200).send(null)
        }
    })

    app.post('/remove-watchlist-token', (_req, res) => {
        const { currentUser } = _req.query
        const { id } = _req.body

        const foundWatchlist = allWatchlists.find(
            (watchlist) => watchlist.user === currentUser
        )

        if (!foundWatchlist) {
            res.status(404).send({
                message: 'Watchlist not found',
            })
        } else {
            foundWatchlist.tokens = foundWatchlist.tokens.filter(
                (token) => token.id !== id
            )
            res.status(200).send(id)
        }
    })

    app.post('/add-watchlist-token', (_req, res) => {
        const { currentUser } = _req.query
        const { id } = _req.body

        const foundWatchlist = allWatchlists.find(
            (watchlist) => watchlist.user === currentUser
        )
        const foundToken = tokenList.find((token) => token.id === id)

        if (!foundWatchlist) {
            res.status(404).send({
                message: 'Watchlist not found',
            })
        } else if (!foundToken) {
            res.status(404).send({
                message: 'Token not found',
            })
        } else {
            foundWatchlist.tokens.push(foundToken)
            res.status(200).send(id)
        }
    })

    app.get('/get-market-list', (_req, res) => {
        const { searchTerm, tagTerm, filterTerm } = _req.query

        let result: MarketToken[] = tokenList
        if (searchTerm) {
            const regEx = new RegExp(`^${searchTerm.toLocaleString()}`)
            result = result.filter((token) =>
                token.name.toLocaleLowerCase().match(regEx)
            )
        }
        if (tagTerm) {
            switch (tagTerm) {
                case 'new':
                    result = result.filter(({ tags }) => tags.new)
                    break
                case 'hot':
                    result = result.filter(({ tags }) => tags.hot)
                    break
                case 'popular':
                    result = result.filter(({ tags }) => tags.popular)
                    break
                default:
                    break
            }
        }

        if (filterTerm) {
            const filterTermObject: FilterFormOutput = JSON.parse(
                filterTerm as string
            )
            result = result.filter(({ currentPrice, volume, tradable }) => {
                return (
                    currentPrice >= filterTermObject.price.from &&
                    currentPrice < filterTermObject.price.to &&
                    volume >= filterTermObject.volume.from &&
                    volume < filterTermObject.volume.to &&
                    tradable === filterTermObject.tradable
                )
            })
        }
        res.status(200).send(result)
    })

    app.get('/get-token', (_req, res) => {
        const { name } = _req.query

        const foundToken = tokenList.find((token) => token.name === name)
        if (!foundToken) {
            res.status(404).send('Token not found')
        }

        res.status(200).send(foundToken)
    })
})
