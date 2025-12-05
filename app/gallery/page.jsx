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
      
      {/* FOOTER */}
<footer className="bg-black text-gray-400 border-t border-gray-700 mt-20 py-10 text-center px-6">
  
  <div className="max-w-4xl mx-auto">
    <p className="text-sm mb-3">
      © 2025 Backwood Illuminated. All rights reserved.
    </p>

    <p className="text-xs leading-relaxed max-w-3xl mx-auto">
      All product names, logos, and brands are property of their respective owners.  
      All company, product, and service names used in this website are for identification  
      purposes only. Use of these names, logos, and brands does not imply endorsement.
    </p>

    {/* Optional Social Icons Again */}
    <div className="flex justify-center gap-6 mt-6">
      <a
        href="https://www.facebook.com/profile.php?id=100090937422770"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/social/facebook_opt.webp"
          className="w-8 h-8 opacity-80 hover:opacity-100 transition"
          alt="Facebook"
        />
      </a>
      <a
        href="https://www.instagram.com/backwood_illuminated_/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/social/instagram_opt.webp"
          className="w-8 h-8 opacity-80 hover:opacity-100 transition"
          alt="Instagram"
        />
      </a>
      <a
        href="https://www.tiktok.com/@backwood.illumina2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/social/tiktok_opt.webp"
          className="w-8 h-8 opacity-80 hover:opacity-100 transition"
          alt="TikTok"
        />
      </a>
    </div>
  </div>
</footer>

    </main>
  );
}
