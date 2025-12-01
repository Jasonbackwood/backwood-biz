{/* -------------------- HERO SECTION -------------------- */}
<section className="relative h-[90vh] w-full flex items-center justify-center">
  <div className="absolute inset-0">
    <Image
      src="/hero-forest.png"
      alt="Foggy Forest"
      fill
      priority
      className="object-cover opacity-70"
    />
    <div className="absolute inset-0 bg-black/60" />
  </div>

  <div className="relative z-10 text-center px-6 max-w-3xl">

    {/* FIXED: BIG CENTERED LOGO */}
    <div className="flex justify-center mb-10">
      <Image
        src="/logo.png"         // <-- rename your file to logo.png
        alt="Backwood Illuminated Logo"
        width={300}             // <-- adjust size here
        height={300}
        className="object-contain drop-shadow-2xl"
      />
    </div>

    <h1 className="text-5xl md:text-6xl font-bold mb-4">
      Backwood Illuminated
    </h1>

    <p className="text-lg md:text-2xl text-gray-200 mb-10">
      High-Detail Laser Engraving for Corporate, Industrial & Personal Projects
    </p>

    <div className="flex flex-wrap gap-4 justify-center">
      <Link
        href="/contact"
        className="px-6 py-3 bg-amber-500 text-black font-semibold rounded-md hover:bg-amber-400 transition"
      >
        Submit a Project / Custom Quote
      </Link>

      <Link
        href="/contact"
        className="px-6 py-3 border border-amber-500 text-amber-500 font-semibold rounded-md hover:bg-amber-500 hover:text-black transition"
      >
        Contact Us
      </Link>
    </div>

  </div>
</section>
