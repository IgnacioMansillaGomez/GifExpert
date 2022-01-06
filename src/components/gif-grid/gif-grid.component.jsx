import React, { useEffect, useState } from "react";
import { GifGridItem } from "../gif-grid-item/gif-grid-item.component";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=Superman&limit=10&api_key=AYBHCQAjcwZulo7304d0nJKjLCBDfZmw&offset=0&rating=g&lang=es";

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images.downsized.url,
      };
    });
    setImages(gifs);
  };

  return (
    <div>
      <h3>{category}</h3>

      {images.map((img) => (
        <GifGridItem key={img.id} url={img.url} title={img.title} />
      ))}
    </div>
  );
};
