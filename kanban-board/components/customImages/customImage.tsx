// CustomImage.tsx (Create a new component for interactive images)
import React from "react";
import Image from "next/image";
import PlusImage from "../../images/plusIcon.png";

interface ImageProps {
    alt:string,
    className:string,
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void; // Update the type to accept the correct event type
}

const CustomImage: React.FC<ImageProps> = ({ onClick,alt,className }) => {
  return (
      <Image
        src={PlusImage}
        alt={alt}
        className={className}
        width={30}
        height={30}
        onClick={onClick}
      />
  );
};

export default CustomImage;
