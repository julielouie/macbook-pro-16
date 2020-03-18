import { useState, useEffect } from 'react';

const defaultState = { image: undefined, status: 'loading' };
export const useImage = (url, crossOrigin) => {
  const res = useState(defaultState);
  const image = res[0].image;
  const status = res[0].status;

  const setState = res[1];

  useEffect(() => {
    if (!url) return;
    const img = document.createElement('img');

    function onload() {
      setState({ image: img, status: 'loaded' });
    }

    function onerror() {
      setState({ image: undefined, status: 'failed' });
    }

    img.addEventListener('load', onload);
    img.addEventListener('error', onerror);
    crossOrigin && (img.crossOrigin = crossOrigin);
    img.src = url;

    return () => {
      img.removeEventListener('load', onload);
      img.removeEventListener('error', onerror);
      setState(defaultState);
    };
  }, [url, crossOrigin]);

  return [image, status];
};
