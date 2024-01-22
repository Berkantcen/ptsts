import { useContext, useEffect } from 'react'
import AppLevelContext from 'app/context/AppLevelContext'

const UserDashboard = () => {
  const { userInfo, updateUserInfo, setCurrentPage } = useContext(AppLevelContext)

  useEffect(() => {
    setCurrentPage('User Dashboard')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      <button
        onClick={() =>
          updateUserInfo(userInfo, {
            ...userInfo,
            displayName: 'Berkant Cen',
          })
        }
        className='btn btn-primary'
      >
        Update User Info
      </button>
    </div>
  )
}

export default UserDashboard
