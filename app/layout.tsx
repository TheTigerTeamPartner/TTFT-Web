import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TTFT — The Tiger Team Foundation Technology",
  description:
    "Dominating the Future of Deep Tech. The Tiger Team delivers high-performance AI and Quantum algorithms to conquer energy bottlenecks and industrial complexity.",
  icons: {
    icon: "/logo-title.png",
    apple: "/logo-title.png",
  },
  alternates: {
    canonical: "https://www.tigerfoundationtech.co.th",
  },
  openGraph: {
    title: "TTFT — The Tiger Team Foundation Technology",
    description:
      "Dominating the Future of Deep Tech. The Tiger Team delivers high-performance AI and Quantum algorithms to conquer energy bottlenecks and industrial complexity.",
    url: "https://www.tigerfoundationtech.co.th",
    siteName: "TTFT",
    images: [
      {
        url: "https://www.tigerfoundationtech.co.th/logo-title.png",
        width: 1200,
        height: 630,
        alt: "TTFT — The Tiger Team Foundation Technology",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TTFT — The Tiger Team Foundation Technology",
    description:
      "Dominating the Future of Deep Tech. The Tiger Team delivers high-performance AI and Quantum algorithms to conquer energy bottlenecks and industrial complexity.",
    images: ["https://www.tigerfoundationtech.co.th/logo-title.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
