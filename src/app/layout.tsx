import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Mehmet Furkan Güngör | Video Prodüksiyon ve Dijital İçerik",
  description:
    "Mehmet Furkan Güngör'ün video prodüksiyon, kurgu, sosyal medya yönetimi, Meta reklam bilgisi, e-ticaret içerikleri ve belgesel projeleri portfolyosu.",
  openGraph: {
    title: "Mehmet Furkan Güngör | Video Prodüksiyon ve Dijital İçerik",
    description:
      "Yeni Medya ve İletişim öğrencisi Mehmet Furkan Güngör için sinematik, profesyonel ve sade portfolyo sitesi.",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/hero-production.png`,
        width: 1536,
        height: 864,
        alt: "Video prodüksiyon portfolyosu hero görseli",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
