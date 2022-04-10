import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const LazyImage = ({ image }) => (
  <div>
    <LazyLoadImage
      alt={image.alt}
      src={image.src} // use normal <img> attributes as props
      width={"100%"} />
    <span>{image.caption}</span>
  </div>
);

export default LazyImage;
