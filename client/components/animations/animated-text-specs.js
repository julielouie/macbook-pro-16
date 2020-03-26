/* eslint-disable no-console */
import React, { forwardRef } from 'react';

function AnimatedTextSpecs({ progress }, ref) {
  console.log(progress);
  const expedite = progress * 3;
  const matrix = progress === 0 ? 20 : 20 - (expedite * 1);
  const opacity = progress === 0 ? 0 : 0 + progress;

  return (
    <div
      ref={ref}
      style={{
        transform: `translate3d(0, ${matrix}px, 0)`,
        opacity: opacity
      }}>
      <span className="spec">16-inch Retina display</span>
      <span className="break">for an immersive viewing experience.</span>
    </div>
  );
}

export default forwardRef(AnimatedTextSpecs);
