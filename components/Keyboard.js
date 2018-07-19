import React from 'react'

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
        transition: top 200ms ease-out 0s;
      }

      #keyboard.open {
        top: calc(100vh - 67.5vw);
      }

      #keyboard.close {
        top: 100vh;
      }
    `}</style>
  </React.Fragment>
)
