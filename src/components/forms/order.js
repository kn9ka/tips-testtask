import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoadingOverlay from 'react-loading-overlay'
import { ShoppingCart } from './shopping-cart'
import { Tickets } from '../uikit/tickets'
import { EmptyForm } from '../uikit/empty-form'
import api from '../../backend/api'
import { addOrderItem, removeOrderItem } from '../../actions'

@connect(state => ({
  cityFrom: state.cityFrom,
  cityTo: state.cityTo,
  luggageAmount: state.luggageAmount,
  orders: state.orders
}), { addOrderItem, removeOrderItem })
export class OrderForm extends Component {
  state = {
    tickets: [],
    defaultView: true,
    isOverlayActive: false
  }

  componentDidMount = () => {
    const { cityFrom, cityTo, luggageAmount } = this.props

    if (cityFrom && cityTo && ~~luggageAmount >= 0) {
      api.getTickets(cityFrom, cityTo, luggageAmount)
        .then(this.formatTicketsAndUpdateView)
    }
  }

  componentWillReceiveProps = (newProps) => {
    const { cityFrom, cityTo, luggageAmount } = newProps

    if (cityFrom && cityTo && ~~luggageAmount >= 0) {
      // fires on cities or luggage change, not on ticket select :>
      if (this.props.cityFrom !== cityFrom || this.props.cityTo !== cityTo || this.props.luggageAmount !== luggageAmount) {
        this.setState({ isOverlayActive: true })
        api.getTickets(cityFrom, cityTo, luggageAmount)
          .then(this.formatTicketsAndUpdateView)
      }
    }
  }

  formatTicketsAndUpdateView = (tickets) => {
    const { orders } = this.props

    const formattedTickets = tickets.map(ticket => {
      const previousTicket = orders.findIndex(order => order.id === ticket.id)
      const status = previousTicket === -1 ? false : true
      return { ...ticket, selected: status }
    })

    this.setState({ tickets: formattedTickets, defaultView: false, isOverlayActive: false })
  }

  onTicketSelect = (id) => {
    const { tickets } = this.state
    const { addOrderItem, removeOrderItem } = this.props
    const selectedTicket = tickets[id]

    selectedTicket.selected = !selectedTicket.selected

    if (selectedTicket.selected) {
      addOrderItem(selectedTicket)
    } else {
      removeOrderItem(selectedTicket)
    }

  }

  onOrderConfirm = () => {
    console.log(this.props.orders)
    // api.sendOrders(this.props.orders)
  }

  render = () => {
    const { tickets, defaultView, isOverlayActive } = this.state

    return (
      <LoadingOverlay
        active={isOverlayActive}
        spinner
        animate
        text='поиск билетов'
        style={{ alignSelf: 'center', display: 'flex', flexDirection: 'column', width: '100%' }}
      >
        <div className='order-form'>
          {defaultView ? <EmptyForm title='Начните поиск билетов' /> : (
            <Fragment>
              <Tickets tickets={tickets} onTicketSelect={this.onTicketSelect} />
              {tickets.length > 0 && <ShoppingCart onOrderConfirm={this.onOrderConfirm} />}
            </Fragment>
          )}
        </div>
      </LoadingOverlay>
    )
  }
}
