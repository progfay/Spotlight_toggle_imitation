import { Provider } from 'react-redux'
import createStore from '../src/store'
import App from '../src'

export default () => (
  <Provider store={createStore()}>
    <App />
  </Provider>
)
