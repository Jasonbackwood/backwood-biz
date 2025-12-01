"use client";
import { useState } from "react";

export default function SubmitProjectPage() {
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Append multiple files
    files.forEach((file) => {
      formData.append("files", file);
    });

    await fetch("/api/send-quote", {
      method: "POST",
      body: formData,
    });

    setSubmitted(true);
  };

  // Drag events
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  // Drop event
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files.length > 0) {
      setFiles((prev) => [...prev, ...Array.from(e.dataTransfer.files)]);
    }
  };

  // Manual file selection
  const handleFileSelect = (e) => {
    setFiles((prev) => [...prev, ...Array.from(e.target.files)]);
  };

  // Remove a selected file
  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="text-white pt-28 pb-20 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4">
        Submit a Project / Custom Quote
      </h1>

      <p className="text-center text-gray-300 mb-10">
        Upload files, reference images, artwork, or project details — we’ll review
        everything and contact you with a quote.
      </p>

      {submitted ? (
        <div className="text-center p-6 bg-green-700 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Project Sent!</h2>
          <p>We’ll contact you shortly.</p>

          <a
            href="/"
            className="inline-block mt-6 bg-yellow-600 hover:bg-yellow-700 px-6 py-3 rounded"
          >
            Back to Home
          </a>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-gray-900 p-6 rounded-lg relative"
          onDragEnter={handleDrag}
        >
          {/* Standard Inputs */}
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

          {/* MULTIPLE FILE UPLOAD SECTION */}
          <div
            onDrop={handleDrop}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            className={`p-6 border-2 border-dashed rounded-lg text-center transition ${
              dragActive
                ? "border-yellow-500 bg-yellow-500/10"
                : "border-gray-600 bg-gray-800"
            }`}
          >
            <p className="mb-2 text-gray-300">Drag & drop files here</p>
            <p className="mb-4 text-sm text-gray-500">(You can upload multiple files)</p>

            <input
              type="file"
              id="fileInput"
              multiple
              className="hidden"
              onChange={handleFileSelect}
            />

            <label
              htmlFor="fileInput"
              className="cursor-pointer bg-yellow-600 hover:bg-yellow-700 text-black px-4 py-2 rounded inline-block"
            >
              Choose Files
            </label>

            {/* File Preview List */}
            {files.length > 0 && (
              <div className="mt-4 text-left">
                <h3 className="font-semibold mb-2">Selected Files:</h3>
                <ul className="space-y-1">
                  {files.map((file, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center bg-black/30 p-2 rounded"
                    >
                      <span className="text-sm">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-red-400 hover:text-red-600 text-sm"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <button className="w-full bg-yellow-600 hover:bg-yellow-700 py-3 rounded font-semibold">
            Submit
          </button>
        </form>
      )}

      {/* BUSINESS ADDRESS */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold">Business Address</h2>
        <p className="mt-2">Backwood Illuminated LLC</p>
        <p>Woods Cross, Utah 84087</p>
      </div>

      {/* ABOUT US */}
      <div className="text-center mt-10 text-gray-300 leading-relaxed">
        <h2 className="text-2xl font-bold mb-3 text-white">A Bit About Us</h2>
        <p>
          Backwood Illuminated brings Utah craftsmanship, precision laser technology, and
          rugged work ethic to every engraving job — commercial, industrial, or personal.
          Built for durability. Built for detail. Built to impress.
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
