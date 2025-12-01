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

      {/* RECENT WORK SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Recent Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Image
            src="/gallery/sample1.jpg"
            width={400}
            height={300}
            alt="Sample Work 1"
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/gallery/sample2.jpg"
            width={400}
            height={300}
            alt="Sample Work 2"
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/gallery/sample3.jpg"
            width={400}
            height={300}
            alt="Sample Work 3"
            className="rounded-lg shadow-lg"
          />
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
