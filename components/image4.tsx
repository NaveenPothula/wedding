import Image from "next/image";

export default function ResponsiveImage() {
  return (
    <div className="w-full md:w-4/5 px-0 mx-0">
      <div className="relative w-full h-64 md:h-96">
        <Image
          src="/shoot.jpg" // Update with your image path
          alt="Descriptive Alt Text"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
