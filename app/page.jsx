"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* -------------------- HERO SECTION -------------------- */}
      <section className="relative h-[90vh] w-full flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/hero-forest.png"
            alt="Foggy Forest"
            fill
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl">

          {/* LOGO */}
          <div className="flex justify-center mb-10">
            <Image
              src="/logo.png"
              alt="Backwood Illuminated Logo"
              width={350}
              height={350}
              className="object-contain drop-shadow-[0_0_25px_rgba(0,0,0,0.9)]"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Backwood Illuminated
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 mb-10">
            High-Detail Laser Engraving for Corporate, Industrial & Personal Projects
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-amber-500 text-black font-semibold rounded-md hover:bg-amber-400 transition"
            >
              Submit a Project / Custom Quote
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 border border-amber-500 text-amber-500 font-semibold rounded-md hover:bg-amber-500 hover:text-black transition"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </section>

      {/* -------------------- RECENT WORK -------------------- */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Recent Work</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-700"
            >
              <Image
                src={`/gallery/${i + 1}.jpg`}
                alt={`Gallery Image ${i + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-60"
              />
            </div>
          ))}
        </div>
      </section>

      {/* -------------------- WHY CHOOSE US -------------------- */}
      <section className="py-20 bg-gray-900 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Why Choose Us?</h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          <div>
            <h3 className="text-2xl font-semibold mb-3">High Precision</h3>
            <p className="text-gray-300">
              Our CO2, Fiber, and UV lasers guarantee industry-leading engraving accuracy.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">Fast Turnaround</h3>
            <p className="text-gray-300">
              Most jobs completed in 24–72 hours with optional rush service.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3">Industrial Capability</h3>
            <p className="text-gray-300">
              From one-offs to bulk corporate orders — we handle any scale.
            </p>
          </div>

        </div>
      </section>

      {/* -------------------- START YOUR PROJECT -------------------- */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>

        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Whether you need custom engraving, industrial marking, or personalized gifts —
          we’ve got you covered. Upload your files, describe your project, and get a fast quote.
        </p>

        <Link
          href="/contact"
          className="px-8 py-4 bg-amber-500 text-black font-bold text-lg rounded-md hover:bg-amber-400 transition"
        >
          Submit a Project / Get a Quote
        </Link>
      </section>

    </main>
  );
}
