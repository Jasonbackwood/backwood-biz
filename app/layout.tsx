import "../styles/globals.css";

export const metadata = {
  title: "Backwood Illuminated",
  description: "High-detail laser engraving in Utah",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
