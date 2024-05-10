import React from 'react';
import Link from 'next/link';

interface ImageWithButtonProps {
  image: string;
  alt: string;
  link: string;//添加链接属性
  size: number;
  style?: React.CSSProperties; // 添加样式属性
}

const ImageWithButton: React.FC<ImageWithButtonProps> = ({ image, alt, link, size, style }) => {
  return (
    <div className="image-with-button">
      {/* 将图像包裹在链接中 */}
      <Link href={link}>
          <img src={image} alt={alt} className="image" style={{ width: size, height: 'auto' }} />
      </Link>
    </div>
  );
};

export default ImageWithButton;
