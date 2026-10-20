import "./globals.css";

export const metadata = {
  title: "Global Wish Tree",
  description: "Every wish makes the tree grow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}