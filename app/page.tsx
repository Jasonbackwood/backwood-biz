"use client";

import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";

// ----------- AUTO GALLERY LOADER -----------
function loadGalleryImages() {
  try {
    const galleryPath = path.join(process.cwd(), "public/gallery");
    const files = fs.readdirSync(galleryPath);

    return files.filter((file) =>
      file.match(/\.(jpg|jpeg|png|webp|gif)$/i)
    );
  } catch (err) {
    return [];
  }
}

export default function Home() {
  const galleryImages = loadGalleryImages().slice(0, 8);

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
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
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

      {/* ---------------- AUTO GALLERY ---------------- */}
      <section className="bg-zinc-950 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Recent Work
          </h2>

          {galleryImages.length === 0 ? (
            <p className="text-center text-gray-400">
              No images found in /public/gallery
            </p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((file, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-lg overflow-hidden"
                >
                  <Image
                    src={`/gallery/${file}`}
                    alt={file}
                    fill
                    className="object-cover hover:scale-105 transition"
                  />
                </div>
              ))}
            </div>
          )}

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

      {/* ---------------- WHY CHOOSE US ---------------- */}
      <section className="bg-black py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Why Choose Us?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            <div className="p-6 bg-zinc-900 rounded-xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-4">Laser Precision</h3>
              <p className="text-gray-300">
                We deliver unmatched engraving accuracy using CO₂, Fiber, and UV laser technology.
              </p>
            </div>

            <div className="p-6 bg-zinc-900 rounded-xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-4">Industrial Capability</h3>
              <p className="text-gray-300">
                We handle high-volume corporate orders with fast turnaround times.
              </p>
            </div>

            <div className="p-6 bg-zinc-900 rounded-xl border border-white/10">
              <h3 className="text-2xl font-semibold mb-4">Custom Design Support</h3>
              <p className="text-gray-300">
                Need artwork? We build laser-ready designs, logos, and production mockups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- START YOUR PROJECT CTA ---------------- */}
      <section className="py-24 px-6 bg-amber-600 text-black text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg mb-10">
            Whether it's a single personalized item or a full production run—we’ve got you.
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
