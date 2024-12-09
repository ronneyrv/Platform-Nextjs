import type { Metadata } from "next";

import { Header } from "@/components/header/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contact me",
  description: "Neste portfólio você irá conhecer um pouco mais sobre o Dev Ronney, um programador Full Stack em desenvolvimento.",
  icons: {
    icon: "/images/favicon.ico"
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-Br">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
