import './App.less'

import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/auth/AuthProvider'
import LoginView from './pages/login/LoginView'
import { HomeView } from './pages/HomeView'
import PrivateRoute from './pages/PrivateRoute'
import PageNotFound from './pages/PageNotFound'
import { GlobalProvider } from './context/global/GlobalProvider'

export const App = () => {
  return (
    <Router>
      <AuthProvider>
        <GlobalProvider>
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/login" element={<LoginView />} />
            <Route
              path="/home/*"
              element={
                <PrivateRoute>
                  <HomeView />
                </PrivateRoute>
              }
            />
          </Routes>
        </GlobalProvider>
      </AuthProvider>
    </Router>
  )
}
