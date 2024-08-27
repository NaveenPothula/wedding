import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[100vh] md:h-[70vh] bg-cover bg-center py-0"
      style={{ backgroundImage: 'url("/start.png")' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-0 flex flex-col justify-start items-center">
        <div className="text-center px-4 mt-20 md:mt-20">
          <h1 className="text-white text-sm md:text-4xl font-bold leading-tight font-roboto italic">
            Celebrating 25 years of togetherness
          </h1>
          <h1 className="text-orange-500 text-xl md:text-4xl font-bold leading-tight">
            Nagesh and Jaya
          </h1>
        </div>
      </div>
    </section>
  );
}
