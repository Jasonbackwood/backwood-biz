"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* SOCIAL ICONS */}
      <section className="text-center mt-16 mb-10">
        <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>

        <div className="flex justify-center gap-6">
          <a href="https://www.facebook.com/profile.php?id=100090937422770" target="_blank" rel="noopener noreferrer">
            <Image src="/social/facebook_opt.webp" alt="Facebook" width={40} height={40} className="hover:opacity-70 transition" />
          </a>

          <a href="https://www.instagram.com/backwood_illuminated_/" target="_blank" rel="noopener noreferrer">
            <Image src="/social/instagram_opt.webp" alt="Instagram" width={40} height={40} className="hover:opacity-70 transition" />
          </a>

          <a href="https://www.tiktok.com/@backwood.illumina2" target="_blank" rel="noopener noreferrer">
            <Image src="/social/tiktok_opt.webp" alt="TikTok" width={40} height={40} className="hover:opacity-70 transition" />
          </a>
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">

        {/* Correct Background Image */}
        <Image
          src="/optimizied_hero-forest.webp"   // <-- FIXED SPELLING
          alt="Backwood Illuminated Hero Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Center Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <Image
            src="/optimized_logo.webp"
            alt="Backwood Illuminated Logo"
            width={260}
            height={260}
            className="drop-shadow-2xl mb-6"
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

            <div className="rounded-lg overflow-hidden border border-gray-700 shadow-lg">
              <Image
                src="/gallery/IMG_0015_opt.webp"
                alt="Gallery Image 1"
                width={500}
                height={300}
                className="object-cover w-full h-72"
              />
            </div>

            <div className="rounded-lg overflow-hidden border border-gray-700 shadow-lg">
              <Image
                src="/gallery/IMG_0016_opt.webp"
                alt="Gallery Image 2"
                width={500}
                height={300}
                className="object-cover w-full h-72"
              />
            </div>

            <div className="rounded-lg overflow-hidden border border-gray-700 shadow-lg">
              <Image
                src="/gallery/IMG_0017_opt.webp"
                alt="Gallery Image 3"
                width={500}
                height={300}
                className="object-cover w-full h-72"
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
