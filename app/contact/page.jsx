"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { name, email, phone, message };

    const res = await fetch("/api/send-contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) setSubmitted(true);
  };

  if (submitted)
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Message Sent!</h1>
        <p className="text-lg text-gray-300 max-w-xl text-center">
          Thanks for reaching out — we’ll get back to you shortly.
        </p>

        <a
          href="/"
          className="mt-6 bg-yellow-500 hover:bg-yellow-600 py-2 px-6 rounded text-black font-semibold"
        >
          Back to Home
        </a>
      </div>
    );

  return (
    <div className="bg-[#0c0c0c] text-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>

        <p className="text-center text-gray-300 mb-10">
          Have questions? Need help with an order? Send us a message below.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-[#111] p-6 rounded-lg shadow-lg space-y-4"
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded bg-[#1a1a1a] border border-gray-700"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-[#1a1a1a] border border-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full p-3 rounded bg-[#1a1a1a] border border-gray-700"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <textarea
            placeholder="Your Message..."
            className="w-full p-3 rounded bg-[#1a1a1a] border border-gray-700 h-32"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded"
          >
            Send Message
          </button>
        </form>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-2">Business Address</h2>
          <p className="text-gray-300">
            Backwood Illuminated LLC
            <br />
            Woods Cross, Utah 84087
          </p>
        </div>

        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">A Bit About Us</h2>
          <p className="text-gray-300 leading-relaxed mb-10">
            Utah-built, Utah-tough. We bring craftsmanship, precision, and rugged creativity
            into every engraving project — from corporate orders to personal, one-of-a-kind pieces.
          </p>

          <a
            href="/"
            className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-6 rounded font-semibold inline-block"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
