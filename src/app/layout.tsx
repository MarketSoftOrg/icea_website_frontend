// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mi Template con shadcn/ui',
  description: 'Un template flexible y para aprender',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Asegúrate de que no haya espacios o saltos de línea entre <html> y <body>
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
