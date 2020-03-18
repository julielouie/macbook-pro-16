import React, { useRef } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import Sequence from './sequence/index';

function Hero(props) {
  const ref = useRef();
  return (
    <div className="hero col-12 col-md-10 m-auto position-relative">
      <Controller>
        <Scene>
          <div className="hero-text position-absolute pt-5 w-100 d-flex flex-column text-center">
            <h2 className="title">MacBook Pro</h2>
            <h1 className="tagline">
              The best for
              <span className="tagline break">the brightest.</span>
            </h1>
          </div>
        </Scene>
        <Scene duration="15%" triggerHook="onLeave" pin>
          {progress => (
            <>
              <Sequence ref={ref} progress={progress} />
              <div className="hero-img m-auto d-block d-sm-block d-md-none"></div>
            </>
          )}
        </Scene>
      </Controller>
    </div>
  );
}

export default Hero;
