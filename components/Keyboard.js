export default (props) => (
  <React.Fragment>
    <img src="/static/images/keyboard.png" alt="" id="keyboard"
      className={props.visibleKeyboard ? 'open' : 'close'} />
    <style jsx>{`
      #keyboard {
        position: absolute;
        width: 100vw;
        height: 67.5vw;
        z-index: 3;
        transition: bottom 200ms ease-out 0s;
      }

      #keyboard.open {
        bottom: 0;
      }

      #keyboard.close {
        bottom: -67.5vw;
      }
    `}</style>
  </React.Fragment>
)