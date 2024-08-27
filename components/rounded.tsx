// components/MobileResponsiveComponent.js

import React from "react";
import Image from "next/image";

const MobileResponsiveComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-4 bg-gray-500 px-0">
      {/* First image and name side by side */}
      <div className="flex items-center gap-4 px-0">
        <Image
          src="/nagesh.png" // Replace with your image path
          alt="First Person"
          width={160} // Set the width
          height={160} // Set the height
          className="rounded-full object-cover"
        />
        <p className="text-lg font-semibold text-white italic">Nagesh</p>
      </div>

      {/* Second image and name side by side */}
      <div className="flex items-center gap-4 mt-20">
        <p className="text-xl font-semibold text-white italic">Jaya</p>
        <Image
          src="/jaya.png" // Replace with your image path
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
