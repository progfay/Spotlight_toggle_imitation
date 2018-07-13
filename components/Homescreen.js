export default (props) => (
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
        z-index: -1;
        filter: blur(40px) brightness(65%);
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
)