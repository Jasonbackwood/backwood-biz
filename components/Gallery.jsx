import Image from "next/image";

const gallery = [
  "/IMG_0015_opt.webp",
  "/IMG_0016_opt.webp",
  "/IMG_0017_opt.webp",
  "/IMG_0019_opt.webp",
  "/IMG_0021_opt.webp",
  "/IMG_0022_opt.webp",
  "/IMG_0023_opt.webp"
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
