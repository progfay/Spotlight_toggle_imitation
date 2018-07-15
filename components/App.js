import Head from './head'
import Keyboard from './Keyboard'
import Homescreen from './Homescreen'
import Spotlight from './Spotlight'

export default (props) => (
  <React.Fragment>
    <Head />
    <div
      onTouchStart={(e) => { e.persist(); props.touchStart(e.touches[0].clientY, e.target.clientHeight) }}
      onTouchMove={(e) => { e.persist(); props.touchMove(e.touches[0].clientY) }}
      onTouchEnd={() => { props.touchEnd() }}
      >
      <style jsx global>{`
        html, body {
          width: 100%;
          height: 100%;
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
        }
      `}</style>
      <Homescreen {...props} />
      <Spotlight {...props} />
      <Keyboard {...props} />
    </div>
  </React.Fragment>
)
