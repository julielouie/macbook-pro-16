import React from 'react';

function Hero(props) {
  return (
    <div className="col-10 m-auto vh-100 position-relative">
      <div className="hero-text pt-5 m-auto">
        <h2 className="title text-center">MacBook Pro</h2>
        <h1 className="tagline text-center">
          The best for
          <span className="tagline break">the brightest.</span>
        </h1>
      </div>
      <div className="hero-img m-auto"></div>
    </div>
  );
}

export default Hero;
