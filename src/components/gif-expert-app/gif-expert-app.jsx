import React, { useState } from "react";
import { AddCategory } from "../add-category/add-category.component";

import { GifGrid } from "../gif-grid/gif-grid.component";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Gif Expert App</h1>
          <hr />
          <AddCategory setCategories={setCategories} />
        </div>
      </div>
      <div className="row">
        <ol>
          {categories.map((item) => {
            return <GifGrid category={item} key={item} />;
          })}
        </ol>
      </div>
    </div>
  );
};
