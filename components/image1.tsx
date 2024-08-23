// components/ImageComponent.js

import Image from "next/image";

const ImageComponent = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="relative w-80 h-80">
        <Image
          src="/image4.png"
          alt="Sample"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default ImageComponent;
