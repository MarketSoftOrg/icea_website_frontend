import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getSucursales } from '@/lib/data';
import ValuesCard from './components/ui/ValuesCard';

export const metadata: Metadata = {
  title: 'Inicio',
};

const valuesicea = [
  {
    initial: 'I',
    title: 'Innovación',
    description: 'Buscamos constantemente nuevas formas de mejorar nuestros productos y procesos',
  },
  {
    initial: 'C',
    title: 'Calidad',
    description: 'Mantenemos los más altos estándares en todos nuestros productos y servicios',
  },
  {
    initial: 'E',
    title: 'Excelencia',
    description: 'Nos esforzamos por superar las expectativas en cada proyecto que emprendemos',
  },
  {
    initial: 'A',
    title: 'Alimentación',
    description: 'Nos dedicamos a nutrir y alimentar de manera responsable y sostenible',
  },
];

export default async function HomePage() {
  const sucursales = await getSucursales();

  return (
    <section className="flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-extrabold tracking-tight lg:text-5xl">HOME DE ICEA</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Este contenido proviene de{' '}
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

      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold">Nuestras Sucursales</h2>
        <p className="mt-2 text-md text-muted-foreground">Visítanos en cualquiera de nuestras ubicaciones.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {sucursales.map((sucursal) => (
            <div key={sucursal.id} className="p-6 border rounded-lg bg-card">
              <h3 className="text-xl font-semibold">{sucursal.nombre}</h3>
              <p className="mt-2 text-muted-foreground">{sucursal.direccion}</p>
              <Button asChild className="mt-4">
                <Link href={`/sucursales/${sucursal.slug}`}>Ver Detalles</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
      <ValuesCard
        title="Nuestros Valores"
        subtitle="Los principios que guían cada una de nuestras acciones"
        values={valuesicea}
      />
    </section>
  );
}
