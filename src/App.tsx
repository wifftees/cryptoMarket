import './styles/app.module.scss'
import React, { StrictMode, Suspense } from 'react'
import { Provider } from 'react-redux'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import Spinner from './components/spinner/Spinner'
import routes from './constants/routes'
import Navbar from './components/navbar/Navbar'
import { store, persistor } from './redux/store/store'

export default function AppContainer() {
    return (
        <StrictMode>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Suspense fallback={<Spinner />}>
                        <Router>
                            <Navbar />
                            <Routes>
                                <Route
                                    path="/"
                                    element={<Navigate to="/profile" replace />}
                                />
                                <Route
                                    path="/token"
                                    element={
                                        <Navigate
                                            to="/tokenslist/token"
                                            replace
                                        />
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
                </PersistGate>
            </Provider>
        </StrictMode>
    )
}
