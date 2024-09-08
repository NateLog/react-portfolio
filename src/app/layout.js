import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nathan's Portfolio",
  description: "Designed for users",
};

export default function RootLayout({ children }) {
  return (
    <html className={inter.className} lang="en">
      <body>{children}</body>
    </html>
  );
}
