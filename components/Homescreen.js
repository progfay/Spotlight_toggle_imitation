const BLUR_MAX = 40
const BRIGHTNESS_MAX = 65

const constrain = (value, min, max) => (value < min ? min : (value > max ? max : value))

export default ({ isTouching, visibleSpotlight, startPosY, posY, height }) => {
  const percentage = constrain((posY - startPosY) / height, 0, 0.35)
  return (
  <React.Fragment>
    <img src="/static/images/homescreen.png" alt="" id="homescreen"
      className={isTouching || visibleSpotlight ? 'filter' : 'none'} />
    <img src="/static/images/statusbar.png" alt="" id="statusbar"/>
    <style jsx>{`
      #homescreen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1;
        transition: filter 300ms ease;
      }

      #homescreen.filter {
        filter: blur(${percentage * BLUR_MAX}px) brightness(${100 - percentage * (100 - BRIGHTNESS_MAX)}%);
      }

      #homescreen.none {
        filter: none;
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