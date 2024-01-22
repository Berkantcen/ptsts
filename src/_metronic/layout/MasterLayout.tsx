import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { HeaderWrapper } from './components/header'
import { ScrollTop } from './components/scroll-top'
import { Content } from './components/content'
import { FooterWrapper } from './components/footer'
import { Sidebar } from './components/sidebar'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { PageDataProvider } from './core'
import { reInitMenu } from '../helpers'

const MasterLayout = () => {
  const location = useLocation()
  useEffect(() => {
    reInitMenu()
  }, [location.key])

  return (
    <PageDataProvider>
      <div className='d-flex flex-column flex-root app-root' id='kt_app_root'>
        <ToastContainer autoClose={3000} hideProgressBar={true} newestOnTop={true} />
        <div className='app-page flex-column flex-column-fluid' id='kt_app_page'>
          <HeaderWrapper />
          <div
            className='app-wrapper flex-column flex-row-fluid'
            id='kt_app_wrapper'
            style={{
              marginLeft: !location.pathname.includes('onboarding') ? '' : '0',
              marginTop: !location.pathname.includes('onboarding') ? '' : '80px',
              transition: 'none',
            }}
          >
            <Sidebar />
            <div className='app-main flex-column flex-row-fluid' id='kt_app_main'>
              <div className='d-flex flex-column flex-column-fluid'>
                <Content>
                  {/* Tabs */}

                  <Outlet />
                </Content>
              </div>
              <FooterWrapper />
            </div>
          </div>
        </div>
      </div>

      <ScrollTop />
    </PageDataProvider>
  )
}

export { MasterLayout }
