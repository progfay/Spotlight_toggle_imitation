import { handleActions } from 'redux-actions'

const initState = {
  visibleSpotlight: false,
  visibleKeyboard: false,
  isTouching: true,
  startPosY: 0,
  posY: 0
}

export default handleActions({
  'TOUCH_START': (state, action) => ({
    isTOuching: true,
    startPosY: action.payload.posY,
    posY: action.payload.posY,
    height: action.payload.height
  }),
  'TOUCH_MOVE': (state, action) => ({
    isTOuching: true,
    startPosY: state.startPosY,
    posY: action.payload.posY,
    height: state.height
  }),
  'TOUCH_END': (state, action) => ({
    isTOuching: false,
    startPosY: state.startPosY,
    posY: state.posY,
    height: state.height
  })
}, initState)