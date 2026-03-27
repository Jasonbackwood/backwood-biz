"use client";

import SocialLinks from "../../components/SocialLinks";

export default function ContactPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 text-white max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="bg-black/50 p-8 rounded-lg text-center space-y-6">
        
        <div>
          <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
          <p className="text-lg font-semibold">Jason McDonald</p>

          <p className="text-gray-300 mb-3">
            Call or text anytime — fast response guaranteed.
          </p>

          <p className="text-xl font-bold">
            📞{" "}
            <a
              href="tel:18013909924"
              className="text-yellow-400 hover:text-yellow-300 underline"
            >
              (801) 390-9924
            </a>
          </p>

          <p className="mt-2">
            📧{" "}
            <a
              href="mailto:jason@backwood.biz"
              className="text-yellow-400 hover:text-yellow-300 underline"
            >
              jason@backwood.biz
            </a>
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Location</h2>
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
