import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sammunat | Talent Hub Dashboard",
  description: "Global Innovation Network Hub connecting talent to USA-based opportunities.",
  icons: {
    // Virtual icon prevents 404 errors by embedding the image directly in code
    icon: `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%232563eb"/><text y=".75em" font-size="70" fill="white" font-family="sans-serif" font-weight="bold" x="50%" text-anchor="middle">S</text></svg>`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}