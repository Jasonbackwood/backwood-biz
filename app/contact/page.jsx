"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("");
  const [details, setDetails] = useState("");
  const [file, setFile] = useState(null);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("projectType", projectType);
    formData.append("details", details);

    if (file) {
      formData.append("file", file);
    }

    const res = await fetch("/api/send-quote", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
      setProjectType("");
      setDetails("");
      setFile(null);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-2xl mx-auto bg-zinc-900 p-10 rounded-xl border border-zinc-800">
        <h1 className="text-4xl font-bold mb-6 text-center">Get a Custom Quote</h1>

        {submitted ? (
          <p className="text-green-400 text-center text-xl">
            Thank you! Your request has been sent.
          </p>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded"
              placeholder="Project Type (Metal, Plastic, Tumblers, Firearms, etc.)"
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
            />

            <textarea
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded min-h-[150px]"
              placeholder="Project Details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              required
            ></textarea>

            {/* FILE UPLOAD FIELD */}
            <div>
              <label className="block mb-2 text-gray-400">Upload a File (optional)</label>
              <input
                type="file"
                className="w-full bg-zinc-800 border border-zinc-700 p-3 rounded"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 text-black font-bold py-3 rounded hover:bg-amber-400 transition"
            >
              Submit Quote Request
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
