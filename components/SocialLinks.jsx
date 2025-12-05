import Image from "next/image";

export default function SocialLinks() {
  return (
    <div className="flex gap-4 justify-center mt-4">
      <a href="https://www.instagram.com/backwoodilluminated" target="_blank" rel="noopener noreferrer">
        <Image
          src="/social/instagram_opt.webp"
          alt="Instagram"
          width={40}
          height={40}
          className="hover:opacity-80 transition"
        />
      </a>

      <a href="https://www.tiktok.com/@backwoodilluminated" target="_blank" rel="noopener noreferrer">
        <Image
          src="/social/tiktok_opt.webp"
          alt="TikTok"
          width={40}
          height={40}
          className="hover:opacity-80 transition"
        />
      </a>

      <a href="https://www.facebook.com/backwoodilluminated" target="_blank" rel="noopener noreferrer">
        <Image
          src="/social/facebook_opt.webp"
          alt="Facebook"
          width={40}
          height={40}
          className="hover:opacity-80 transition"
        />
      </a>
    </div>
  );
}
