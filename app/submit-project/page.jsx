"use client";
import { useState } from "react";

export default function SubmitProjectPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    await fetch("/api/send-quote", {
      method: "POST",
      body: formData,
    });

    setSubmitted(true);
  };

  return (
    <div className="text-white pt-28 pb-20 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4">
        Submit a Project / Custom Quote
      </h1>
      <p className="text-center text-gray-300 mb-10">
        Have a project in mind? Send us your details and we’ll get back to you with pricing,
        options, and next steps.
      </p>

      {submitted ? (
        <div className="text-center p-6 bg-green-700 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Project Sent!</h2>
          <p>We’ll review your details and contact you shortly.</p>

          <a
            href="/"
            className="inline-block mt-6 bg-yellow-600 hover:bg-yellow-700 px-6 py-3 rounded"
          >
            Back to Home
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-900 p-6 rounded-lg">
          <input
            name="name"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
            placeholder="Name"
            required
          />

          <input
            name="email"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
            placeholder="Email"
            required
          />

          <input
            name="phone"
            className="w-full p-3 rounded bg-gray-800 border border-gray-700"
            placeholder="Phone Number"
            required
          />

          <textarea
            name="details"
            className="w-full h-32 p-3 rounded bg-gray-800 border border-gray-700"
            placeholder="Tell us about your project..."
            required
          />

          <div>
            <label className="block mb-2">Upload File (optional)</label>
            <input
              type="file"
              name="file"
              className="w-full text-gray-300"
            />
          </div>

          <button className="w-full bg-yellow-600 hover:bg-yellow-700 py-3 rounded font-semibold">
            Submit
          </button>
        </form>
      )}

      {/* Business Address */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold">Business Address</h2>
        <p className="mt-2">Backwood Illuminated LLC</p>
        <p>Woods Cross, Utah 84087</p>
      </div>

      {/* About Us */}
      <div className="text-center mt-10 text-gray-300 leading-relaxed">
        <h2 className="text-2xl font-bold mb-3 text-white">A Bit About Us</h2>
        <p>
          Based in Woods Cross, Utah — Backwood Illuminated blends craftsmanship, modern tech,
          and rugged creativity into every engraving project. Whether it's corporate branding
          or personal custom work, we’re committed to delivering precision, durability, and
          standout detail. If you want something built with pride and made to last, you’re in
          the right place.
        </p>

        <a
          href="/"
          className="inline-block mt-6 bg-yellow-600 hover:bg-yellow-700 px-6 py-3 rounded"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
