const backendSample = require('./sample.json')

class Backend {

  getTickets = (cityFrom, cityTo, luggageAmount) => {
    const data = backendSample.filter(el =>
      el.from === cityFrom &&
      el.to === cityTo &&
      ~~el.laggage_max >= ~~luggageAmount
    )

    return new Promise((resolve, reject) => {
      if (data) {
        setTimeout(() => resolve(data), 1000)
      } else {
        setTimeout(() => reject('no data'), 1000)
      }
    })
  }
}

export default new Backend()
