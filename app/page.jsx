"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO SECTION */}
      <section
        className="relative h-screen w-full flex items-center justify-center"
        style={{
          backgroundImage: "url('/forest-fog-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.png"
              width={260}
              height={260}
              alt="Backwood Illuminated Logo"
              className="rounded-full"
              priority
            />
          </div>

          <h1 className="text-5xl font-bold tracking-wide mb-4">
            Backwood Illuminated
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Utah’s elite engraving specialists—laser, UV, fiber, and custom branding.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/submit-project"
              className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold"
            >
              Submit a Project
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 bg-gray-700 hover:bg-gray-800 rounded-lg font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Why Choose Us</h2>
        <p className="text-lg opacity-90 max-w-3xl mx-auto">
          Precision engraving, fast turnaround, Utah-based craftsmanship, and the tools to tackle
          any project—from custom tumblers to industrial-grade fiber engraving.
        </p>
      </section>

      {/* RECENT WORK SECTION */}
<section id="recent-work" className="py-20 bg-black text-white">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-bold mb-10 tracking-wide">Recent Work</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="rounded-lg overflow-hidden shadow-lg border border-gray-700">
        <img
          src="/gallery/8569108F-9B84-4699-B7E0-8DEDD6225975.JPEG"
          alt="Recent project 1"
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="rounded-lg overflow-hidden shadow-lg border border-gray-700">
        <img
          src="/gallery/BEAA76F1-E865-460D-8C25-7E2326CCB27D.JPEG"
          alt="Recent project 2"
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="rounded-lg overflow-hidden shadow-lg border border-gray-700">
        <img
          src="/gallery/C8A9A17D-212E-46CF-BAD2-52F13F5EC417.JPEG"
          alt="Recent project 3"
          className="w-full h-64 object-cover"
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
