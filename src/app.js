import React, { Component, Fragment } from 'react'
import { SearchForm } from './components/forms/search'
import { OrderForm } from './components/forms/order'
import './styles/main.scss'

export class App extends Component {
  render = () => {
    return (
      <Fragment>
        {console.log(process.env.NODE_ENV)}
        <SearchForm />
        <OrderForm />
      </Fragment>
    )
  }
}
