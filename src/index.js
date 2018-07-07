import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './actions'
import App from '../components/App'

const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch => ({
  // countup: bindActionCreators(actions.countUp, dispatch),
  // countdown: bindActionCreators(actions.countDown, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
