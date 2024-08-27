// components/DummyTextWithButtonComponent.js

import Link from "next/link";
import { FaMapMarkedAlt } from "react-icons/fa";

const Map = () => {
  return (
    <div className="px-2 py-0">
      <h2 className="text-2xl font-bold mb-4">
        Bless our parents with your presence and warm wishes
      </h2>
      <p className="text-black-700 mb-4">
        <span className="font-bold text-white">Venue: </span>
        Bommana Ramachandra Kalyana Manadapam. Rajahmundry, Andhra Pradesh,
        Pincode-533101
      </p>

      {/* Centering the button with flex utilities */}
      <div className="flex justify-center pb-8">
        <Link href="https://g.co/kgs/WSuCq4x" passHref>
          <button className="inline-flex items-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-2">
            <FaMapMarkedAlt className="mr-2 text-xl" />
            View Map
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Map;
