import { useState } from "react";
import ReactImageZoom from "react-image-zoom";

const ProductImageZoomSlider = ({ imageUrl, zoomProps }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const handleMouseMove = (e) => {
    const image = e.target;
    const boundingRect = image.getBoundingClientRect();
    const offsetX = e.nativeEvent.offsetX;
    const offsetY = e.nativeEvent.offsetY;
    const relativeX = offsetX / boundingRect.width;
    const relativeY = offsetY / boundingRect.height;
    // Calculate the zoom level based on mouse position
    const maxZoom = 3; // You can adjust the maximum zoom level
    const newZoom = 1 + (maxZoom - 1) * relativeX;
    setZoomLevel(newZoom);
  };
  const handleMouseLeave = () => {
    setZoomLevel(1);
  };

  return (
    <ReactImageZoom
      {...zoomProps}
      img={imageUrl}
      width={440}
      height={440}
      zoomWidth={1000}
      zoomPosition="original"
      zoomScale={zoomLevel} // Apply the calculated zoom level
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    />
  );
};
export { ProductImageZoomSlider };