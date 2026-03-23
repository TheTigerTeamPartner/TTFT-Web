import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TTFT — The Tiger Team Foundation Technology",
  description: "Dominating the Future of Deep Tech. We re-engineer urban connectivity with high performance AI and quantum algorithms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
