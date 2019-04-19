import React from 'react'
import StarRating from './StarRating'
import PropTypes from 'prop-types'
import '../css/color.scss'

const Color = ({title, color, rating=0 , onRemove=f=>f, onRate=f=>f}) =>
<section className="color">
    <div className='header-wrapper'>
      <h2>{title}</h2>
      <button onClick={onRemove}>X</button>
      </div>
      <div className="color-output"
           style={{ backgroundColor: color }}>
      </div>
      <div className="rating-wrapper">
          <StarRating starsSelected={rating} onRate={onRate}/>
      </div>
  </section>

  Color.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number
}

export default Color;
