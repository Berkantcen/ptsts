import React from 'react'

const TableNoData = () => {
  return (
    <tr>
      <td colSpan={5} className='text-center'>
        <div className='d-flex justify-content-center'>
          <span className='text-muted mt-1 fw-semibold fs-7 pt-9'>No records found</span>
        </div>
      </td>
    </tr>
  )
}

export default TableNoData
