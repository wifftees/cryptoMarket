import './styles/app.module.scss'
import React, { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { CircularProgress } from '@mui/material'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom'
import routes from './constants/routes'
import Navbar from './components/navbar/Navbar'

function AppContainer() {
    return (
        <StrictMode>
            <Suspense fallback={<CircularProgress />}>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate to="/home" replace />}
                        />
                        <Route
                            path="/token"
                            element={
                                <Navigate to="/tokenslist/token" replace />
                            }
                        />
                        {routes.map(({ path, Element }) => (
                            <Route
                                key={path}
                                path={path}
                                element={<Element />}
                            /> // sensitive letter case
                        ))}
                    </Routes>
                </Router>
            </Suspense>
        </StrictMode>
    )
}

ReactDOM.render(<AppContainer />, document.getElementById('app-root'))
