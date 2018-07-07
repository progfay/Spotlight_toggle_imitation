import { Provider } from 'react-redux'
import createStore from '../redux/store'
import App from '../redux'

export default () => (
  <Provider store={createStore()}>
    <App />
  </Provider>
)