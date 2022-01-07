import { useState, useEffect } from "react";
import { getGifs } from "../api/GetGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getGifs().then((imgs) => {
      setTimeout(() => {
        console.log(imgs);
        setState({
          data: imgs,
          loading: false,
        });
      }, 3000);
    });
  }, [category]);

  return state;
};
