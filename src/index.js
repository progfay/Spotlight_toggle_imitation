import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './actions'
import App from '../components/App'

const mapStateToProps = state => ({
  visibleSpotlight: state.visibleSpotlight,
  visibleKeyboard: state.visibleKeyboard,
  startPosY: state.startPosY,
  posY: state.posY
})

const mapDispatchToProps = dispatch => ({
  touchStart: bindActionCreators(actions.touchStart, dispatch),
  touchMove: bindActionCreators(actions.touchMove, dispatch),
  touchEnd: bindActionCreators(actions.touchEnd, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
