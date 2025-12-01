"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [file, setFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

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

    if (res.ok) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
      setDetails("");
      setFile(null);
    } else {
      alert("There was an error submitting your request.");
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
        <p className="text-lg mb-6 text-center max-w-xl">
          Your project request / quote submission has been received.
          We’ll review your details and reach out shortly.
        </p>

        <a
          href="/"
          className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-6 rounded font-semibold"
        >
          Back to Home
        </a>
      </div>
    );
  }

  return (
    <div className="bg-[#0c0c0c] text-white min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl font-bold mb-6 text-center">
          Submit a Project / Custom Quote
        </h1>

        <p className="text-center text-gray-300 mb-10">
          Have a project in mind? Send us your details and we’ll get back to you with pricing, options, and next steps.
        </p>

        {/* FORM */}
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
            required
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

        {/* BUSINESS ADDRESS */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-2">Business Address</h2>
          <p className="text-gray-300">
            Backwood Illuminated LLC
            <br />
            Woods Cross, Utah 84087
          </p>
        </div>

        {/* ABOUT US */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">A Bit About Us</h2>
          <p className="text-gray-300 leading-relaxed mb-10">
            Based in Woods Cross, Utah — Backwood Illuminated brings craftsmanship, precision,
            and rugged creativity to every engraving project. From corporate branding to personal
            one-off customs, we combine modern laser tech with a hardworking Utah work ethic.
            If you want something built with pride, built to last, and built with detail that
            turns heads — you’re in the right place.
          </p>

          {/* BACK TO HOME BUTTON */}
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
