import React from 'react'
import Head from './head'
import Keyboard from './Keyboard'
import Homescreen from './Homescreen'
import Spotlight from './Spotlight'

export default (props) => (
  <React.Fragment>
    <Head>
      <meta name='viewport' content='width=device-width' />
      <meta content='width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;' name='viewport' />
    </Head>
    <style jsx global>{`
        html, body {
          width: 100%;
          height: 100%;
          overscroll-behavior-y: none;
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
    <div id='app'
      onTouchStart={(e) => {
        e.persist()
        props.touchStart(e.touches[0].clientY, e.target.clientHeight)
      }}
      onTouchMove={(e) => {
        e.persist()
        props.touchMove(e.touches[0].clientY)
      }}
      onTouchEnd={() => { props.touchEnd() }}
    >
      <Homescreen {...props} />
      <Spotlight {...props} />
      <Keyboard {...props} />
    </div>
    <style jsx>{`
      #id {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
      }
    `}</style>
  </React.Fragment>
)
