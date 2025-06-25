import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inicio',
};

export default function HomePage() {
  return (
    <section className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-extrabold tracking-tight lg:text-5xl">Construye Algo Increíble</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Template Next js con navbar y footbar, este contenido proviene de{' '}
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          src/app/page.tsx
        </code>
        .
      </p>
      <div className="mt-8 flex gap-4">
        <Button asChild>
          <Link href="/acerca-de">Saber Más</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/contacto">Contacto</Link>
        </Button>
      </div>
    </section>
  );
}
