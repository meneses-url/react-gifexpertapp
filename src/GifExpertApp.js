import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categorias, setCategorias] = useState(["caballeros del zodiaco"]);

  // const handleAdd = (params) => {
  //   setCategorias([...categorias, "Power Rangers"]);
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategorias={setCategorias} />
      <hr />

      <ol>
        {categorias.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

GifExpertApp.propTypes = {};

export default GifExpertApp;
