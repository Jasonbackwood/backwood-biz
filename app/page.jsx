"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO SECTION */}
      <section
        className="relative h-[90vh] bg-cover bg-center flex flex-col items-center justify-center text-center"
        style={{ backgroundImage: "url('/foggybg.png')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        <div className="relative z-10">
          <img
            src="/logo.png"
            alt="Backwood Illuminated Logo"
            className="mx-auto mb-6 w-64 drop-shadow-2xl"
          />

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Backwood Illuminated
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            High-Detail Laser Engraving for Corporate, Industrial & Personal Projects
          </p>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <Link
              href="/submit-project"
              className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition"
            >
              Submit a Project / Custom Quote
            </Link>

            <Link
              href="/contact"
              className="px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* RECENT WORK */}
      <section id="recent-work" className="py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-10">Recent Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* IMAGE 1 */}
            <div className="rounded-lg overflow-hidden border border-gray-700 shadow-lg">
              <img
                src="/gallery/8569108F-9B84-4699-B7E0-8DEDD6225975.JPEG"
                className="w-full h-72 object-cover"
                alt="Gallery Image 1"
              />
            </div>

            {/* IMAGE 2 */}
            <div className="rounded-lg overflow-hidden border border-gray-700 shadow-lg">
              <img
                src="/gallery/BEAA76F1-E865-460D-8C25-7E2326CCB27D.JPEG"
                className="w-full h-72 object-cover"
                alt="Gallery Image 2"
              />
            </div>

            {/* IMAGE 3 */}
            <div className="rounded-lg overflow-hidden border border-gray-700 shadow-lg">
              <img
                src="/gallery/C8A9A17D-212E-46CF-BAD2-52F13F5EC417.JPEG"
                className="w-full h-72 object-cover"
                alt="Gallery Image 3"
              />
            </div>

          </div>

          <div className="mt-10">
            <Link
              href="/gallery"
              className="px-8 py-3 bg-green-600 hover:bg-green-700 transition text-white font-semibold rounded-lg"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
