import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CityPicker } from '../pickers/cities'
import { LuggagePicker } from '../pickers/luggage'
import {
  editCityFrom,
  editCityTo,
  increaseLuggageAmount,
  decreaseLuggageAmount
} from '../../actions'

@connect(state => ({
  cityFrom: state.cityFrom,
  cityTo: state.cityTo,
  luggageAmount: state.luggageAmount
}), {
    editCityFrom,
    editCityTo,
    increaseLuggageAmount,
    decreaseLuggageAmount
  })
export class SearchForm extends Component {
  onLuggageAmountIncrease = () => {
    const prevAmount = this.props.luggageAmount
    this.props.increaseLuggageAmount(prevAmount + 1)
  }

  onLuggageAmountDecrease = () => {
    const prevAmount = this.props.luggageAmount
    prevAmount > 0 && this.props.decreaseLuggageAmount(prevAmount - 1)
  }

  render = () => (
    <div className='search-form'>
      <div className='cities-picker'>
        <CityPicker onBlur={e => this.props.editCityFrom(e.target.value)} title='Откуда' planeDirection='take-off' />
        <CityPicker onBlur={e => this.props.editCityTo(e.target.value)} title='Куда' planeDirection='land' />
      </div>
      <LuggagePicker
        luggageAmount={this.props.luggageAmount}
        onLuggageAmountIncrease={this.onLuggageAmountIncrease}
        onLuggageAmountDecrease={this.onLuggageAmountDecrease}
      />
    </div>
  )
}
