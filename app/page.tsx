"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <main className="w-full min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <section
        className="relative w-full h-screen flex flex-col justify-center items-center text-center"
        style={{
          backgroundImage: "url('/hero-forest.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex flex-col items-center px-4">
          <Image
            src="/logo.png"
            alt="Backwood Illuminated Logo"
            width={300}
            height={300}
            className="mb-6 drop-shadow-xl"
            priority
          />

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Backwood Illuminated
          </h1>

          <p className="text-lg md:text-2xl mb-10 text-gray-200">
            High-Detail Engraving for Corporate, Industrial & Personal Projects
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-amber-600 hover:bg-amber-700 rounded-md font-semibold"
            >
              Get a Custom Quote
            </a>

            <a
              href="/contact"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-md font-semibold"
            >
              Contact Us
            </a>

            <a
              href="/submit-project"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-md font-semibold"
            >
              Submit a Project
            </a>
          </div>
        </div>
      </section>

      {/* RECENT WORK */}
      <section className="py-20 px-6 text-center bg-black">
        <h2 className="text-4xl font-bold mb-10">Recent Work</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Auto gallery images will be added later */}
          <div className="border border-gray-700 rounded-lg p-10 text-gray-500">
            Gallery Auto-Fill (Coming Soon)
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-zinc-900 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-10">

          <div className="p-6 border border-gray-700 rounded-lg">
            <h3 className="text-2xl font-semibold mb-3">Professional Quality</h3>
            <p className="text-gray-300">
              Industrial-grade lasers delivering unmatched engraving detail.
            </p>
          </div>

          <div className="p-6 border border-gray-700 rounded-lg">
            <h3 className="text-2xl font-semibold mb-3">Fast Turnaround</h3>
            <p className="text-gray-300">
              Same-week service available for most projects.
            </p>
          </div>

          <div className="p-6 border border-gray-700 rounded-lg">
            <h3 className="text-2xl font-semibold mb-3">Custom Projects</h3>
            <p className="text-gray-300">
              From corporate branding to personal gifts — we engrave it all.
            </p>
          </div>

        </div>
      </section>

      {/* START YOUR PROJECT */}
      <section className="py-20 px-6 text-center bg-black border-t border-gray-800">
        <h2 className="text-4xl font-bold mb-6">Start Your Project Today</h2>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Whether you're looking for custom engraving, bulk corporate orders, or
          industrial markings — we’re ready to help bring your ideas to life.
        </p>

        <a
          href="/submit-project"
          className="px-10 py-4 bg-green-600 hover:bg-green-700 rounded-md font-semibold text-lg"
        >
          Submit a Project
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 bg-black border-t border-gray-800">
        © {new Date().getFullYear()} Backwood Illuminated — All Rights Reserved
      </footer>

    </main>
  );
}
