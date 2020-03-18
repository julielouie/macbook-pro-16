import React, { forwardRef } from 'react';
import ImageArray from './image-array';

function ImageSequence({ progress }, ref) {
  const newImages = ImageArray();
  const index = Math.round(progress * 1 * (newImages.length - 1));

  if (newImages[index][1] !== undefined) {
    return newImages.map((item, i) => {
      const display = i !== index ? 'none' : 'd-none d-md-block';
      return (
        <span className={`hero-img m-auto ${display}`} ref={ref} key={i}
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
