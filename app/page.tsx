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

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* CONTENT WRAPPER */}
        <div className="relative z-10 flex flex-col items-center px-4">

          {/* BIGGER LOGO – change width=300 to adjust size */}
          <Image
            src="/logo.png"
            alt="Backwood Illuminated Logo"
            width={300}   // <--- INCREASE SIZE HERE
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

          {/* CTA BUTTONS */}
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

      {/* RECENT WORK PLACEHOLDER (kept because you had it before) */}
      <section className="py-20 px-6 text-center bg-black">
        <h2 className="text-4xl font-bold mb-6">Recent Work</h2>
        <p className="text-gray-400">Gallery will auto-populate here…</p>
      </section>

    </main>
  );
}
