import { useNavigate, useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { KTIcon } from '../../../helpers'
import classNames from 'classnames'

const SidebarFooter = () => {
  const location = useLocation()

  const navigate = useNavigate()
  const { pId, oId } = useParams()

  return (
    <div className='app-sidebar-footer flex-column-auto pt-2 pb-6 px-6' id='kt_app_sidebar_footer'>
      <span
        className={classNames(
          'btn btn-flex flex-center btn-custom  overflow-hidden text-nowrap px-0 h-40px w-100',
          location.pathname.includes('settings') ? 'btn-dark' : 'btn-secondary',
        )}
        onClick={() => {
          if (location.pathname.includes('settings')) {
            navigate('/o/' + oId + '/p/' + pId + '/reviews')
          } else {
            navigate('/o/' + oId + '/p/' + pId + '/settings')
          }
        }}
      >
        <span className='btn-label '>
          {location.pathname.includes('settings') && <i className='bi bi-chevron-left me-3'></i>}
          {!location.pathname.includes('settings') ? 'User Settings' : 'Back to Dashboard'}
        </span>
        <KTIcon iconName='document' className='btn-icon fs-2 m-0' />
      </span>
    </div>
  )
}

export { SidebarFooter }
