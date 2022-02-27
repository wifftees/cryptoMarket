import { lazy } from 'react'
import Home from '../pages/home/Home'

const Profile = lazy(() => import('../pages/profile/Profile'))
const TokensList = lazy(() => import('../pages/tokensList/TokensList'))
const Token = lazy(() => import('../pages/token/Token'))

const routes = [
    {
        path: '/home',
        Element: Home,
    },
    {
        path: '/profile',
        Element: Profile,
    },
    {
        path: '/tokenslist',
        Element: TokensList,
    },
    {
        path: '/tokenslist/token',
        Element: Token,
    },
]

export default routes
