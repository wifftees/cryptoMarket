import React, { StrictMode, Suspense } from 'react'
import { Provider } from 'react-redux'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import styles from './styles/app.module.scss'
import routes from './constants/routes'
import Navbar from './components/navbar/Navbar'
import { store } from './redux/store/store'
import Header from './components/header/Header'

export default function AppContainer() {
    return (
        <StrictMode>
            <Provider store={store}>
                <Suspense fallback={<CircularProgress />}>
                    <Router>
                        <Navbar />
                        <div className={styles.wrapper}>
                            <Header />
                            <Routes>
                                <Route
                                    path="*"
                                    element={<Navigate to="/profile" replace />}
                                />
                                {routes.map(({ path, Element }) => (
                                    <Route
                                        key={path}
                                        path={path}
                                        element={<Element />}
                                    /> // sensitive letter case
                                ))}
                            </Routes>
                        </div>
                    </Router>
                </Suspense>
            </Provider>
        </StrictMode>
    )
}
