import React, { useRef } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import AnimatedText from './sequence/animated-text';
import Sequence from './sequence/index';

function Hero(props) {
  const ref = useRef();
  return (
    <div className="hero col-12 col-md-10 m-auto position-relative">
      <Controller>
        <Scene duration="10%" triggerElement="hero-img" triggerHook="onLeave" pin>
          {progress => (
            <AnimatedText ref={ref} progress={progress} />
          )}
        </Scene>
        <Scene duration="10%" triggerHook="onEnter" pin>
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
