import React from 'react'
import { Provider } from 'react-redux'
import createStore from '../src/store'
import App from '../src'

export default class Index extends React.Component {
  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/static/workbox/sw.js')
        .then(() => {
          console.log('service worker registration successful')
        })
        .catch(err => {
          console.warn('service worker registration failed', err.message)
        })
    }
  }

  render() {
    return (
      <Provider store={createStore()}>
        <App />
      </Provider>
    )
  }
}
