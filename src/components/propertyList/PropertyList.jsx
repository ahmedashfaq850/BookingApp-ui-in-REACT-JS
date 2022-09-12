import "./PropertyList.style.css";

import React from "react";

function PropertyList() {
  return (
    <div className="property-list">
      <div className="property-list-item">
        <div className="prop-list-img">
          <img src="/images/hotel.jpg" alt="" />
        </div>
        <div className="prop-tile">
          <h3>Hotels</h3>
          <p>233 hotels</p>
        </div>
      </div>

      <div className="property-list-item">
        <div className="prop-list-img">
          <img src="/images/appartment.jpg" alt="" />
        </div>
        <div className="prop-tile">
          <h3>Appartments</h3>
          <p>105 appartments</p>
        </div>
      </div>

      <div className="property-list-item">
        <div className="prop-list-img">
          <img src="/images/resorts.jpg" alt="" />
        </div>
        <div className="prop-tile">
          <h3>Resorts</h3>
          <p>115 resorts</p>
        </div>
      </div>

      <div className="property-list-item">
        <div className="prop-list-img">
          <img src="/images/villas.jpg" alt="" />
        </div>
        <div className="prop-tile">
          <h3>Villas</h3>
          <p>150 villas</p>
        </div>
      </div>

      <div className="property-list-item">
        <div className="prop-list-img">
          <img src="/images/cabin.jpg" alt="" />
        </div>
        <div className="prop-tile">
          <h3>Cabins</h3>
          <p>112 cabins</p>
        </div>
      </div>
    </div>
  );
}

export default PropertyList;
