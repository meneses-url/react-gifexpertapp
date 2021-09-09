import React from "react";
import { useFetchGifs } from "../Hooks/useFetchGifs";
// import React, { useState, useEffect } from "react";

import { GrifGridItem } from "./GrifGridItem";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);
  console.log(loading);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>

      {loading && (
        <p className="animate__animated animate__flash">Loading...</p>
      )}

      <div className="card-grid">
        {data.map((img) => (
          <GrifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
