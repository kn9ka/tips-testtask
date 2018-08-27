import React from 'react'
import PlaneIcon from '../../styles/icons/plane_fly.svg'
import { numberWithSpace, parseTime } from '../../functions'

export const Tickets = ({ tickets, onTicketSelect }) => {
  if (tickets.length === 0) { return <NoTicketsForm /> }

  return (
    <div className='order-form__tickets'>
      {tickets.map((ticket, index) => <Ticket
        ticket={ticket}
        id={index}
        key={ticket.id}
        onTicketSelect={onTicketSelect}
      />)}
    </div>
  )
}

const NoTicketsForm = () => (
  <div className='order-form--no-tickets'>
    К сожалению ничего не найдено
  </div>
)

const Ticket = ({ ticket, id, onTicketSelect }) => {
  const { time_arrival, time_departure, from, to, price, duration, selected } = ticket
  const arrival = parseTime(time_arrival)
  const departure = parseTime(time_departure)

  return (
    <div className={selected ? 'ticket--selected' : 'ticket'} onClick={() => onTicketSelect(id)} >
      <TicketInfo time={arrival.time} direction={from} date={arrival.date} />
      <TicketFlightInfo duration={duration} price={price} />
      <TicketInfo time={departure.time} direction={to} date={departure.date} />
    </div>
  )
}

const TicketInfo = ({ time, direction, date }) => (
  <div className='ticket__info'>
    <div className='ticket__info__time'>{time}</div>
    <div className='ticket__info__city'>{direction}</div>
    <div className='ticket__info__date'>{date}</div>
  </div>
)

const TicketFlightInfo = ({ duration, price }) => {
  const planeStyles = { width: 14, stroke: '#5ab4ff' }

  return (
    <div className='ticket__flight'>
      <div className='ticket__flight__duration'>{duration}ч <PlaneIcon style={planeStyles} /></div>
      <InfoWrapper />
      <div className='ticket__flight__price'>{numberWithSpace(price)}</div>
    </div>
  )
}

const InfoWrapper = () => (
  <div className='info-wrapper'>
    <div className='circle' />
    <div className='line' />
    <div className='circle' />
  </div>
)
