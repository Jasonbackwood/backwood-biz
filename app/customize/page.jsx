"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Stage, Layer, Image as KonvaImage } from "react-konva";

export default function CustomizeYourOwn() {
  const [product, setProduct] = useState("tumbler");
  const [files, setFiles] = useState([]);
  const [konvaImages, setKonvaImages] = useState([]);
  const [notes, setNotes] = useState("");
  const [qty, setQty] = useState("");
  const stageRef = useRef(null);

  const productMockups = {
    tumbler: "/mockups/tumbler.png",
    hat: "/mockups/hat.png",
    patch: "/mockups/patch.png",
  };

  const handleFileUpload = (e) => {
    const uploads = [...e.target.files];
    setFiles((prev) => [...prev, ...uploads]);

    uploads.forEach((file) => {
      const img = new window.Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        setKonvaImages((prev) => [...prev, { img, x: 50, y: 50 }]);
      };
    });
  };

  const handleSubmit = async () => {
    const mockupImage = stageRef.current.toDataURL();

    const formData = new FormData();
    formData.append("product", product);
    formData.append("notes", notes);
    formData.append("qty", qty);
    formData.append("mockup", mockupImage);

    files.forEach((file) => {
      formData.append("uploads", file);
    });

    await fetch("/api/send-custom-mockup", {
      method: "POST",
      body: formData,
    });

    alert("Your custom mockup has been submitted!");
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-4">
        Customize & Make It Your Own
      </h1>
      <p className="text-center mb-12 text-gray-300">
        Build your perfect mockup. Upload your artwork, place it on the product,
        and send it for a custom quote.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* -------- LEFT PANEL -------- */}
        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl mb-4">Product Selection</h2>

          <select
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="w-full bg-black border border-gray-700 text-white px-3 py-2 rounded mb-6"
          >
            <option value="tumbler">Tumbler</option>
            <option value="hat">Hat</option>
            <option value="patch">Patch</option>
          </select>

          <h2 className="text-xl mt-4 mb-2">Upload Artwork</h2>
          <input
            type="file"
            multiple
            onChange={handleFileUpload}
            className="w-full bg-black border border-gray-700 py-2 rounded"
          />

          <h2 className="text-xl mt-6 mb-2">Quantity</h2>
          <input
            type="number"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            className="w-full bg-black border border-gray-700 py-2 rounded text-white"
          />

          <h2 className="text-xl mt-6 mb-2">Notes</h2>
          <textarea
            rows="5"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="w-full bg-black border border-gray-700 p-2 rounded"
          />
        </div>

        {/* -------- MOCKUP CANVAS -------- */}
        <div className="col-span-2 bg-zinc-900 p-4 rounded-xl flex justify-center">
          <Stage
            width={500}
            height={500}
            ref={stageRef}
            style={{ background: "#111", borderRadius: "10px" }}
          >
            <Layer>
              {productMockups[product] && (
                <KonvaImage
                  image={(() => {
                    const img = new window.Image();
                    img.src = productMockups[product];
                    return img;
                  })()}
                  x={0}
                  y={0}
                  width={500}
                  height={500}
                />
              )}

              {konvaImages.map((item, index) => (
                <KonvaImage
                  key={index}
                  image={item.img}
                  x={item.x}
                  y={item.y}
                  draggable
                />
              ))}
            </Layer>
          </Stage>
        </div>
      </div>

      {/* -------- SUBMIT BUTTON -------- */}
      <div className="text-center mt-10">
        <button
          onClick={handleSubmit}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-10 py-3 rounded-lg"
        >
          Submit Mockup for Quote
        </button>
      </div>
    </div>
  );
}
