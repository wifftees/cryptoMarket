import { lazy } from 'react'

const Profile = lazy(() => import('../pages/profile/Profile'))
const TokensList = lazy(() => import('../pages/tokensList/TokensList'))
const Token = lazy(() => import('../pages/token/Token'))
const Register = lazy(() => import('../pages/register/Register'))
const Login = lazy(() => import('../pages/login/Login'))

const routes = [
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
    {
        path: '/login',
        Element: Login,
    },
    {
        path: '/register',
        Element: Register,
    },
]

export default routes
