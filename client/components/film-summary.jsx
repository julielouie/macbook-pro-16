import React from 'react';

function FilmSummary(props) {
  return (
    <div className="summary col-12 col-md-10 col-lg-8 m-auto">
      <h2 className="summary-description text-muted">
        Designed for those who defy limits and change the world,
        the new MacBook Pro is by far the most powerful notebook we’ve ever made.
        With an immersive 16-inch Retina display, superfast processors, next-generation graphics,
        the largest battery capacity ever in a MacBook Pro,
        a new Magic Keyboard, and massive storage,
        it’s the ultimate pro notebook for the ultimate user.
      </h2>
      <h5 className="video link"
        onClick={() => props.toggleModal()}>
        Watch the film
        <i className="link far fa-play-circle ml-2"></i>
      </h5>
    </div>
  );
}

export default FilmSummary;
