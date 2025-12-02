export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex gap-6 ${className}`}>
      <a
        href="https://www.facebook.com/profile.php?id=100090937422770"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/icons/facebook.svg"
          alt="Facebook"
          className="w-8 h-8 hover:opacity-80"
        />
      </a>

      <a
        href="https://www.instagram.com/backwood_illuminated_/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/icons/instagram.svg"
          alt="Instagram"
          className="w-8 h-8 hover:opacity-80"
        />
      </a>

      <a
        href="https://www.tiktok.com/@backwood.illumina2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/icons/tiktok.svg"
          alt="TikTok"
          className="w-8 h-8 hover:opacity-80"
        />
      </a>
    </div>
  );
}
