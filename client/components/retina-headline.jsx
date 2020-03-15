import React from 'react';

function RetinaHeadline(props) {
  return (
    <div className="container vw-100 vh-100">
      <div className="retina text-muted">Retina Display</div>
      <div className="retina-description">
        A big, beautiful workspace.
        <span>For doing big, beautiful work.</span>
      </div>
      <div className="retina-img-1"></div>
      <div className="retina-img-2"></div>
    </div>
  );
}

export default RetinaHeadline;
