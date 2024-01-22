import React from 'react'

interface RatingProps {
  rating: number | undefined
}

const Rating = ({ rating }: RatingProps) => {
  let stars = []

  for (let i = 0; i < 5; i++) {
    if (rating && i < rating) {
      stars.push(
        <div className='rating-label me-2 checked' key={i}>
          <i className='bi bi-star-fill fs-6 '></i>
        </div>,
      )
    } else {
      stars.push(
        <div className='rating-label me-2' key={i}>
          <i className='bi bi-star-fill fs-6'></i>
        </div>,
      )
    }
  }

  return <>{stars}</>
}

export default Rating
