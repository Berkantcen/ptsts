import { createRoot } from 'react-dom/client'
import { store } from 'app/store'
import { Provider } from 'react-redux'
import { Chart, registerables } from 'chart.js'
import ReactGA from 'react-ga4'

// Apps
import './_metronic/assets/fonticon/fonticon.css'
import './_metronic/assets/keenicons/duotone/style.css'
import './_metronic/assets/keenicons/outline/style.css'
import './_metronic/assets/keenicons/solid/style.css'
/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './_metronic/assets/css/style.rtl.css'
 **/
import './_metronic/assets/sass/style.scss'
import './_metronic/assets/sass/plugins.scss'
import './_metronic/assets/sass/style.react.scss'
import { AppRoutes } from './app/routing/AppRoutes'

Chart.register(...registerables)

ReactGA.initialize('GTM-NFCSRHB', {
  gtagUrl: 'https://www.googletagmanager.com/gtm.js',
})

const container = document.getElementById('root')
if (container) {
  createRoot(container).render(
    <Provider store={store}>
      <AppRoutes />
    </Provider>,
  )
}
