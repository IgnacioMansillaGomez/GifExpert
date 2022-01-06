import React, { useState } from "react";
import { AddCategory } from "../add-category/add-category.component";

import { GifGrid } from "../gif-grid/gif-grid.component";
import { Header } from "../header/header.component";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  return (
    <>
      <Header />
      <AddCategory setCategories={setCategories} />
      <GifGrid />
      <ol>
        {categories.map((item) => {
          return <GifGrid category={item} key={item} />;
        })}
      </ol>
    </>
  );
};
