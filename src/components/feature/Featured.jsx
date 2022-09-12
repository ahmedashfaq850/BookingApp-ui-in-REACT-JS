import "./Featured.style.css";

import React from "react";

function Featured() {
  return (
    <div className="featured">
      <div className="featureditem">
        <div className="feature-img">
          <img src="/images/f1.jpg" alt="" />
        </div>
        <div className="feature-tile">
          <h1>Reno</h1>
          <h2>533 Properties</h2>
        </div>
      </div>

      <div className="featureditem">
        <div className="feature-img">
          <img src="/images/f2.jpg" alt="" />
        </div>
        <div className="feature-tile">
          <h1>Reno</h1>
          <h2>533 Properties</h2>
        </div>
      </div>

      <div className="featureditem">
        <div className="feature-img">
          <img src="/images/f3.jpg" alt="" />
        </div>
        <div className="feature-tile">
          <h1>Reno</h1>
          <h2>533 Properties</h2>
        </div>
      </div>
    </div>
  );
}

export default Featured;
