import React from 'react'
import './style/locationInfo.css'

const LocationInfo = ({location}) => {
  return (
    <section className='location'>
        <h2 className='location__name'>{location?.name}</h2>
        <ul className='location__list'>
            <li className='location__item'>
              <span className='location__label'>Type:</span>
            {location?.type}
            </li>
            <li className='location__item'>
              <span className='location__label'>Dimension:</span>
            {location?.dimension}
            </li>
            <li className='location__item'>
              <span className='location__label'>Population:</span>
            {location?.residents.length}
            </li>
        </ul>
    </section>
  )
}

export default LocationInfo