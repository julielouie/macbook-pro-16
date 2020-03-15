import React from 'react';

function FilmSummary(props) {
  return (
    <div className="summary col-10 m-auto">
      <h2 className="summary-description text-muted">
        Designed for those who defy limits and change the world,
        the new MacBook Pro is by far the most powerful notebook we’ve ever made.
        With an immersive 16-inch Retina display, superfast processors, next-generation graphics,
        the largest battery capacity ever in a MacBook Pro,
        a new Magic Keyboard, and massive storage,
        it’s the ultimate pro notebook for the ultimate user.
      </h2>
      <h5 className="video">Watch the film <img src="./public_assets/play-button.svg" alt="Play Button" className="play" />
      </h5>
    </div>
  );
}

export default FilmSummary;
