import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  console.log(url);

  return (
    <>
      <li>
        <span>{id}</span>
        <p>{title}</p>
        <img src={url} />
      </li>
    </>
  );
};
