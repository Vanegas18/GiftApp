/* eslint-disable react/prop-types */

import { GiftItem } from "./GiftItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading ? <h2>Cargando...</h2> : null}
      <div className="card-grid">
        {images.map((img) => (
          <GiftItem key={img.id} title={img.title} url={img.url} />
        ))}
      </div>
    </>
  );
};
