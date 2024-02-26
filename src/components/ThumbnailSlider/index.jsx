import React, { useState } from "react";
import Slider from "react-slick";
// Rest of your code...
const ThumbnailSlider = ({ thumbnailImages, onThumbnailClick }) => {
  const settings = {
    infinite: true,
    slidesToShow: thumbnailImages?.length || 4,
    slidesToScroll: 1,
  };
  const [activeThumbnailIndex, setActiveThumbnailIndex] = useState(0);
  const handleClick = (index) => {
    onThumbnailClick(index);
    setActiveThumbnailIndex(index);
  };
  // onThumbnailClick = onThumbnailClick || (() => {});
  return (
    <Slider className="w-full product-slick" {...settings}>
      {thumbnailImages.map((imageUrl, index) => (
        <div
          key={index}
          className={`w-full h-full rounded-lg overflow-hidden ${
            index === activeThumbnailIndex ? "border-2 border-black-900" : ""
          }`}
          onClick={() => handleClick(index)}
        >
          <img src={imageUrl} alt={`Thumbnail ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export { ThumbnailSlider };