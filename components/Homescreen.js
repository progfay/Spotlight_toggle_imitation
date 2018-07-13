export default (props) => (
  <React.Fragment>
    <img src="/static/images/homescreen.png" alt="" id="homescreen"/>
    <style jsx>{`
      #homescreen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: -1;
        filter: blur(30px);
      }
    `}</style>
  </React.Fragment>
)