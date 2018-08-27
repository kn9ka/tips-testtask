import React from 'react'

export const LuggagePicker = ({ onLuggageAmountIncrease, onLuggageAmountDecrease, luggageAmount }) => (
  <div className='luggage-picker'>
    <p className='luggage-picker__title'>Багаж (кг)</p>
    <div className='luggage-picker__content'>
      <button className='luggage-picker__button' onClick={onLuggageAmountIncrease}>+</button>
      <div className='luggage-picker__amount'>{luggageAmount}</div>
      <button className='luggage-picker__button' onClick={onLuggageAmountDecrease}>-</button>
    </div>
  </div>
)
