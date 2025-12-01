"use client";

import { useState } from "react";
import { Stage, Layer, Image as KonvaImage } from "react-konva";

// Disable SSR/prerendering – REQUIRED for Konva to work on Vercel
export const dynamic = "force-dynamic";

export default function CustomizePage() {
  const [productImg, setProductImg] = useState(null);
  const [uploads, setUploads] = useState([]);

  // Load product image preview
  const handleProductUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const img = new window.Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => setProductImg(img);
  };

  // Load multiple design uploads
  const handleDesignUpload = (e) => {
    const files = Array.from(e.target.files || []);
    const newUploads = [];

    files.forEach((file) => {
      const img = new window.Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        newUploads.push(img);
        if (newUploads.length === files.length) {
          setUploads((prev) => [...prev, ...newUploads]);
        }
      };
    });
  };

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        Customize & Make It Your Own
      </h1>

      <p className="text-center max-w-2xl mx-auto text-gray-300 mb-10">
        Upload your product image (tumblers, patches, guns, tools, etc.) and overlay 
        your artwork, logo, or custom design. When you're ready, submit your setup 
        for a custom quote.
      </p>

      {/* Upload Controls */}
      <div className="max-w-xl mx-auto flex flex-col gap-6 mb-12">
        <div>
          <label className="block font-semibold mb-2">Upload Product Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleProductUpload}
            className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Upload Design Files</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleDesignUpload}
            className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded"
          />
        </div>
      </div>

      {/* Mockup Canvas */}
      <div className="flex justify-center mb-12">
        <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-700">
          <Stage width={500} height={500}>
            <Layer>
              {productImg && (
                <KonvaImage
                  image={productImg}
                  width={500}
                  height={500}
                  opacity={0.9}
                />
              )}

              {uploads.map((img, i) => (
                <KonvaImage
                  key={i}
                  image={img}
                  x={50 + i * 30}
                  y={50 + i * 30}
                  width={150}
                  height={150}
                  draggable
                />
              ))}
            </Layer>
          </Stage>
        </div>
      </div>

      {/* Submit for Quote */}
      <div className="text-center">
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
