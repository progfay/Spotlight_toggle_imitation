const BLUR_MAX = 40
const BRIGHTNESS_MAX = 65

const constrain = (value, min, max) => (value < min ? min : (value > max ? max : value))

export default ({ startPosY, posY, height }) => {
  const percentage = constrain((startPosY - posY) / height, 0, 1)
  return (
  <React.Fragment>
    <img src="/static/images/homescreen.png" alt="" id="homescreen"/>
    <img src="/static/images/statusbar.png" alt="" id="statusbar"/>
    <style jsx>{`
      #homescreen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1;
        filter: blur(${percentage * BLUR_MAX}px) brightness(${100 - percentage * (100 - BRIGHTNESS_MAX)}%);
      }

      #statusbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: auto;
        z-index: -1;
      }
    `}</style>
  </React.Fragment>
)}