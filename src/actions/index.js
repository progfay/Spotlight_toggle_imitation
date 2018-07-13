import { createActions } from 'redux-actions'

export default createActions({
  'TOUCH_START': (posY, height) => ({
    posY: posY,
    height: height
  }),
  'TOUCH_MOVE': (posY) => ({ posY: posY }),
  'TOUCH_END': null
})
