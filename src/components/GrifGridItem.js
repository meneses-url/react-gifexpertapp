import React from "react";

export const GrifGridItem = ({ urlImg, title }) => {
  console.log(urlImg.url);
  return (
    <div className="card  animate__animated animate__fadeIn">
      <img src={urlImg.url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
