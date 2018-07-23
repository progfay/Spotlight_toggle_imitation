import { handleActions } from 'redux-actions'

const initState = {
  filterHomescreen: false,
  visibleSpotlight: false,
  visibleKeyboard: false,
  isTouching: true,
  startPosY: 0,
  posY: 0,
  height: 0
}

export default handleActions({
  'TOUCH_START': (state, action) => ({
    filterHomescreen: true,
    visibleSpotlight: false,
    visibleKeyboard: false,
    isTouching: true,
    startPosY: action.payload.posY,
    posY: action.payload.posY,
    height: state.height === 0 ? action.payload.height : state.height
  }),
  'TOUCH_MOVE': (state, action) => ({
    filterHomescreen: true,
    isTouching: true,
    startPosY: state.startPosY,
    posY: action.payload.posY,
    height: state.height
  }),
  'TOUCH_END': (state) => ({
    filterHomescreen: state.posY - state.startPosY > state.height * 0.35,
    visibleSpotlight: state.posY - state.startPosY > state.height * 0.35,
    visibleKeyboard: state.posY - state.startPosY > state.height * 0.35,
    isTouching: false,
    startPosY: state.startPosY,
    posY: state.posY,
    height: state.height
  })
}, initState)
