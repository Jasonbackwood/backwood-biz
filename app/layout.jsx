import "../styles/globals.css";

export const metadata = {
  title: "Backwood Illuminated",
  description:
    "High-detail engraving for corporate, industrial & personal projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
