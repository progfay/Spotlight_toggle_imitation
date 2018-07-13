export default (props) => (
  <React.Fragment>
    <div id='spotlight'>
      <div id='search'> Search </div>
      <div id='cancel'> Cancel </div>
    </div>
    <style jsx>{`
      #spotlight {
        position: fixed;
        top: 3.5vh;
        left: 0;
        width: 100vw;
        height: 5vh;
        z-index: 0;
        background-color: rgba(0, 0, 0, 0);
        display: flex;
        justify-content: space-around;
        align-items: center;
      }

      #search {
        width: 72%;
        height: 90%;
        background-color: rgba(180, 180, 180, 0.5);
        color: rgb(220, 220, 220);
        font-size: 2.2em;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-radius: 0.6em;
        padding-left: 2%;
        margin-left: 2vw;
      }

      #cancel {
        color: white;
        font-size: 2rem;
        text-align: center;
        width: 10rem;
      }
    `}</style>
  </React.Fragment>
)