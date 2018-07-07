import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './actions'
import App from '../components/App'

const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch => ({
  touchStart: bindActionCreators(actions.touchStart, dispatch),
  swipeUp: bindActionCreators(actions.swipeUp, dispatch),
  swipeDown: bindActionCreators(actions.swipeDown, dispatch),
  touchEnd: bindActionCreators(actions.touchEnd, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
