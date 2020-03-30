import React, { useRef } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import AnimatedVideo from './animations/animated-video';
import AnimatedTextSpecs from './animations/animated-text-specs';

function Specs(props) {

  const specDetails = [
    ['16-inch Retina display', 'for an immersive viewing experience.'],
    ['Up to 8TB SSD storage', '— the highest capacity in any notebook.'],
    ['AMD Radeon Pro 5000M series graphics', 'for fast rendering and seamless playback.'],
    ['Up to 8-core processor', 'to power through intensive workloads.'],
    ['Up to 64GB of memory', 'for editing large files and smooth multitasking.'],
    ['Six-speaker sound system and studio-quality mics', 'for dramatic sound and superclean recordings.']
  ];

  const ref = useRef();
  return (
    <div className="specs m-auto pt-5">
      <div className="specs-img">
        <Controller>
          <Scene duration="60%" triggerHook="onEnter" >
            {progress => (
              <AnimatedVideo ref={ref} progress={progress} />
            )}
          </Scene>
        </Controller>
      </div>
      <div className="col-12 col-md-10 col-lg-8 m-auto pt-5 h-100">
        <div className="specs-contain d-flex">
          <div className="left px-0 col-12 col-md-4">
            <div className="spec-details text-muted">
              <Controller>
                <Scene duration="60%" triggerHook="onEnter">
                  {progress => (
                    <AnimatedTextSpecs ref={ref} progress={progress} specText={specDetails[0]} />
                  )}
                </Scene>
              </Controller>
            </div>
            <div className="spec-details text-muted">
              <Controller>
                <Scene duration="60%" triggerHook="onEnter">
                  {progress => (
                    <AnimatedTextSpecs ref={ref} progress={progress} specText={specDetails[1]} />
                  )}
                </Scene>
              </Controller>
            </div>
            <div className="spec-details text-muted">
              <Controller>
                <Scene duration="60%" triggerHook="onEnter">
                  {progress => (
                    <AnimatedTextSpecs ref={ref} progress={progress} specText={specDetails[2]} />
                  )}
                </Scene>
              </Controller>
            </div>
          </div>
          <div className="center px-0 col-12 col-md-4"></div>
          <div className="right px-0 col-12 col-md-4">
            <div className="spec-details text-muted">
              <Controller>
                <Scene duration="60%" triggerHook="onEnter">
                  {progress => (
                    <AnimatedTextSpecs ref={ref} progress={progress} specText={specDetails[3]} />
                  )}
                </Scene>
              </Controller>
            </div>
            <div className="spec-details text-muted">
              <Controller>
                <Scene duration="60%" triggerHook="onEnter">
                  {progress => (
                    <AnimatedTextSpecs ref={ref} progress={progress} specText={specDetails[4]} />
                  )}
                </Scene>
              </Controller>
            </div>
            <div className="spec-details text-muted">
              <Controller>
                <Scene duration="60%" triggerHook="onEnter">
                  {progress => (
                    <AnimatedTextSpecs ref={ref} progress={progress} specText={specDetails[5]} />
                  )}
                </Scene>
              </Controller>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specs;
