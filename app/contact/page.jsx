"use client";

import { useState } from "react";
import SocialLinks from "../../components/SocialLinks";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message Sent!");
        e.target.reset();
      } else {
        setStatus("Failed to send. Try again.");
      }
    } catch (err) {
      setStatus("Error sending message.");
    }
  };

  return (
    <section className="min-h-screen pt-32 pb-20 text-white max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-black/50 p-6 rounded-lg space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-full p-3 rounded bg-black/40 border border-gray-700"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full p-3 rounded bg-black/40 border border-gray-700"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="w-full p-3 rounded bg-black/40 border border-gray-700"
        />

        <textarea
          name="message"
          placeholder="Tell us about your project..."
          rows={5}
          required
          className="w-full p-3 rounded bg-black/40 border border-gray-700"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded"
        >
          Send Message
        </button>

        {status && <p className="text-center text-gray-300">{status}</p>}
      </form>

      {/* Social Links */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-3">Connect With Us</h3>
        <SocialLinks className="justify-center" />
      </div>

      {/* Business Address */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-2">Business Address</h2>
        <p>Backwood Illuminated LLC</p>
        <p>Woods Cross, Utah 84087</p>
      </div>

      {/* About Us */}
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
