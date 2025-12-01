import "../styles/globals.css";

export const metadata = {
  title: "Backwood Illuminated",
  description: "High-Detail Laser Engraving",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
