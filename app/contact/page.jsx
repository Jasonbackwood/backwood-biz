"use client";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    await fetch("/api/send-contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setSubmitted(true);
  };

  return (
    <div className="text-white pt-28 pb-20 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-center text-gray-300 mb-10">
        Have a question? Reach out and we’ll get back to you as soon as possible.
      </p>

      {submitted ? (
        <div className="text-center p-6 bg-green-700 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
          <p>We’ll reply shortly.</p>

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
            name="message"
            className="w-full h-32 p-3 rounded bg-gray-800 border border-gray-700"
            placeholder="Your message..."
            required
          />

          <button className="w-full bg-yellow-600 hover:bg-yellow-700 py-3 rounded font-semibold">
            Send
          </button>
        </form>
      )}
    </div>
  );
}
