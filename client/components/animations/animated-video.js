import React, { forwardRef } from 'react';

function AnimatedVideo({ progress }, ref) {
  // const expedite = progress * 3;
  // const matrix = progress === 1 ? 0 : 40 - (progress * 40);
  // const opacity = progress === 1 ? 1 : expedite - 1;

  if (window.innerWidth > 767) {
    if (progress === 1) {
      document.querySelector('#specVid').play();
    }
  }

  const display = window.innerWidth > 767
    ? <video ref={ref} width="100%" height="100%" id="specVid">
      <source src="./assets/media/large.mp4" type="video/mp4" />
    </video>
    : <div className="specs-img-end" style={{
      backgroundImage: 'url(./assets/hero_stats_endframe__fphtv5z0kgmu_large.jpg)'
    }}></div>;
  return display;
}

export default forwardRef(AnimatedVideo);
