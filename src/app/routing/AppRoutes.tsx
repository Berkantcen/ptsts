import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { PrivateRoutes } from './PrivateRoutes'

import { App } from '../App'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/*' element={<PrivateRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { AppRoutes }
