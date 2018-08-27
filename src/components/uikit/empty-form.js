import React from 'react'
import PlaneIcon from '../../styles/icons/plane_fly.svg'

export const EmptyForm = ({ title }) => {
  const planeStyles = { width: 73, height: 59, stroke: '#d3d3d3', alingSelf: 'center' }

  return (
    <div className='order-form--empty'>
      <PlaneIcon style={planeStyles} />
      {title}
    </div>)
}
