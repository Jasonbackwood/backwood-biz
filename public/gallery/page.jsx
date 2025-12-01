export default function GalleryPage() {
  const images = [
    "/gallery/8569108F-9B84-4699-B7E0-8DEDD6225975.JPEG",
    "/gallery/BEAA76F1-E865-460D-8C25-7E2326CCB27D.JPEG",
    "/gallery/C8A9A17D-212E-46CF-BAD2-52F13F5EC417.JPEG",
  ];

  return (
    <main className="bg-black min-h-screen text-white py-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Full Gallery</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((src, index) => (
          <div key={index} className="rounded-lg overflow-hidden border border-gray-700 shadow-lg">
            <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-72 object-cover" />
          </div>
        ))}
      </div>
    </main>
  );
}
