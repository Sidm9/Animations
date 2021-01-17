import React from "react";

const Planet = (props) => {
  return (
    <>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {/* SLIDE ONE */}
          <div className="swiper-slide">
            <div className="slide-number">
              <p>
                <span>{props.name}</span>
              </p>
            </div>
            <div className="slide-text">
              <h4>
                <span>{props.number}</span>
              </h4>
            </div>
            <div className="slide-detail">
              <p>
                <span>{props.desc}</span>
              </p>
            </div>
            <div className="slide-detail-facts">
              <div>
                <h5>
                  ORBIT PERIOD:
                  <span style={{ opacity: "0.8" }}>87.97 Earth Days</span>
                </h5>
                <h5>
                  KNOWN MOONS: <span style={{ opacity: "0.8" }}>None</span>
                </h5>
              </div>
            </div>
            <div className="slide-img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Planet;
