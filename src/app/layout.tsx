import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ORBIT · The Hearth",
  description: "A private little corner of the cosmos, for two.",
};

export const viewport: Viewport = {
  themeColor: "#070a18",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#070a18] text-slate-100 antialiased overflow-hidden select-none">
        {children}
      </body>
    </html>
  );
}
