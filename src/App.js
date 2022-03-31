import React from 'react';
import './App.scss';

import { Navbar} from './components';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import {
    DashboardPage,
    TablesPage,
    BillingPage,
    NotificationsPage,
    ProfilePage,
    SignInPage,
    SignUpPage
} from './pages';

function App() {
    return (
        <React.Fragment>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<DashboardPage />} />
                    <Route path='/tables' element={<TablesPage />} />
                    <Route path='/billing' element={<BillingPage />} />
                    <Route path='/notifications' element={<NotificationsPage />} />
                    <Route path='/profile' element={<ProfilePage />} />
                    <Route path='/signin' element={<SignInPage />} />
                    <Route path='/signup' element={<SignUpPage />} />
                </Routes>
            </Router>
        </React.Fragment>
    )
}

export default App