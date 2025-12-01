import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="text-white">

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

          {/* LOGO AT TOP OF HERO */}
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.jpg"       // <-- make sure file is /public/logo.jpg
              alt="Backwood Illuminated Logo"
              width={220}            // bigger logo
              height={220}
              className="rounded-full object-contain"
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

      {/* -------------------- SERVICES SECTION -------------------- */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Laser Engraving Services
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Fiber Laser Engraving",
                text: "High-power fiber engraving for metals, tools, firearms, industrial parts & more."
              },
              {
                title: "UV Laser Marking",
                text: "Precision marking for plastics, polymers, electronics & sensitive materials."
              },
              {
                title: "CO₂ Laser Engraving",
                text: "Perfect for tumblers, leatherette patches, acrylics, signage & coated materials."
              }
            ].map((svc, i) => (
              <div
                key={i}
                className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl hover:border-amber-500 transition"
              >
                <h3 className="text-2xl font-semibold mb-4">{svc.title}</h3>
                <p className="text-gray-300">{svc.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- MINI GALLERY PREVIEW -------------------- */}
      <section className="bg-zinc-950 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Recent Work
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={`/gallery/img${i}.jpg`}
                  alt={`Gallery ${i}`}
                  fill
                  className="object-cover hover:scale-105 transition"
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

      {/* -------------------- WHY CHOOSE US -------------------- */}
      <section className="bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">Why Choose Us</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Industrial-Grade Fiber, UV & CO₂ Lasers",
              "Fast Turnaround & Local Utah Service",
              "Custom Artwork, Logos & Precision Marking",
              "Reliable Quality Every Single Time"
            ].map((reason, i) => (
              <div
                key={i}
                className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-amber-500 transition text-gray-300"
              >
                {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- CTA BANNER -------------------- */}
      <section className="bg-amber-500 text-black py-16 text-center">
        <h2 className="text-4xl font-bold mb-4">Start Your Project Today</h2>
        <Link
          href="/contact"
          className="inline-block mt-4 px-8 py-3 font-semibold bg-black text-white rounded-md hover:bg-zinc-800 transition"
        >
          Submit a Project / Custom Quote
        </Link>
      </section>

    </main>
  );
}
