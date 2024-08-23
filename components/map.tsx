// components/DummyTextWithButtonComponent.js

import Link from "next/link";
import { FaMapMarkedAlt } from "react-icons/fa";

const Map = () => {
  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Dummy Text and Map Icon</h2>
      <p className="text-gray-700 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        scelerisque, nulla eu euismod bibendum, purus purus egestas quam, et
        faucibus elit ligula non lorem. Sed vitae arcu vel ligula volutpat
        vulputate. Nulla facilisi. Aenean vel nisi ut urna convallis venenatis.
        Vivamus faucibus ligula vel nulla faucibus, et ultrices enim pharetra.
      </p>
      <p className="text-gray-600 mb-4">
        Phasellus eget risus velit. Aenean condimentum, sem a vulputate
        vehicula, nulla erat tristique arcu, in consequat eros urna a nulla.
        Integer vel consequat libero. Suspendisse potenti.
      </p>
      <p className="text-gray-600 mb-4">
        Phasellus eget risus velit. Aenean condimentum, sem a vulputate
        vehicula, nulla erat tristique arcu, in consequat eros urna a nulla.
        Integer vel consequat libero. Suspendisse potenti.
      </p>
      {/* Centering the button with flex utilities */}
      <div className="flex justify-center">
        <Link href="https://www.google.com/maps" passHref>
          <button className="inline-flex items-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            <FaMapMarkedAlt className="mr-2 text-xl" />
            View Map
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Map;
