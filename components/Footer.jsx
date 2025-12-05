import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 py-10 mt-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <Link href="https://www.facebook.com/profile.php?id=100090937422770" target="_blank">
            <Image src="/social/facebook_opt.webp" width={32} height={32} alt="Facebook" />
          </Link>

          <Link href="https://www.instagram.com/backwood_illuminated_/" target="_blank">
            <Image src="/social/instagram_opt.webp" width={32} height={32} alt="Instagram" />
          </Link>

          <Link href="https://www.tiktok.com/@backwood.illumina2" target="_blank">
            <Image src="/social/tiktok_opt.webp" width={32} height={32} alt="TikTok" />
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm leading-relaxed max-w-lg">
          © 2025 <strong>Backwood Illuminated</strong>. All rights reserved.
          <br />
          All product names, logos, and brands are property of their respective owners. 
          Names, logos, and brands used on this site are for identification only and do not imply endorsement.
        </div>

      </div>
    </footer>
  );
}
