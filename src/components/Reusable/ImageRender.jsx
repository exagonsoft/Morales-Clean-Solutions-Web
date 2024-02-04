"use client";

import React, { useEffect, useState } from "react";

const ImageRender = ({ imageUrl, defaultImageUrl, altText, ref= null, classNames }) => {
  const [imageSrc, setImageSrc] = useState(defaultImageUrl);

  const handleImageLoad = () => {
    if(imageUrl){
        setImageSrc(imageUrl);
    }
  };

  useEffect(() => {}, [imageUrl]);

  return <img id={imageUrl} src={imageSrc} alt={altText} onLoad={handleImageLoad} className={classNames} ref={ref}/>;
};

export default ImageRender;
