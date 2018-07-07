import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import createStore from '../redux/store'
import App from '../redux'

render(
  <Provider store={createStore()}>
    <App />
  </Provider>,
  document.getElementById('root'))
