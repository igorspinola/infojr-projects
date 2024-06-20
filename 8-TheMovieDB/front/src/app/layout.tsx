import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({weight:  ["400", "500", "600", "700", "800", "900"], subsets: ["latin-ext"]});

export const metadata: Metadata = {
  title: "CineGlota",
  description: "Aprenda idiomas assistindo filmes e séries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <h2 className="fixed m-6 w-min h-min font-extrabold text-2xl">
          Cine<span className="text-red-700">Glota</span>
        </h2>
        {children}
      </body>
    </html>
  );
}
