import React from 'react';

function VideoModal(props) {
  return (
    <div className="video-modal position-fixed d-flex vh-100 vw-100">
      <div className="h-100 w-100 bg-white border">
        <div className="container">
          <div className="video-player">
            <i className="close-modal position-absolute fas fa-times" onClick={() => props.toggleModal()}></i>
            <video width="100%" height="100%" autoPlay controls>
              <source src="./assets/macbookpro-16-product-tpl-cc-us-2019_1280x720h.mp4" type="video/mp4" />
              Your browser does not support this video.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoModal;
