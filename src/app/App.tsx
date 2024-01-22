import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { I18nProvider } from '../_metronic/i18n/i18nProvider'
import { LayoutProvider, LayoutSplashScreen } from '../_metronic/layout/core'
import { MasterInit } from '../_metronic/layout/MasterInit'
import { ThemeModeProvider } from '../_metronic/partials'
import { AppLevelContextProvider } from './context/AppLevelContext'

const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <AppLevelContextProvider>
        <I18nProvider>
          <LayoutProvider>
            <ThemeModeProvider>
              <Outlet />
              <MasterInit />
            </ThemeModeProvider>
          </LayoutProvider>
        </I18nProvider>
      </AppLevelContextProvider>
    </Suspense>
  )
}

export { App }
