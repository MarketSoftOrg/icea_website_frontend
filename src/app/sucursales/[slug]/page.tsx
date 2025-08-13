import { getSucursalBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SucursalPageWrapper } from '../components/SucursalPageWrapper';
import Carousel from '../components/ui/Carousel';
import { getImagesFromFolder } from '@/lib/cloudinary';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const sucursal = getSucursalBySlug(slug);
  const nombre = sucursal ? `Sucursal ${sucursal.nombre}` : 'Nuestras Sucursales';

  return {
    title: nombre,
    description: `Encuentra información sobre nuestra sucursal: ${nombre}`,
  };
}

export default async function SucursalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const sucursal = getSucursalBySlug(slug);

  if (!sucursal) {
    notFound();
  }

  const folderPath = sucursal.cloudinaryFolder;

  const images = await getImagesFromFolder(folderPath);

  return (
    <SucursalPageWrapper sucursal={sucursal}>
      <Carousel images={images} />
      <div className="p-4 md:p-6">
        <h1 className="text-2xl font-bold mb-4">Bienvenido a Sucursal {sucursal.nombre}</h1>
        <p className="mb-4">{sucursal.descripcion}</p>
        <div className="space-y-2">
          <p>
            <strong>Dirección:</strong> {sucursal.direccion}
          </p>
          <p>
            <strong>Teléfono:</strong> {sucursal.telefono}
          </p>
          <p>
            <strong>Horario:</strong> {sucursal.horario}
          </p>
        </div>
      </div>
    </SucursalPageWrapper>
  );
}
