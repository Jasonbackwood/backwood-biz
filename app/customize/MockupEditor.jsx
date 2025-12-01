"use client";

import { useState } from "react";
import { Stage, Layer, Image as KonvaImage } from "react-konva";

export default function MockupEditor() {
  const [productImg, setProductImg] = useState(null);
  const [uploads, setUploads] = useState([]);

  const handleProductUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const img = new window.Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => setProductImg(img);
  };

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
    <div className="text-white mt-10">
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

      {/* Canvas */}
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
    </div>
  );
}
