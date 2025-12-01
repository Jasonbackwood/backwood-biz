import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO SECTION */}
      <section
        className="relative w-full h-[90vh] flex flex-col justify-center items-center text-center px-6"
        style={{
          backgroundImage: "url('/hero-forest.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center">

          {/* LOGO */}
          <Image
            src="/logo.png"
            alt="Backwood Illuminated Logo"
            width={220}
            height={220}
            className="mb-4 drop-shadow-xl"
          />

          {/* TITLE */}
          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Backwood Illuminated
          </h1>

          <p className="text-xl mt-4 text-gray-300 max-w-2xl">
            High-Detail Laser Engraving for Corporate, Industrial & Personal Projects
          </p>

          {/* HERO BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="/submit-project"
              className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded shadow-lg transition"
            >
              Submit a Project / Custom Quote
            </a>
            <a
              href="/contact"
              className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded shadow-lg transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

     {/* -------------------- RECENT WORK SECTION -------------------- */}
<section className="bg-zinc-950 py-20 px-6">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold text-center mb-12">
      Recent Work
    </h2>

    {/* Image Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

      {[
        "/gallery/8569108F-9B84-4699-B7E0-8DEDD6225975.JPEG",
        "/gallery/BEAA76F1-E865-460D-8C25-7E2326CCB27D.JPEG",
        "/gallery/C8A9A17D-212E-46CF-BAD2-52F13F5EC417.JPEG",
      ].map((src, index) => (
        <div
          key={index}
          className="relative aspect-square rounded-lg overflow-hidden"
        >
          <Image
            src={src}
            alt={`Recent Work ${index + 1}`}
            fill
            className="object-cover hover:scale-105 transition duration-300"
          />
        </div>
      ))}

    </div>

    {/* Button to full gallery page */}
    <div className="text-center mt-10">
      <Link
        href="/engraving-gallery"
        className="inline-block px-8 py-3 text-black font-semibold bg-amber-500 rounded-md hover:bg-amber-400 transition"
      >
        View Full Gallery
      </Link>
    </div>

  </div>
</section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-900 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>

        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
          We specialize in high-detail laser engraving using CO₂, UV, and Fiber technology.
          From corporate branding to custom industrial tags, firearms, tumblers, hat patches,
          and more — we deliver precision, durability, and fast turnaround.
        </p>
      </section>

      {/* START PROJECT TODAY */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Start Your Project Today</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
          Whether you need a single custom piece or bulk production, Backwood Illuminated
          delivers top-tier engraving with rugged Utah craftsmanship.
        </p>

        <a
          href="/submit-project"
          className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-8 rounded shadow-lg transition"
        >
          Get a Custom Quote
        </a>
      </section>
    </main>
  );
}
