import React from 'react';

function RetinaSummary(props) {
  return (
    <div className="summary col-12 col-md-10 pt-5 m-auto">
      <h2 className="summary-description text-muted pt-5">
        The new MacBook Pro features a stunning <span className="highlight">16-inch Retina display</span>
        — the largest Retina display ever in a Mac notebook.
        It produces <span className="highlight">500 nits of brightness</span> for spectacular highlights and bright whites,
        while delivering deep blacks thanks to the precise photo alignment of liquid crystal molecules.
        And the <span className="highlight">P3 wide color</span> gamut enables brilliant, true-to-life images and video.
        So no matter where you are, you’ll see your work in the best possible light.
      </h2>
    </div>
  );
}

export default RetinaSummary;
