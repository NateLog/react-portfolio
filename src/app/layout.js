import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

import { LIGHT_TOKENS, DARK_TOKENS } from "@/constants";

export const metadata = {
  title: "Nathan's Portfolio",
  description: "Designed for users",
};

export default function RootLayout({ children }) {
  const savedColorTheme = cookies().get("color-theme");
  const theme = savedColorTheme?.value || "light";
  return (
    <html
      className={inter.className}
      lang="en"
      data-color-theme={theme}
      style={theme === "light" ? LIGHT_TOKENS : DARK_TOKENS}
    >
      <body>
        <Header initialColorTheme={theme} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
