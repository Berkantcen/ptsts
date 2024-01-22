import styles from './PageLoading.module.scss'
import ReactLoading from 'react-loading'
const PageLoading = () => {
  return (
    <div className={styles.loadingContainer}>
      <ReactLoading type='spin' color='#009ef7' height={50} width={50} />
    </div>
  )
}

export default PageLoading
