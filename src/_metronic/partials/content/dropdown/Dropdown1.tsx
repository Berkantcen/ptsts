/* eslint-disable jsx-a11y/anchor-is-valid */
import { useLocation, useNavigate } from 'react-router-dom'

export function Dropdown1() {
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)

  return (
    <div
      className='menu menu-sub menu-sub-dropdown w-250px w-md-300px'
      data-kt-menu='true'
      id='filter-dropdown'
    >
      <div className='px-7 py-5'>
        <div className='fs-5 text-dark fw-bolder'>Filter Options</div>
      </div>

      <div className='separator border-gray-200'></div>

      {/* Filters */}
      <div className='px-7 py-5'></div>
    </div>
  )
}
