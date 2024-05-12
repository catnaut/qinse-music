import React from 'react';
import useSWR from 'swr';//(暂时不用swr先，后面再写api)
import ImageWithButton from './imagewithbutton';

interface ImageData {
  url: string;
  alt: string;
  link: string;
}

interface PictureProps {
  imageData: ImageData[];
}

const Picture: React.FC<PictureProps> = ({ imageData }) => {
  return (
    <div className="flex">
      {imageData.map((image: ImageData, index: number) => (
        <ImageWithButton
          key={index}
          image={image.url}
          alt={image.alt}
          link={image.link}
          size={200}
          className="w-48 h-auto mr-16"
        />
      ))}
    </div>
  );
};

export default Picture;
