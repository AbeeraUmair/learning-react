import Image from "next/image";
import React from "react";

interface ImageListProps {
  images: Array<{
    id: string;
    urls: { small: string };
    description?: string;
    alt_description?: string;
  }>;
}


const ImageList: React.FC<ImageListProps> = ({ images }) => {
  console.log(images);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7 p-4 mb-10
    ">
      {images.map((image) => (
        <div key={image.id} className="bg-slate-200 mb-4 rounded-lg  shadow-md transition-transform duration-300 hover:scale-105">
          <Image
            width={100}
            height={100}
            src={image.urls.small}
            alt={image.alt_description || "Image"}
            className="w-full h-[14rem]  object-cover rounded-t-lg "
          />
         <p className="mt-4 text-sm text-center text-transform:normal-case text-gray-600">
            {image.alt_description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
