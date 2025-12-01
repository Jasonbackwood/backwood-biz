"use client";

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex gap-4 ${className}`}>
      <a href="https://www.facebook.com/profile.php?id=100090937422770" target="_blank" rel="noopener noreferrer">
        <img src="/icons/facebook.svg" className="w-6 h-6 hover:opacity-60 transition" />
      </a>
      <a href="https://www.instagram.com/backwood_illuminated_/" target="_blank" rel="noopener noreferrer">
        <img src="/icons/instagram.svg" className="w-6 h-6 hover:opacity-60 transition" />
      </a>
      <a href="https://www.tiktok.com/@backwood.illumina2" target="_blank" rel="noopener noreferrer">
        <img src="/icons/tiktok.svg" className="w-6 h-6 hover:opacity-60 transition" />
      </a>
    </div>
  );
}
