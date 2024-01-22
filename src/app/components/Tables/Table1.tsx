import classNames from 'classnames'
import TableNoData from '../TableNoData/TableNoData'
import { useNavigate } from 'react-router-dom'

interface Table1Props {
  title: string
  subtitle: string
  showAddButton: boolean
  addBtnText?: string
  addBtnTarget?: string
  tableHeadings: string[]
  tableId: string
  data: any
  singleRowComponent: any
  addBtnHref?: string
}

const Table1 = ({
  addBtnHref,
  title,
  subtitle,
  showAddButton,
  addBtnText,
  addBtnTarget,
  data,
  tableHeadings,
  tableId,
  singleRowComponent: SingleRowComponent,
}: Table1Props) => {
  const navigate = useNavigate()
  return (
    <div className='card'>
      <div className='card-header border-0 pt-6'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>{title}</span>
          <span className='text-muted mt-1 fw-semibold fs-7'>{subtitle}</span>
        </h3>

        {showAddButton && (
          <div className='card-toolbar' onClick={() => addBtnHref && navigate(addBtnHref)}>
            <div className='d-flex justify-content-end' data-kt-user-table-toolbar='base'>
              <span
                className='btn btn-sm btn-light-primary'
                {...(!addBtnHref && {
                  'data-bs-toggle': 'modal',
                  'data-bs-target': addBtnTarget || '',
                })}
              >
                {addBtnText}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className='card-body py-4'>
        <div className='dataTables_wrapper dt-bootstrap4 no-footer'>
          <div className='table-responsive'>
            <table
              className='table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer'
              id={tableId}
            >
              <thead>
                <tr className='text-start text-muted fw-bold fs-7 gs-0'>
                  {tableHeadings.map((heading, idx) => (
                    <th
                      key={idx}
                      className={classNames(
                        'min-w-125px',
                        tableHeadings.length - 1 === idx ? 'text-end' : '',
                      )}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className='text-gray-600'>
                {data.length === 0 && <TableNoData />}

                {data.length !== 0 &&
                  data?.map((item: any, idx: number) => (
                    <SingleRowComponent key={idx} item={item} position={idx} />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table1
