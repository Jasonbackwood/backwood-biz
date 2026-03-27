"use client";

import SocialLinks from "../../components/SocialLinks";

export default function ContactPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 text-white max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="bg-black/50 p-8 rounded-lg text-center space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">Email</h2>
          <a
            href="mailto:jason@backwood.biz"
            className="text-yellow-400 hover:text-yellow-300 underline"
          >
            jason@backwood.biz
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Business Address</h2>
          <p>Backwood Illuminated LLC</p>
          <p>Woods Cross, Utah 84087</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-3">Connect With Us</h2>
          <SocialLinks className="justify-center" />
        </div>
      </div>

      <div className="mt-12 text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">A Bit About Us</h2>
        <p className="text-gray-300">
          Based in Woods Cross, Utah — Backwood Illuminated brings craftsmanship,
          precision, and rugged creativity to every engraving project. Whether it’s
          corporate branding or custom one-off pieces, we combine modern laser tech
          with real Utah work ethic. If you want something built with pride, built
          to last, and built to turn heads — you’re in the right place.
        </p>
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="/"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded"
        >
          Back to Home
        </a>
      </div>
    </section>
  );
}
