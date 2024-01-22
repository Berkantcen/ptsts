import { SidebarMenuItem } from '../sidebar-menu/SidebarMenuItem'

const SidebarNavAdmin = () => {
  return (
    <>
      <SidebarMenuItem
        to={`/admin/blog`}
        page='adminDashboard'
        title={'Blog'}
        iconName='bi bi-body-text'
      />
      <SidebarMenuItem
        to={`/admin/create-campaign-url`}
        page='adminDashboard'
        title={'Campaign Generator'}
        iconName='bi bi-card-heading'
      />
    </>
  )
}

export default SidebarNavAdmin
