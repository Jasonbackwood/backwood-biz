import Image from "next/image";

const gallery = [
  "/optimized_IMG_0015.webp",
  "/optimized_IMG_0016.webp",
  "/optimized_IMG_0017.webp",
  "/optimized_IMG_0019.webp",
  "/optimized_IMG_0021.webp",
  "/optimized_IMG_0022.webp",
  "/optimized_IMG_0023.webp"
];

export default function Gallery() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">Recent Work</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.map((src, i) => (
          <div key={i} className="w-full aspect-square relative">
            <Image 
              src={src}
              alt={`Gallery image ${i + 1}`}
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
