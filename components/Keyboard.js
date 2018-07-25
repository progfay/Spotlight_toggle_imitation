import React from 'react'
import { KEYBOARD } from '../Constants'

export default (props) => (
  <React.Fragment>
    <img src='/static/images/keyboard.png' alt='' id='keyboard'
      className={props.visibleKeyboard ? 'open' : 'close'} />
    <style jsx>{`
      #keyboard {
        position: absolute;
        width: 100vw;
        height: 67.5vw;
        z-index: 3;
        transition: top;
        transition-property: top;
      }

      #keyboard.open {
        top: calc(100vh - 67.5vw);
        transition-duration: ${KEYBOARD.OPEN_TRANSITION_DURATION}ms;
        transition-timing-function: ${KEYBOARD.OPEN_TRANSITION_TIMING_FUNCTION};
      }

      #keyboard.close {
        top: 100vh;
        transition-duration: ${KEYBOARD.CLOSE_TRANSITION_DURATION}ms;
        transition-timing-function: ${KEYBOARD.CLOSE_TRANSITION_TIMING_FUNCTION};
      }
    `}</style>
  </React.Fragment>
)
