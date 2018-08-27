import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { OrderItem } from '../uikit/order-item'
import { EmptyForm } from '../uikit/empty-form'

@connect(state => ({ orders: state.orders }))
export class ShoppingCart extends Component {
  state = { orders: [] }

  componentDidMount = () => {
    const { orders } = this.props
    if (orders) this.formatAndCalcOrders(orders)
  }

  componentWillReceiveProps = (newProps) => {
    const { orders } = newProps
    if (orders) this.formatAndCalcOrders(orders)
  }

  formatAndCalcOrders = (orders) => {
    const formattedOrders = []

    orders.forEach(order => {
      const orderIndex = formattedOrders.findIndex(item => item.id === order.id)

      if (~~orderIndex === -1) { // ~~ means parseInt()
        formattedOrders.push({ ...order, amount: 1 })
      } else {
        ~~formattedOrders[orderIndex].amount++
      }
    })

    this.setState({ orders: formattedOrders })
  }

  render = () => {
    const { orders } = this.state

    return (
      <div className='order-form__shopping-cart'>
        {orders.length > 0 ? (
          <Fragment>
            {orders.map(order => <OrderItem key={order.id} order={order} />)}
            <button className='order-form__shopping-cart__buy-button'>Купить</button>
          </Fragment>)
          : <EmptyForm title='Корзина пуста' />
        }
      </div>
    )
  }
}
