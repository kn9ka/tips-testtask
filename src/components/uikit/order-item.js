import React from 'react'
import PlaneIcon from '../../styles/icons/plane_fly.svg'
import { numberWithSpace } from '../../services/functions'

export const OrderItem = ({ order }) => {
  const { from, to, amount, price } = order
  const planeStyles = { width: 14, stroke: '#5ab4ff' }
  let amountTextEnd = ''

  if (amount > 1 && amount <= 4) amountTextEnd = 'а'
  if (amount > 4) amountTextEnd = 'ов'

  const totalPrice = numberWithSpace(price * amount)

  return (
    <div className='order'>
      <div className='order__info'>
        <div className='order__info__city'>{from}</div>
        <PlaneIcon style={planeStyles} />
        <div className='order__info__city'>{to}</div>
      </div>
      <div className='order__flight'>
        <span>{amount}</span>
        <span className='text'>билет{amountTextEnd} на сумму</span>
        <span>{totalPrice}</span>
      </div>
    </div>
  )
}
