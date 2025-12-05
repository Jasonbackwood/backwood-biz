import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center">
      <Image
        src="/optimized_hero-forest.webp"
        alt="Backwood Illuminated Forest Hero"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        <Image
          src="/optimized_logo.webp"
          alt="Backwood Illuminated Logo"
          width={320}
          height={320}
          priority
        />
      </div>
    </section>
  );
}
