import { useState, useEffect } from 'react';

const defaultState = { image: undefined, status: 'loading' };

export const makeImg = (url, xOrigin) => {
  const resource = useState(defaultState);

  const image = resource[0].image;
  const status = resource[0].status;

  const setState = resource[1];

  useEffect(() => {
    if (!url) return;
    const img = document.createElement('img');

    function onLoad() {
      setState({ image: img, status: 'loaded' });
    }

    function onError() {
      setState({ image: undefined, status: 'failed' });
    }

    img.addEventListener('load', onLoad);
    img.addEventListener('error', onError);

    xOrigin && (img.xOrigin = xOrigin);

    img.src = url;

    return () => {
      img.removeEventListener('load', onLoad);
      img.removeEventListener('error', onError);
      setState(defaultState);
    };

  }, [url, xOrigin]);

  return [image, status];
};
