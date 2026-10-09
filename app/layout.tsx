import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shavo AI - Intelligence made useful.",
  description:
    "Shavo builds thoughtful AI tools that help people learn faster, create better, and work with more ease.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
