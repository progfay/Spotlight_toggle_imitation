import { handleActions } from 'redux-actions'

const initState = {
  visibleSpotlight: false,
  visibleKeyboard: false,
  startPosY: 0,
  posY: 0
}

export default handleActions({
  'TOUCH_START': (state, action) => ({ startPosY: action.payload.posY, posY: action.payload.posY }),
  'TOUCH_MOVE': (state, action) => ({ posY: action.payload.posY }),
  'TOUCH_END': (state, action) => ({ posY: action.payload.posY })
}, initState)