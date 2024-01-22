import { Link, useParams, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import AppLevelContext from 'app/context/AppLevelContext'
import classNames from 'classnames'

const HeaderUserMenu = () => {
  const { logout, userInfo } = useContext(AppLevelContext)
  const navigate = useNavigate()

  const { oId, pId } = useParams()

  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px'
      data-kt-menu='true'
    >
      {/* USER INFO */}
      <div className='menu-item px-3'>
        <div className='menu-content d-flex align-items-center px-3'>
          <div className='symbol symbol-50px me-5'>
            <img alt='Logo' src={'/media/avatars/300-6.jpg'} />
          </div>

          <div className='d-flex flex-column'>
            <div className='fw-bolder d-flex align-items-center fs-5'>UserName</div>
            <span className='fw-bold text-muted text-hover-primary fs-7'>{userInfo.email}</span>
          </div>
        </div>
      </div>

      <div className='separator my-2'></div>

      <div className='separator my-2' />
      <div
        className='menu-item px-5'
        data-kt-menu-trigger='hover'
        data-kt-menu-placement='left-start'
        data-kt-menu-flip='bottom'
      >
        <span className='menu-link px-5'>
          <span className='menu-title'>Create Project</span>
          <span className='menu-arrow' />
        </span>

        <div
          className='menu-sub menu-sub-dropdown py-4'
          style={{
            width: '250px',
          }}
        >
          <div className='menu-item px-5'>
            <div className='separator my-2'></div>
            <span
              className='menu-link px-5'
              onClick={() => {
                navigate(`/onboarding?type=prj&organizationId=${oId}`)
              }}
            >
              Create New Project
            </span>
          </div>
        </div>
      </div>
      <div className='separator my-2' />

      <div className='menu-item px-5'>
        <Link to={`/o/${oId}/p/${pId}/settings/project-summary`} className='menu-link px-5'>
          Settings
        </Link>
      </div>
      <div className='menu-item px-5'>
        <Link to={`/o/${oId}/p/${pId}/settings/linked-accounts`} className='menu-link px-5'>
          Linked Accounts
        </Link>
      </div>
      <div className='menu-item px-5'>
        <Link to={`/o/${oId}/p/${pId}/settings/team`} className='menu-link px-5'>
          Team
        </Link>
      </div>
      <div className='separator my-2' />
      <div className='menu-item px-5'>
        <span
          className='menu-link px-5'
          onClick={() => {
            logout()
          }}
        >
          Log Out
        </span>
      </div>
    </div>
  )
}

export { HeaderUserMenu }
