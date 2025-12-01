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

{/* Recent Work Section */}
<section id="recent-work" className="py-20 bg-black text-white">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-bold mb-10 tracking-wide">
      Recent Work
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* IMAGE 1 */}
      <div className="rounded-lg overflow-hidden shadow-lg border border-gray-700">
        <img
          src="/images/recent1.jpg"
          alt="Recent project 1"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* IMAGE 2 */}
      <div className="rounded-lg overflow-hidden shadow-lg border border-gray-700">
        <img
          src="/images/recent2.jpg"
          alt="Recent project 2"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* IMAGE 3 */}
      <div className="rounded-lg overflow-hidden shadow-lg border border-gray-700">
        <img
          src="/images/recent3.jpg"
          alt="Recent project 3"
          className="w-full h-64 object-cover"
        />
      </div>

    </div>

    {/* Gallery Button */}
    <div className="mt-10">
      <a
        href="/gallery"
        className="px-8 py-3 bg-green-600 hover:bg-green-700 transition text-white font-semibold rounded-lg"
      >
        View Full Gallery
      </a>
    </div>

  </div>
</section>
      
