"use client";

import Image from "next/image";

export default function Gallery() {
  const images = [
    "IMG_0015_opt.webp",
    "IMG_0016_opt.webp",
    "IMG_0017_opt.webp",
    "IMG_0019_opt.webp",
    "IMG_0021_opt.webp",
    "IMG_0022_opt.webp",
    "IMG_0023_opt.webp",
  ];

  return (
    <main className="bg-black text-white min-h-screen py-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Gallery</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((img) => (
          <div
            key={img}
            className="rounded-lg overflow-hidden border border-gray-700 shadow-lg"
          >
            <Image
              src={`/gallery/${img}`}
              alt={img}
              width={500}
              height={500}
              className="object-cover w-full h-80"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
