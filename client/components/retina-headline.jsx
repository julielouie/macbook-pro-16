import React from 'react';

function RetinaHeadline(props) {
  return (
    <div className="position-relative">
      <div className="container">
        <h1 className="retina col-12">
          <p className="text-muted">Retina Display</p>
          A big, beautiful workspace.
          <p>For doing big, beautiful work.</p>
        </h1>
      </div>
      <div className="ret-img-content h-100">
        <div className="retina-img-1 col-md-8"></div>
        <div className="retina-quote .d-none .d-xl-none">
          Boundaries are meant to be pushed.
          <span>Chris Burkard</span>
          <span>Adventure Photographer</span>
        </div>
      </div>
      <div className="retina-img-2"></div>
    </div>
  );
}

export default RetinaHeadline;
