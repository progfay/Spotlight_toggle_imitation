import Keyboard from './Keyboard'
import Homescreen from './Homescreen'
import Spotlight from './Spotlight'

export default () => (
  <React.Fragment>
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
    <Homescreen />
    <Spotlight />
    <Keyboard />
  </React.Fragment>
)
