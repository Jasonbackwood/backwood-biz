"use client";

import { useState } from "react";

export default function SubmitProjectPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("details", details);
    if (file) formData.append("file", file);

    const res = await fetch("/api/send-quote", {
      method: "POST",
      body: formData,
    });

    if (res.ok) setSubmitted(true);
  };

  if (submitted)
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Project Sent!</h1>
        <p className="text-lg text-gray-300 max-w-xl text-center">
          Thanks for sending your project details — we’ll reach out with pricing & next steps.
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

        <h1 className="text-4xl font-bold mb-6 text-center">
          Submit a Project / Custom Quote
        </h1>

        <p className="text-center text-gray-300 mb-10">
          Upload your project details and we'll provide pricing, options, and turnaround times.
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
            placeholder="Tell us about your project..."
            className="w-full p-3 rounded bg-[#1a1a1a] border border-gray-700 h-32"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          />

          <div>
            <label className="block mb-2 text-gray-300">Upload File (optional)</label>
            <input
              type="file"
              className="w-full text-gray-300"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded"
          >
            Submit
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
            We specialize in high-detail engraving for corporate branding,
            industrial components, and custom personal projects — built with Utah work ethic.
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
