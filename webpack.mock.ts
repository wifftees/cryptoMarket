import webpackMockServer from 'webpack-mock-server'
import fs from 'fs'
import nodePath from 'path'
import cors from 'cors'
import { User } from './src/types/User'

const allUsers: User[] = JSON.parse(
    fs.readFileSync(nodePath.join(__dirname, './data/users.json'), 'utf-8')
)

export default webpackMockServer.add((app, helper) => {
    app.use(cors())
    app.post('/register', (_req, res) => {
        try {
            const { email } = _req.body

            const user = allUsers.find((foundUser) => foundUser.email === email)

            if (user) {
                res.status(400).send({
                    error: true,
                    message: 'This email had been already taken',
                })
            }
            allUsers.push(_req.body)
            res.status(200).send({
                error: false,
                message: 'User was successfully created',
            })
        } catch (error) {
            res.status(500).send({
                error: true,
                message: 'Server encountered with unexpected error',
            })
        }
    })

    app.post('/login', (_req, res) => {
        try {
            const { email, password } = _req.body

            const user = allUsers.find((foundUser) => foundUser.email === email)
            console.log(user)

            if (!user) {
                res.status(400).send({
                    error: true,
                    message: 'Email or password are incorrect',
                })
            }

            if (user?.password !== password) {
                res.status(400).send({
                    error: true,
                    message: 'Email or password are incorrect',
                })
            }

            res.status(200).send({
                error: false,
                message: 'You have successfully loged in',
            })
        } catch (error) {
            res.status(500).send({
                error: true,
                message: 'Server encountered with unexpected error',
            })
        }
    })
})
