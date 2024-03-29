import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Future Layoffs",
  description:
    "Got laid off ? Don't worry you can still cover those expensive trips !!",
  icons: {
    icon: "/fl.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-popins">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
