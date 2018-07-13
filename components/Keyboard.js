export default (props) => (
  <React.Fragment>
    <img src="/static/images/keyboard.png" alt="" id="keyboard"/>
    <style jsx>{`
      #keyboard {
        position: absolute;
        bottom: 0px;
        width: 100vw;
        height: auto;
        z-index: 3;
      }
    `}</style>
  </React.Fragment>
)