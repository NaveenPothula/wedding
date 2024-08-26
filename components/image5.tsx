import Image from "next/image";

export default function Imgage5() {
  return (
    <div className="w-full md:w-4/5 px-0 mx-0 mb-0">
      <div className="relative w-full h-60 md:h-96">
        <Image
          src="/family.png" // Update with your image path
          alt="Descriptive Alt Text"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
