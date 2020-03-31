import React, { forwardRef } from 'react';
import ImageArray from './image-array';

function ImageSequence({ progress }, ref) {
  const images = ImageArray();
  const index = Math.round(progress * (images.length - 1));

  if (images[index][1] !== undefined) {
    return images.map((item, i) => {
      const display = i !== index ? 'none' : 'd-none d-sm-none d-md-block';
      return (
        <span
          className={`hero-img m-auto ${display}`}
          ref={ref}
          key={i}
          style={{
            backgroundImage: `url('${item[0] ? item[0].src : null}')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center'
          }} />
      );
    });
  }
}

export default forwardRef(ImageSequence);
