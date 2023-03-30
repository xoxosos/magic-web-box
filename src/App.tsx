import './App.less'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HomeView } from './pages/HomeView'
import LoginView from './pages/login/LoginView'
import PrivateRoute from './pages/PrivateRoute'
import PageNotFound from './pages/PageNotFound'

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomeView />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginView />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}
