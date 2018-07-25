import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './actions'
import App from '../components/App'

const mapStateToProps = state => (state)

const mapDispatchToProps = dispatch => ({
  touchStart: bindActionCreators(actions.touchStart, dispatch),
  touchMove: bindActionCreators(actions.touchMove, dispatch),
  touchEnd: bindActionCreators(actions.touchEnd, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
