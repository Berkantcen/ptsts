import { FC } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'
import { checkIsActive, WithChildren } from '../../../../helpers'

// SVG
import ReviewSvg from 'app/assets/menuIcon/ReviewSvg'
import KeywordSvg from 'app/assets/menuIcon/KeywordSvg'
import DashboardSvg from 'app/assets/menuIcon/DashboardSvg'
import OrgDashboardSvg from 'app/assets/menuIcon/OrgDashboardSvg'

type Props = {
  to: string
  title: string
  icon?: string
  fontIcon?: string
  hasBullet?: boolean
  iconName?: string
  page?: string
}

const SidebarMenuItem: FC<Props & WithChildren> = ({
  children,
  to,
  title,
  icon,
  fontIcon,
  iconName,
  hasBullet = false,
  page,
}) => {
  const { pathname } = useLocation()
  const isActive = checkIsActive(pathname, to)

  return (
    <div className='menu-item'>
      <Link className={clsx('menu-link without-sub', { active: isActive })} to={to}>
        {page === 'apps' && (
          <i
            className={`${iconName} menu-icon`}
            style={{
              fontSize: '16px',
              color: '#9d9da6',
            }}
          ></i>
        )}
        {page === 'sentiments' && (
          <i
            className={`${iconName} menu-icon`}
            style={{
              fontSize: '16px',
              color: '#9d9da6',
            }}
          ></i>
        )}
        {page === 'country' && (
          <i
            className={`${iconName} menu-icon`}
            style={{
              fontSize: '16px',
              color: '#9d9da6',
            }}
          ></i>
        )}
        {page === 'labels' && (
          <i
            className={`${iconName} menu-icon`}
            style={{
              fontSize: '16px',
              color: '#9d9da6',
            }}
          ></i>
        )}
        {page === 'language' && (
          <i
            className={`${iconName} menu-icon`}
            style={{
              fontSize: '16px',
              color: '#9d9da6',
            }}
          ></i>
        )}
        {page === 'tags' && (
          <i
            className={`${iconName} menu-icon`}
            style={{
              fontSize: '16px',
              color: '#9d9da6',
            }}
          ></i>
        )}
        {page === 'my-apps' && (
          <i
            className={`${iconName} menu-icon`}
            style={{
              fontSize: '16px',
              color: '#9d9da6',
            }}
          ></i>
        )}
        {page === 'competitors' && (
          <i
            className={`${iconName} menu-icon`}
            style={{
              fontSize: '16px',
              color: '#9d9da6',
            }}
          ></i>
        )}
        {page === 'adminDashboard' && (
          <i
            className={`${iconName} menu-icon`}
            style={{
              fontSize: '16px',
              color: '#9d9da6',
            }}
          ></i>
        )}
        {page === 'ratings' && (
          <i
            className={`${iconName} menu-icon`}
            style={{
              fontSize: '16px',
              color: '#9d9da6',
            }}
          ></i>
        )}

        {/* Review  */}
        {page === 'review' && <ReviewSvg />}
        {page === 'keyword' && <KeywordSvg />}
        {page === 'dashboard' && <DashboardSvg />}
        {page === 'orgDashboard' && <OrgDashboardSvg />}

        <span className='menu-title'>{title}</span>
      </Link>
      {children}
    </div>
  )
}

export { SidebarMenuItem }
