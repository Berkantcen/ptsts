import styles from './GlobalLoading.module.scss'
import { toAbsoluteUrl } from '_metronic/helpers'
const GlobalLoading = () => {
  return (
    <div className={styles.globalLoading}>
      <img src={toAbsoluteUrl('/media/custom/snatchLogo.svg')} alt='Logo' />
    </div>
  )
}

export default GlobalLoading
