import "./globals.css";

export const metadata = {
  title: "Sanctum Core",
  description: "Luxury underground sanctuaries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
