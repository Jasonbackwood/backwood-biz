import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <section className="text-center py-20 px-6">
        <Image
          src="/logo.png"
          alt="Backwood Illuminated Logo"
          width={260}
          height={260}
          className="mx-auto mb-6"
        />
        <h1 className="text-5xl font-bold mb-4">Backwood Illuminated LLC</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Custom laser engraving, UV printing, fiber engraving, hat patches, tumblers,
          company branding, and specialty custom work right here in Utah.
        </p>

        {/* MAIN ACTION BUTTONS */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">

          <Link
            href="/submit-project"
            className="px-8 py-3 bg-amber-500 text-black font-semibold rounded hover:bg-amber-400 transition"
          >
            Submit a Project / Get a Quote
          </Link>

          <Link
            href="/contact"
            className="px-8 py-3 bg-gray-700 font-semibold rounded hover:bg-gray-600 transition"
          >
            Contact Us
          </Link>

          <Link
            href="/customize"
            className="px-8 py-3 bg-green-600 text-black font-semibold rounded hover:bg-green-500 transition"
          >
            Customize Your Own
          </Link>

        </div>
      </section>

      {/* RECENT WORK */}
      <section className="px-6 py-16 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-10">Recent Work</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          <Image
            src="/gallery/hat1.png"
            alt="Custom Patch Hat"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />

          <Image
            src="/gallery/tumbler1.png"
            alt="Laser Engraved Tumbler"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />

          <Image
            src="/gallery/sign1.png"
            alt="Laser Engraved Wood Sign"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />

        </div>

        <div className="text-center mt-10">
          <Link
            href="/gallery"
            className="px-8 py-3 bg-amber-500 text-black font-semibold rounded hover:bg-amber-400 transition"
          >
            View Full Gallery
          </Link>
        </div>
      </section>
    </main>
  );
}
