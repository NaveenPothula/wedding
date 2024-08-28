import type { Metadata } from "next";

import "./globals.css";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nagesh And Jaya Silver Jubliee",
  description: "Nagesh And Jaya Silver Jubliee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={dancingScript.className}>
        <div className="py-0">{children}</div>
      </body>
    </html>
  );
}
