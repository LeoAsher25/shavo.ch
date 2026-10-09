import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dubly.cc - Intelligence made useful.",
  description:
    "Dubly.cc builds thoughtful AI tools that help people learn faster, create better, and work with more ease.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
