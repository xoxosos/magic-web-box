import './App.less'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AuthProvider } from './context/auth/AuthProvider'
import ContentLayout from './layouts/content/ContentLayout'
import PrivateRoute from './pages/PrivateRoute'
import LoginView from './pages/login/LoginView'
import { ProductView } from './pages/products/ProductView'
import PageNotFound from './pages/PageNotFound'

export const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <ContentLayout />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<LoginView />}></Route>
          <Route path="/product" element={<ProductView />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}
