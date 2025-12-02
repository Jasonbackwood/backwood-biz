import Image from "next/image";

export default function SocialLinks() {
  return (
    <div className="flex items-center justify-center space-x-6 mt-6">
      <a
        href="https://www.facebook.com/profile.php?id=100090937422770"
        target="_blank"
      >
        <Image
          src="/social/facebook.png"
          alt="Facebook"
          width={40}
          height={40}
        />
      </a>

      <a
        href="https://www.instagram.com/backwood_illuminated_/"
        target="_blank"
      >
        <Image
          src="/social/instagram.png"
          alt="Instagram"
          width={40}
          height={40}
        />
      </a>

      <a
        href="https://www.tiktok.com/@backwood.illumina2"
        target="_blank"
      >
        <Image
          src="/social/tiktok.png"
          alt="TikTok"
          width={40}
          height={40}
        />
      </a>
    </div>
  );
}
