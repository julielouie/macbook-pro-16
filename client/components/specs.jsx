import React, { useRef } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import AnimatedTextSpecs from './animations/animated-text-specs';

function Specs(props) {
  const ref = useRef();
  return (
    <div className="specs m-auto pt-5">
      <div className="specs-img">
        <span>
          <video width="100%" height="100%" autoPlay>
            <source src="./assets/media/large.mp4" type="video/mp4" />
          </video>
        </span>
        <div className="specs-img-end"></div>
      </div>
      <div className="col-12 col-md-10 col-lg-8 m-auto pt-5 h-100">
        <div className="specs-contain d-flex">
          <div className="left px-0 col-12 col-md-4">
            <div className="spec-details text-muted">
              <Controller>
                <Scene duration="200%" triggerHook="onEnter">
                  {progress => (
                    <AnimatedTextSpecs ref={ref} progress={progress} />
                  )}
                </Scene>
              </Controller>
              <hr />
            </div>
            <div className="spec-details text-muted">
              <span className="spec">Up to 8TB SSD storage</span>
              <span className="break">— the highest capacity in any notebook.</span>
              <hr />
            </div>
            <div className="spec-details text-muted">
              <span className="spec">AMD Radeon Pro 5000M series graphics</span>
              <span className="break">for fast rendering and seamless playback.</span>
              <hr className="d-block d-sm-block d-md-none" />
            </div>
          </div>
          <div className="center px-0 col-12 col-md-4"></div>
          <div className="right px-0 col-12 col-md-4">
            <div className="spec-details text-muted">
              <span className="spec">Up to 8-core processor</span>
              <span className="break">to power through intensive workloads.</span>
              <hr />
            </div>
            <div className="spec-details text-muted">
              <span className="spec">Up to 64GB of memory</span>
              <span className="break">for editing large files and smooth multitasking.</span>
              <hr />
            </div>
            <div className="spec-details text-muted">
              <span className="spec">Six-speaker sound system and studio-quality mics</span>
              <span className="break">for dramatic sound and superclean recordings.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specs;
