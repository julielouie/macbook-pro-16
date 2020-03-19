import React from 'react';

function VideoModal(props) {
  return (
    <div className="video-modal position-fixed d-flex vh-100 vw-100">
      <div className="h-100 w-100 bg-white border">
        <div className="close-modal" onClick={() => props.toggleModal()}>X</div>
        <div>Some Text for Now</div>
      </div>
    </div>
  );
}

export default VideoModal;
