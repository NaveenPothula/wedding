import Image from "next/image";

export default function Imgage5() {
  return (
    <div className="w-full md:px-20">
      <div className="relative w-full h-[300px] md:h-[600px] bg-cover md:bg-cover ">
        <Image
          src="/family.png" // Update with your image path
          alt="Descriptive Alt Text"
          // layout="fill"
          height={150}
          width={200}
          // objectFit="cover"
          className="rounded-lg shadow-lg h-full w-full"
        />
      </div>
    </div>
  );
}
