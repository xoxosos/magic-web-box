import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { AuthProvider } from './context/auth/AuthProvider'
import { GlobalProvider } from './context/global/GlobalProvider'
import { HomeView } from './pages/HomeView'
import PageNotFound from './pages/PageNotFound'
import PrivateRoute from './pages/PrivateRoute'
import LoginView from './pages/login/LoginView'

export const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/login" element={<LoginView />} />
          <Route
            path="/home/*"
            element={
              <PrivateRoute>
                <GlobalProvider>
                  <HomeView />
                </GlobalProvider>
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  )
}
