import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Boring Portfolio",
  description: "CLI tool to create a simple portfolio website with blog.",
  icons: {
    icon: '/icon.png'
  },
  openGraph: {
    title: "Create Boring Portfolio",
    description: "CLI tool to create a simple portfolio website with blog.",
    type: "website",
    url: "https://create-boring-portfolio.vercel.app",
    siteName: "Create Boring Portolio",
    images: [
      { url: "https://create-boring-portfolio.vercel.app/preview.png" }
    ]
  },
  twitter: {
    card: "summary_large_image", 
    site: "@create-boring-portfolio", 
    creator: "@leomosly", 
    images: "https://create-boring-portfolio.vercel.app/preview.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
