import { useContext } from 'react'
import { SidebarMenuItem } from '../sidebar-menu/SidebarMenuItem'
import { useParams } from 'react-router-dom'

// Context
import AppLevelContext from 'app/context/AppLevelContext'

const SidebarSettings = () => {
  const { pId, oId } = useParams()

  return (
    <>
      {/* My Account */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1  fw-bolder'>
            MY ACCOUNT
          </span>
        </div>
      </div>

      <SidebarMenuItem to={`/o/${oId}/p/${pId}/settings/profile`} page='profile' title='Profile' />
      {/* Project Settings */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1  fw-bolder'>
            PROJECT SETTINGS
          </span>
        </div>
      </div>

      <SidebarMenuItem
        to={`/o/${oId}/p/${pId}/settings/project-summary`}
        page='project-summary'
        title='Project Summary'
      />

      <SidebarMenuItem
        to={`/o/${oId}/p/${pId}/settings/manage-tags`}
        page='manage-tags'
        title='Manage Tags'
      />

      <SidebarMenuItem
        to={`/o/${oId}/p/${pId}/settings/reply-templates`}
        page='reply-templates'
        title='Reply Templates'
      />

      {/* Organization Settings */}
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1  fw-bolder'>
            ORGANIZATION SETTINGS
          </span>
        </div>
      </div>

      <SidebarMenuItem
        to={`/o/${oId}/p/${pId}/settings/organization-summary`}
        page='profile'
        title='Organization Summary'
      />
      <SidebarMenuItem
        to={`/o/${oId}/p/${pId}/settings/linked-accounts`}
        page='profile'
        title='Linked Accounts'
      />
      <SidebarMenuItem to={`/o/${oId}/p/${pId}/settings/team`} page='profile' title='Team' />
    </>
  )
}

export default SidebarSettings
