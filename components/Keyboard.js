export default (props) => (
  <React.Fragment>
    <img src="/static/images/keyboard.png" alt="" id="keyboard"/>
    <style jsx>{`
      #keyboard {
        position: absolute;
        bottom: 0px;
        width: 100vw;
        height: auto;
        z-index: 1;
      }
    `}</style>
  </React.Fragment>
)