interface PartialRatingsProps {
  rating: number
}

const PartialRatings = ({ rating }: PartialRatingsProps) => {
  let stars = []

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(
        <div className='rating-label me-2 checked' key={i}>
          <i className='bi bi-star-fill fs-5'></i>
        </div>,
      )
    } else if (rating > i - 0.99 && rating < i) {
      stars.push(
        <div className='rating-label checked me-2 half' key={i}>
          <i className='bi bi-star-half fs-5'></i>
        </div>,
      )
    } else {
      stars.push(
        <div className='rating-label checked me-2' key={i}>
          <i className='bi bi-star fs-5'></i>
        </div>,
      )
    }
  }

  return <>{stars}</>
}

export default PartialRatings
