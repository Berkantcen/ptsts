import { Route, Routes, Navigate, useLocation } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import GlobalLoading from 'app/components/GlobalLoading/GlobalLoading'

// Layout
import { MasterLayout } from '../../_metronic/layout/MasterLayout'
// Context
import AppLevelContext from 'app/context/AppLevelContext'

//Components
import Login from 'app/pages/Login/Login'
import AdminDashboard from 'app/pages/AdminDashboard/AdminDashboard'
import UserDashboard from 'app/pages/UserDashboard/UserDashboard'

const PrivateRoutes = () => {
  const { globalLoading, currentPage, userInfo } = useContext(AppLevelContext)
  const location = useLocation()

  useEffect(() => {
    document.title = currentPage
  }, [currentPage])

  if (globalLoading) {
    return <GlobalLoading />
  }

  return (
    <Routes>
      {userInfo ? (
        <>
          <Route element={<MasterLayout />}>
            <Route path='/' element={<Navigate to='/dashboard' />} />
            <Route path='/admin' element={<AdminDashboard />} />
            <Route path='/dashboard' element={<UserDashboard />} />
            <Route path='*' element={<Navigate to='/dashboard' />} />
          </Route>
        </>
      ) : (
        <>
          <Route path='*' element={<Navigate to='/login' />} />
          <Route path='/login' element={<Login />} />
        </>
      )}
    </Routes>
  )
}

export { PrivateRoutes }
