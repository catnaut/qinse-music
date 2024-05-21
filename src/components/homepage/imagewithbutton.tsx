import React from 'react';
import Link from 'next/link';

interface ImageWithButtonProps {
  image: string;
  alt: string;
  link: string;//添加链接属性
  size: number;
  className?: string; // 添加 className 属性
}

const ImageWithButton: React.FC<ImageWithButtonProps> = ({ image, alt, link, size,className }) => {
  return (
    <div className={`image-with-button ${className}`}>
      {/* 将图像包裹在链接中 */}
      <Link href={link}>
          <img src={image} alt={alt} className="image" style={{ width: size, height: 'auto' }} />
      </Link>
    </div>
  );
};

export default ImageWithButton;
