import React from 'react';

function RetinaHeadline(props) {
  return (
    <div className="position-relative pt-5">
      <div className="col-12 col-md-10 py-5 m-auto">
        <h1 className="retina m-auto">
          <p className="text-muted m-auto">Retina Display</p>
            A big, beautiful workspace.
          <p>For doing big, beautiful work.</p>
        </h1>
      </div>
      <div className="ret-img-content col-12 col-md-10 h-100 pt-5 m-auto">
        <div className="retina-img-1-extend"></div>
        <div className="retina-img-1"></div>
        <div className="retina-quote col-10 col-md-6">
          <h1 className="retina-quote-initial">Boundaries are meant to be pushed.</h1>
          <div className="retina-quote-2">
            <div className="retina-quote-author">Chris Burkard</div>
            <div>Adventure Photographer</div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-10 pt-5 m-auto position-relative">
        <div className="retina-img-2"></div>
        <div className="retina-img-case"></div>
      </div>
    </div>
  );
}

export default RetinaHeadline;
