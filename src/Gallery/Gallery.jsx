import React from "react";
import "./Gallery.css";

export default function Gallery({ images }) {
  return (
    <ul className="img-container">
      {images.map(({ id, download_url }, index) => {
        return (
          <li className={`img-item item${index + 1}`} key={id}>
            <img src={download_url} alt={download_url} />
          </li>
        );
      })}
    </ul>
  );
}
