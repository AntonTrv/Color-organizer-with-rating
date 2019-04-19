import React from 'react'
import PropTypes from 'prop-types'
import Star from './Star'
import '../css/starRating.scss'

const StarRating = ({starsSelected=1, totalStars=5, onRate=f=>f}) =>
    <div className='star-rating-wrapper'>
    <div className="star-rating">
        {[...Array(totalStars)].map((n, i) =>
            <Star key={i}
                  selected={i<starsSelected}
                  onClick={() => onRate(i+1)}/>
        )}

    </div>
    <hr/>
      <p className='rate'>{starsSelected} of {totalStars} stars</p>
    </div>

StarRating.propTypes = {
    starsSelected: PropTypes.number,
    totalStars: PropTypes.number,
    onRate: PropTypes.func
}

export default StarRating
