"use client";

import Image from "next/image";
import Link from "next/link";

// AUTO GALLERY USING PUBLIC FOLDER (no fs)
const galleryImages = Array.from({ length: 20 })
  .map((_, i) => `/gallery/img${i + 1}.jpg`);

export default function Home() {
  return (
    <main className="flex flex-col bg-black text-white">

      {/* ---------------- HERO SECTION ---------------- */}
      <section
        className="relative h-[85vh] w-full flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/hero-forest.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 px-6">
          <Image
            src="/logo.png"
            alt="Backwood Illuminated Logo"
            width={160}
            height={160}
            className="mx-auto mb-6"
          />

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Backwood Illuminated
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 mb-10">
            High-Detail Engraving for Corporate, Industrial & Personal Projects
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-md bg-amber-500 hover:bg-amber-400 text-black font-semibold"
            >
              Get a Custom Quote
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 rounded-md bg-gray-200 hover:bg-white text-black font-semibold"
            >
              Contact Us
            </Link>

            <Link
              href="/submit-project"
              className="px-6 py-3 rounded-md bg-green-600 hover:bg-green-500 text-white font-semibold"
            >
              Submit a Project
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- GALLERY ---------------- */}
      <section className="bg-zinc-950 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Recent Work
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={src}
                  alt="Engraving Example"
                  fill
                  className="object-cover hover:scale-110 transition"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/engraving-gallery"
              className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-md"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- WHY CHOOSE US ---------------- */}
      <section className="bg-black py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Why Choose Us?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 bg-zinc-900 rounded-xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-4">Laser Precision</h3>
              <p className="text-gray-300">
                CO₂, Fiber & UV engraving with unmatched accuracy.
              </p>
            </div>

            <div className="p-6 bg-zinc-900 rounded-xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-4">Industrial Capacity</h3>
              <p className="text-gray-300">
                High-volume corporate engraving with fast turnaround.
              </p>
            </div>

            <div className="p-6 bg-zinc-900 rounded-xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-4">Custom Artwork</h3>
              <p className="text-gray-300">
                We design laser-ready logos, artwork & mockups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="py-24 px-6 bg-amber-600 text-black text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg mb-10">
            Whether it's a single item or a mass-production run, we’ve got you covered.
          </p>

          <div className="flex justify-center gap-6">
            <Link
              href="/submit-project"
              className="px-10 py-4 rounded-md bg-black text-white font-semibold hover:bg-zinc-800"
            >
              Submit a Project
            </Link>

            <Link
              href="/contact"
              className="px-10 py-4 rounded-md bg-white text-black font-semibold hover:bg-gray-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
