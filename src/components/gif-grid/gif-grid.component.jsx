import React from "react";

import { GifGridItem } from "../gif-grid-item/gif-grid-item.component";

import { useFetchGifs } from "../../hooks/useFetchGifs";
import { Loading } from "../loading/loading.component";

export const GifGrid = ({ category }) => {
  const { loading, data: images } = useFetchGifs(category);

  return (
    <div className="container">
      <h3>{category}</h3>
      {loading && <Loading />}
      <div className="row flex-row ">
        {images.map((img) => (
          <GifGridItem key={img.id} url={img.url} title={img.title} />
        ))}
      </div>
    </div>
  );
};
