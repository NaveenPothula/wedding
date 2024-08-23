// components/ImageComponent.js

import Image from "next/image";

const ImageComponent = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <Image
        src="/image6.png"
        alt="Sample"
        layout="intrinsic"
        width={800}
        height={400}
        className="rounded shadow-lg"
      />
    </div>
  );
};

export default ImageComponent;
