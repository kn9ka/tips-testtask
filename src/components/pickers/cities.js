import React, { Component } from 'react'
import PlaneTakeOff from '../../styles/icons/plane_take_off.svg'
import PlaneLand from '../../styles/icons/plane_land.svg'


const WAIT_INTERVAL = 1000 //  wait delay user after typing

export class CityPicker extends Component {

  state = { value: '' }

  componentWillMount = () => {
    this.timer = null
  }

  onChangeHandler = (event) => {
    clearTimeout(this.timer)

    this.setState({ value: event.target.value })

    this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL)
  }

  triggerChange = () => {
    const event = { target: { value: this.state.value } } // hack
    this.props.onBlur(event)
  }

  onKeyPressHandler = (event) => event.key === 'Enter' && this.props.onBlur(event)

  render = () => {
    const { title, onBlur, planeDirection } = this.props
    const { value } = this.state

    const planeClass = 'city-picker__field__icon'
    const planeIcon = planeDirection === 'take-off' ? (<PlaneTakeOff className={planeClass} />) : (<PlaneLand className={planeClass} />)
    const placeholder = planeDirection === 'take-off' ? 'Санкт-Петебург' : 'Москва'

    return (
      <div className='city-picker'>
        <p className='city-picker__title'>{title}</p>
        <div className='city-picker__field'>
          {planeIcon}
          <input
            className='city-picker__field__input'
            placeholder={placeholder}
            onChange={this.onChangeHandler}
            value={value}
            onBlur={onBlur}
            onKeyPress={this.onKeyPressHandler}
          />
        </div>
      </div>
    )
  }
}
