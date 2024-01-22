import { Link } from 'react-router-dom'

import { toAbsoluteUrl } from '../../../helpers'
import { useLayout } from '../../core'
import { MutableRefObject } from 'react'

type PropsType = {
  sidebarRef: MutableRefObject<HTMLDivElement | null>
}

const SidebarLogo = (props: PropsType) => {
  const { config } = useLayout()

  return (
    <div className='app-sidebar-logo px-6' id='kt_app_sidebar_logo'>
      <Link to={'/'}>
        {config.layoutType === 'dark-sidebar' ? (
          <img
            alt='Logo'
            src={toAbsoluteUrl('/media/custom/snatchLogo.svg')}
            className='h-60px app-sidebar-logo-default'
          />
        ) : (
          <>
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/custom/snatchLogo.svg')}
              className='h-60px app-sidebar-logo-default theme-light-show'
            />
            <img
              alt='Logo'
              src={toAbsoluteUrl('/media/custom/snatchLogo.svg')}
              className='h-60px app-sidebar-logo-default theme-dark-show'
            />
          </>
        )}

        <img
          alt='Logo'
          src={toAbsoluteUrl('/media/logos/default-small.svg')}
          className='h-20px app-sidebar-logo-minimize'
        />
      </Link>
    </div>
  )
}

export { SidebarLogo }
