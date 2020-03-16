import React from 'react';

function Specs(props) {
  return (
    <div className="specs m-auto pt-5">
      <div className="specs-img"></div>
      <div className="col-12 col-md-10 m-auto pt-5 h-100">
        <div className="spec-columns d-flex">
          <div className="left px-0 col-12 col-md-4">
            <div className="spec-details text-muted">
              <span className="spec">16-inch Retina display</span>
              <span className="break">for an immersive viewing experience.</span>
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
