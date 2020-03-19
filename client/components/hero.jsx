import React, { useRef } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import AnimatedText from './animations/animated-text';
import Sequence from './animations/index';

function Hero(props) {
  const ref = useRef();
  return (
    <div className="hero col-12 col-md-10 m-auto position-relative">
      <Controller>
        <Scene duration="10%" triggerHook="onEnter">
          {progress => (
            <>
              <AnimatedText ref={ref} progress={progress} />
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
