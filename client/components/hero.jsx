import React, { useRef } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import Sequence from './sequence/index';

function Hero(props) {
  const ref = useRef();
  return (
    <div className="hero col-12 col-md-10 m-auto position-relative">
      <div className="hero-text position-absolute pt-5 w-100 d-flex flex-column text-center">
        <h2 className="title">MacBook Pro</h2>
        <h1 className="tagline">
          The best for
          <span className="tagline break">the brightest.</span>
        </h1>
      </div>
      <Controller>
        <Scene duration="200%" triggerHook="onLeave" pin>
          {progress => (
            <div style={{ height: '100vh', position: 'relative' }}>
              <Sequence ref={ref} progress={progress} />
            </div>
          )}
        </Scene>
      </Controller>
      {/* <div className="hero-img m-auto"></div> */}
    </div>
  );
}

export default Hero;
