import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="text-white">
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Backwood Illuminated</h1>

          <p className="text-lg md:text-2xl text-gray-200 mb-10">
            High-Detail Engraving for Corporate, Industrial & Personal Projects
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#B8862A] text-black font-semibold rounded-md hover:opacity-90 transition"
            >
              Get a Custom Quote
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 border border-[#B8862A] text-[#B8862A] font-semibold rounded-md hover:bg-[#B8862A] hover:text-black transition"
            >
              Contact Us
            </Link>

            <Link
              href="/submit-project"
              className="px-6 py-3 bg-green-600 font-semibold rounded-md hover:bg-green-500 transition"
            >
              Submit a Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
