import React from 'react';

function RetinaHeadline(props) {
  return (
    <div className="position-relative pt-5">
      <div className="container pt-5">
        <h1 className="retina col-12">
          <p className="text-muted">Retina Display</p>
          A big, beautiful workspace.
          <p>For doing big, beautiful work.</p>
        </h1>
      </div>
      <div className="ret-img-content h-100 mt-5 pt-5">
        <div className="retina-img-1 col-md-10"></div>
        <div className="retina-quote col-md-5 .d-none .d-xl-none">
          <h1 className="retina-quote-initial">Boundaries are meant to be pushed.</h1>
          <div className="retina-quote-2">
            <div className="retina-quote-author">Chris Burkard</div>
            <div>Adventure Photographer</div>
          </div>
        </div>
      </div>
      <div className="retina-img-2"></div>
    </div>
  );
}

export default RetinaHeadline;
