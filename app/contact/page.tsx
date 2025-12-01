"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
      projectType,
      details,
    };

    const res = await fetch("/api/send-quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
      setProjectType("");
      setDetails("");
    } else {
      alert("Something went wrong sending the email.");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <h1 className="text-4xl font-bold mb-6 text-center">
          Get a Custom Quote
        </h1>
        <p className="text-gray-300 text-center mb-12">
          Tell us about your project. We respond fast — usually same day.
        </p>

        {/* SUCCESS MESSAGE */}
        {submitted && (
          <div className="mb-6 p-4 bg-green-600 text-black font-semibold rounded-md text-center">
            ✔ Thank you! Your request has been sent.
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-zinc-900 p-8 rounded-xl border border-zinc-800">

          <div>
            <label className="block mb-2 font-semibold">Your Name *</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Email *</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white"
              placeholder="you@email.com"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Phone (Optional)</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Project Type *</label>
            <select
              required
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white"
            >
              <option value="">Select...</option>
              <option>Fiber Laser Engraving</option>
              <option>UV Laser Marking</option>
              <option>CO₂ Laser Engraving</option>
              <option>Industrial / Tool Marking</option>
              <option>Logo / Branding Engraving</option>
              <option>Custom Project</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-semibold">Project Details *</label>
            <textarea
              required
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full p-3 rounded-md bg-zinc-800 border border-zinc-700 text-white min-h-[140px]"
              placeholder="Describe your project, quantity, material, deadline, etc..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-amber-500 text-black font-bold rounded-md hover:bg-amber-400 transition"
          >
            Send Request
          </button>
        </form>
      </div>
    </main>
  );
}
