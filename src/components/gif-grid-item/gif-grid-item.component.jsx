import React from "react";

export const GifGridItem = ({ title, url }) => {
  return (
    <div className="col-3 flex-1">
      <div className="card ">
        <img
          src={url}
          className="card-img-top animate__rubberBand"
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-subtitle">{title}</h5>
        </div>
      </div>
    </div>
  );
};
