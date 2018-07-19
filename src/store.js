import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

import reducer from './reducers'

const logger = createLogger({
  collapsed: true,
  duration: true
})

export default (initialState) => (
  createStore(
    reducer,
    initialState,
    applyMiddleware(logger)
  )
)
