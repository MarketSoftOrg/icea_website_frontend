import { getSucursalBySlug } from '@/lib/data';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const sucursal = getSucursalBySlug(params.slug);
  const nombre = sucursal ? `Sucursal ${sucursal.nombre}` : 'Nuestras Sucursales';

  return {
    title: nombre,
    description: `Encuentra información sobre nuestra sucursal: ${nombre}`,
  };
}

export default async function SucursalesLayout({ children }: { children: React.ReactNode; params: { slug: string } }) {
  return <div className="bg-gray-100 min-h-screen flex flex-col">{children}</div>;
}
