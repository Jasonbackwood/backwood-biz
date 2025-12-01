"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-6">
          Get a Custom Quote
        </h1>

        <p className="text-gray-300 text-center mb-12">
          Tell us about your engraving project and we'll send a personalized quote ASAP.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-900 p-8 rounded-lg shadow-lg border border-gray-700"
          >
            {/* NAME */}
            <label className="block mb-4">
              <span className="text-gray-200">Your Name</span>
              <input
                required
                type="text"
                className="w-full mt-2 px-4 py-3 rounded bg-black border border-gray-700 text-white"
                placeholder="John Smith"
              />
            </label>

            {/* EMAIL */}
            <label className="block mb-4">
              <span className="text-gray-200">Email Address</span>
              <input
                required
                type="email"
                className="w-full mt-2 px-4 py-3 rounded bg-black border border-gray-700 text-white"
                placeholder="you@example.com"
              />
            </label>

            {/* PHONE */}
            <label className="block mb-4">
              <span className="text-gray-200">Phone Number</span>
              <input
                type="text"
                className="w-full mt-2 px-4 py-3 rounded bg-black border border-gray-700 text-white"
                placeholder="(optional)"
              />
            </label>

            {/* TYPE OF PROJECT */}
            <label className="block mb-4">
              <span className="text-gray-200">Project Type</span>
              <select
                required
                className="w-full mt-2 px-4 py-3 rounded bg-black border border-gray-700 text-white"
              >
                <option value="">Pick one</option>
                <option>Corporate Engraving</option>
                <option>Industrial Marking</option>
                <option>Personal Gift</option>
                <option>Logo Engraving</option>
                <option>Patch/Tumbler/Gun Engraving</option>
                <option>Other Custom Project</option>
              </select>
            </label>

            {/* PROJECT DETAILS */}
            <label className="block mb-6">
              <span className="text-gray-200">Tell Us About Your Project</span>
              <textarea
                required
                rows={5}
                className="w-full mt-2 px-4 py-3 rounded bg-black border border-gray-700 text-white"
                placeholder="Describe your idea, quantity, materials, deadlines, etc."
              ></textarea>
            </label>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full py-3 bg-green-600 hover:bg-green-700 rounded-md font-semibold"
            >
              Submit for Quote
            </button>
          </form>
        ) : (
          <div className="bg-zinc-900 p-10 rounded-lg text-center border border-gray-700">
            <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
            <p className="text-gray-300 mb-6">
              Your request has been received. We’ll contact you shortly.
            </p>

            <a
              href="/"
              className="px-6 py-3 bg-amber-600 hover:bg-amber-700 rounded-md font-semibold"
            >
              Return to Home
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
