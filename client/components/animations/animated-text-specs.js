import React, { forwardRef } from 'react';

function AnimatedTextSpecs({ progress, specText }, ref) {
  const expedite = progress * 3;
  const matrix = progress === 1 ? 0 : 40 - (progress * 40);
  const opacity = progress === 1 ? 1 : expedite - 1;

  const displayMed = specText[0].includes('AMD') ? 'd-block d-sm-block d-md-none' : null;
  const displaySm = specText[0].includes('Six-speaker') ? 'd-none' : null;
  return (
    <div
      ref={ref}
      style={{
        transform: `translate3d(0, ${matrix}px, 0)`,
        opacity: opacity
      }}>
      <span className="spec">{specText[0]}</span>
      <span className="break">{specText[1]}</span>
      <hr className={displayMed + ' ' + displaySm} />
    </div>
  );
}

export default forwardRef(AnimatedTextSpecs);
