import { handleActions } from 'redux-actions'

const initState = {
  visibleSpotlight: false,
  visibleKeyboard: false,
  startPosY: 0
}

export default handleActions({
  'TOUCH_START': (state, action) => ({}),
  'TOUCH_MOVE': (state, action) => ({}),
  'TOUCH_END': (state, action) => ({})
}, initState)