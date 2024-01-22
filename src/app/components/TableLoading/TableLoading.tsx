import ReactLoading from 'react-loading'

const TableLoading = () => {
  return (
    <tr id='review-loader'>
      <td colSpan={8}>
        <div className='d-flex justify-content-center'>
          <ReactLoading type='spin' color='#009ef7' height={30} width={30} />
        </div>
      </td>
    </tr>
  )
}

export default TableLoading
