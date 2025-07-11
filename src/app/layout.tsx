import type { Metadata } from "next";
import { inter } from "./ui/fonts"
import "./globals.css";

export const metadata: Metadata = {
  title: "Economic Metrics",
  description: "Datos macroeconomocos de todos los paises",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body
        className={`${inter.className} antialiased`}
      >
        <main className="min-h-screen w-full flex flex-col items-center">
          <header className="w-full flex justify-between items-center px-10 py-8">
            <h1 className="text-3xl font-bold tracking-tight">Datos</h1>
            <nav className="space-x-6 text-sm text-foreground">
              <a href="#" className="hover:underline">Indicadores</a>
              <a href="#" className="hover:underline">Países</a>
              <a href="#" className="hover:underline">Categorías</a>
            </nav>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
