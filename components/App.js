import Keyboard from './Keyboard'
import Homescreen from './Homescreen'
import Spotlight from './Spotlight'

export default (props) => {
  return (
  <div
    onTouchStart={(e) => { e.persist(); props.touchStart(e.touches[0].clientY, e.target.clientHeight) }}
    onTouchMove={(e) => { e.persist(); props.touchMove(e.touches[0].clientY) }}
    onTouchEnd={() => { props.touchEnd() }}
    >
    <style jsx global>{`
      html, body {
        width: 100vw;
        height: 100vh;
      }

      body {
        position: fixed;
        top: 0;
        left: 0;
        overflow: hidden;
      }

      * {
        padding: 0;
        margin: 0;
        box-sizing: content-box;
      }
    `}</style>
    <Homescreen {...props} />
    <Spotlight />
    <Keyboard />
  </div>
)}
