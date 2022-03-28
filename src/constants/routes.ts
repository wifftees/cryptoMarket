import { lazy } from 'react'

const Profile = lazy(() => import('../pages/profile/Profile'))
const TokenList = lazy(() => import('../pages/market/Market'))
const Token = lazy(() => import('../pages/token/Token'))
const Register = lazy(() => import('../pages/register/Register'))
const Login = lazy(() => import('../pages/login/Login'))
const ErrorPage = lazy(() => import('../pages/error/Error'))

const routes = [
    {
        path: '/profile',
        Element: Profile,
    },
    {
        path: '/market/:token',
        Element: Token,
    },
    {
        path: '/market',
        Element: TokenList,
    },
    {
        path: '/login',
        Element: Login,
    },
    {
        path: '/register',
        Element: Register,
    },
    {
        path: '/error',
        Element: ErrorPage,
    },
]

export default routes
