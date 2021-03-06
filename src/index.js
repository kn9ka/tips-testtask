import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { App } from './app'
import { store } from './store'
import registerServiceWorker from './services/sw'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

if (process.env.NODE_ENV !== 'production') module.hot.accept()

registerServiceWorker()
