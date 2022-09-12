import "./RatingList.css";

import React from "react";

function RatingList() {
  return (
    <div className="ratinglist-container">
      <div className="ratinglist-item">
        <div className="ratinglist-img">
          <img src="/images/house3.jpg" alt="" />
        </div>
        <div className="ratinglist-tile">
          <p>KeizersgrachtSuite471</p>
          <p>Amsterdam</p>
          <h4>Starting from PKR 210,882</h4>
          <div className="rating-row">
            <h4>9.4</h4>
            <p>Wonderful .</p>
            <p>503 reviews</p>
          </div>
        </div>
      </div>

      <div className="ratinglist-item">
        <div className="ratinglist-img">
          <img src="/images/house2.jpg" alt="" />
        </div>
        <div className="ratinglist-tile">
          <p>KeizersgrachtSuite471</p>
          <p>Amsterdam</p>
          <h4>Starting from PKR 210,882</h4>
          <div className="rating-row">
            <h4>9.4</h4>
            <p>Wonderful .</p>
            <p>503 reviews</p>
          </div>
        </div>
      </div>

      <div className="ratinglist-item">
        <div className="ratinglist-img">
          <img src="/images/house3.jpg" alt="" />
        </div>
        <div className="ratinglist-tile">
          <p>KeizersgrachtSuite471</p>
          <p>Amsterdam</p>
          <h4>Starting from PKR 210,882</h4>
          <div className="rating-row">
          <h4>9.4</h4>
            <p>Wonderful .</p>
            <p>503 reviews</p>
          </div>
        </div>
      </div>

      <div className="ratinglist-item">
        <div className="ratinglist-img">
          <img src="/images/house4.jpg" alt="" />
        </div>
        <div className="ratinglist-tile">
          <p>KeizersgrachtSuite471</p>
          <p>Amsterdam</p>
          <h4>Starting from PKR 210,882</h4>
          <div className="rating-row">
          <h4>9.4</h4>
            <p>Wonderful .</p>
            <p>503 reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RatingList;
