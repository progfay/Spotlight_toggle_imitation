import { handleActions } from 'redux-actions'
import { COMMON } from '../Constants'

const initState = {
  filterHomescreen: false,
  visibleSpotlight: false,
  visibleKeyboard: false,
  startPosY: -100,
  posY: -100,
  height: 667
}

export default handleActions({
  'TOUCH_START': (state, action) => ({
    filterHomescreen: state.filterHomescreen,
    visibleSpotlight: state.visibleSpotlight,
    visibleKeyboard: state.visibleKeyboard,
    startPosY: action.payload.posY,
    posY: action.payload.posY,
    height: state.height === 0 ? action.payload.height : state.height
  }),
  'TOUCH_MOVE': (state, action) => ({
    startPosY: state.startPosY,
    posY: action.payload.posY,
    height: state.height
  }),
  'TOUCH_END': (state) => {
    const isOpen = state.posY - state.startPosY > state.height * COMMON.SWIPE_DOWN_PERSENTAGE * 0.01
    return {
      filterHomescreen: isOpen,
      visibleSpotlight: isOpen,
      visibleKeyboard: isOpen,
      startPosY: isOpen ? state.startPosY : false,
      posY: isOpen ? state.posY : false,
      height: state.height
    }
  }
}, initState)
