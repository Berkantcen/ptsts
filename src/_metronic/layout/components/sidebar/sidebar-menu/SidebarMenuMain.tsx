import SidebarNavAdmin from '../sidedarNavigationList/SidebarNavAdmin'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SidebarMenuMain = () => {
  const [currentLevel, setCurrentLevel] = useState<string | null>('admin')

  return <>{currentLevel === 'admin' && <SidebarNavAdmin />}</>
}

export { SidebarMenuMain }
