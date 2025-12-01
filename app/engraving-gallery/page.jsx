import fs from "fs";
import path from "path";
import Image from "next/image";

export default function EngravingGallery() {
  // Locate gallery folder
  const galleryDir = path.join(process.cwd(), "public", "gallery");

  // Read all image filenames
  const images = fs
    .readdirSync(galleryDir)
    .filter((file) =>
      file.match(/\.(jpg|jpeg|png|webp|gif)$/i)
    );

  return (
    <main className="min-h-screen bg-black text-white py-20 px-6">
      <h1 className="text-5xl font-bold text-center mb-12">
        Engraving Gallery
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div
            key={i}
            className="relative w-full aspect-square rounded-lg overflow-hidden"
          >
            <Image
              src={`/gallery/${img}`}
              alt={`Gallery Item ${i + 1}`}
              fill
              className="object-cover hover:scale-105 transition"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
