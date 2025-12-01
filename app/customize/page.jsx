"use client";

import dynamicImport from "next/dynamic";

// Required for Konva to avoid prerendering
export const dynamic = "force-dynamic";

// Dynamically import Konva editor client-only
const MockupEditor = dynamicImport(() => import("./MockupEditor"), {
  ssr: false,
});

export default function CustomizePage() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        Customize & Make It Your Own
      </h1>

      <p className="text-center max-w-2xl mx-auto text-gray-300 mb-10">
        Upload your product image and your design files. Position them on the
        product preview exactly how you want — then submit everything for a
        custom quote.
      </p>

      <MockupEditor />

      <div className="text-center mt-10">
        <a
          href="/submit-project"
          className="px-8 py-3 bg-amber-500 text-black font-semibold rounded hover:bg-amber-400 transition"
        >
          Submit for Quote
        </a>
      </div>
    </main>
  );
}
