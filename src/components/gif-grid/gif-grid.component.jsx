import React from "react";

// import { GifGridItem } from "../gif-grid-item/gif-grid-item.component";

import { useFetchGifs } from "../../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { loading } = useFetchGifs();
  // useEffect(() => {
  //   GetGifs(category).then((img) => {
  //     setImages(img);
  //   });
  // }, []);

  return (
    <div className="container">
      <h3>{category}</h3>
      {loading ? "Cargando" : "Datos Cargados"}
      {/* <div className="row">
        <div className="col"></div>
      </div>
      <div className="row flex-row ">
        {images.map((img) => (
          <GifGridItem key={img.id} url={img.url} title={img.title} />
        ))}
      </div> */}
    </div>
  );
};
