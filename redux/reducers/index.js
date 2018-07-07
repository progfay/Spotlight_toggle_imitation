import { handleActions } from 'redux-actions'

const initState = {
  visibleSpotlight: false,
  visibleKeyboard: false,
  verticalMoveDist: 0
}

export default handleActions({
  'TOUCH_START': (state) => ({}),
  'SWIPE_UP': (state) => ({}),
  'SWIPE_DOWN': (state) => ({}),
  'TOUCH_END': (state) => ({})
}, initState)