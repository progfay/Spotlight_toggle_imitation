import React from 'react'
import { COMMON, SPOTLIGHT } from '../Constants'

export default (props) => (
  <React.Fragment>
    <div id='spotlight'
      className={props.visibleSpotlight ? 'open' : 'close'} >
      <div id='search'> Search </div>
      <div id='cancel'> Cancel </div>
    </div>
    <style jsx>{`
      #spotlight {
        position: fixed;
        top: -5vh;
        left: 0;
        width: 100vw;
        height: 5vh;
        z-index: 2;
        background-color: rgba(0, 0, 0, 0);
        display: flex;
        justify-content: space-around;
        align-items: center;
        transition-property: top;
        transition-duration: ${!props.startPosY && !props.posY ? SPOTLIGHT.TRANSITION_DURATION : 0}ms;
        transition-timing-function: ${SPOTLIGHT.TRANSITION_TIMING_FUNCTION};
      }

      #spotlight.open {
        top: 3.5vh;
      }

      #spotlight.close {
        top: ${Math.min(props.posY - props.startPosY - props.height * (COMMON.SWIPE_DOWN_PERSENTAGE - 0.035), props.height * 0.035)}px;
      }

      #search {
        width: 90%;
        height: 90%;
        background-color: rgba(180, 180, 180, 0.5);
        color: rgb(220, 220, 220);
        font-size: 1.2em;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border-radius: 0.6em;
        padding-left: 5%;
        margin-left: 5vw;
        box-sizing: content-box;
      }

      #cancel {
        color: white;
        font-size: 1rem;
        text-align: center;
        width: 10rem;
      }
    `}</style>
  </React.Fragment>
)
