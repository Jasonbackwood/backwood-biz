"use client";

import Image from "next/image";
import Link from "next/link";

// fallback list for auto gallery previews if img-#.jpg doesn’t exist
const fallbackImages = [];

export default function Home() {
  return (
    <main className="flex flex-col">

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

      {/* ---------------- MINI GALLERY PREVIEW ---------------- */}
      <section className="bg-zinc-950 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Recent Work
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={`/gallery/img-${i + 1}.jpg`}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition"
                  onError={(e) => {
                    // fallback in case img-#.jpg doesn’t exist
                    if (fallbackImages[i]) {
                      (e.currentTarget as HTMLImageElement).src =
                        `/gallery/${fallbackImages[i]}`;
                    }
                  }}
                />
              </div>
            ))}
          </div>

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
    </main>
  );
}
