import React from 'react'
import { COMMON, HOMESCREEN } from '../Constants'

const constrain = (value, min, max) => (value < min ? min : (value > max ? max : value))

export default ({ filterHomescreen, startPosY, posY, height }) => {
  const percentage = constrain((posY - startPosY) / height, 0, COMMON.SWIPE_DOWN_PERSENTAGE * 0.01)
  return (
    <React.Fragment>
      <img src='/static/images/homescreen.png' alt='' id='homescreen'
        className={filterHomescreen ? 'filter' : 'none'} />
      <img src='/static/images/statusbar.png' alt='' id='statusbar' />
      <style jsx>{`
      #homescreen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1;
        transition-property: filter;
        transition-duration: ${filterHomescreen ? 0 : HOMESCREEN.TRANSITION_DURATION}ms;
        transition-timing-function: ${HOMESCREEN.TRANSITION_TIMING_FUNCTION};
      }

      #homescreen.filter {
        filter: blur(${filterHomescreen ? percentage * HOMESCREEN.BLUR_MAX : 0}px) brightness(${filterHomescreen ? 100 - percentage * (100 - HOMESCREEN.BRIGHTNESS_MAX) : 100}%);
      }

      #homescreen.none {
        filter: none;
      }

      #statusbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 3.5211268vh;
        z-index: 3;
      }
    `}</style>
    </React.Fragment>
  )
}
