import { createActions } from 'redux-actions'

export default createActions({
  'TOUCH_START': (posY) => ({ posY: posY }),
  'TOUCH_MOVE': (posY) => ({ posY: posY }),
  'TOUCH_END': (posY) => ({ posY: posY })
})
