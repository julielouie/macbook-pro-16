import React, { forwardRef } from 'react';

function AnimatedText({ progress }, ref) {
  const expedite = progress * 3;
  const matrix = progress === 0 ? 0 : 0 - (expedite * 320);
  const opacity = progress === 0 ? 1 : 1 - progress;

  return (
    <div
      ref={ref}
      className="hero-text position-absolute pt-5 w-100 d-flex flex-column text-center d-none d-md-block"
      style={{
        transform: `matrix(1, 0, 0, 1, 0, ${matrix})`,
        opacity: opacity
      }}>
      <h2 className="title">MacBook Pro</h2>
      <h1 className="tagline">
        The best for
        <span className="tagline break">the brightest.</span>
      </h1>
    </div>
  );
}

export default forwardRef(AnimatedText);
