// components/MobileResponsiveComponent.js

import React from "react";
import Image from "next/image";

const MobileResponsiveComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-4 px-0 bg-blue-50">
      {/* First image and name side by side */}
      <div className="flex items-center gap-4 px-0">
        <Image
          src="/nagesh.jpg" // Replace with your image path
          alt="First Person"
          width={160} // Set the width
          height={160} // Set the height
          className="rounded-full object-cover mr-8"
        />
        <p className="text-2xl font-semibold text-black">Nagesh</p>
      </div>

      {/* Second image and name side by side */}
      <div className="flex items-center gap-4 md:mt-20">
        <p className="text-2xl font-semibold text-black mr-8">Jaya</p>
        <Image
          src="/jaya.jpg" // Replace with your image path
          alt="Second Person"
          width={160} // Set the width
          height={160} // Set the height
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default MobileResponsiveComponent;
