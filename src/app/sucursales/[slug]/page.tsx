import { getSucursalBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SucursalPageWrapper } from '../components/SucursalPageWrapper';
import MainPageContentContainer from '@/app/(main)/components/ui/MainPageContentContainer';
import MapAndDesc from '@/app/(main)/components/ui/MapAndDescCard';
import { Clock } from 'lucide-react';

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

  return (
    <SucursalPageWrapper sucursal={sucursal}>
      <h1 className="text-4xl font-extrabold text-neutral-800 pb-1 tracking-tight text-center text-shadow-lg">
        {sucursal.nombre}
      </h1>
      <MainPageContentContainer>
        <MapAndDesc
          imageSrc={sucursal.fachada}
          description={sucursal.descripcion}
          mapEmbedUrl={sucursal.map}
          sucursalId={sucursal.id}
          firstLogoText={sucursal.descFirstLogotext}
          secondLogoText={sucursal.descSecondLogotext}
        />
      </MainPageContentContainer>
      <div className="max-w-7xl mx-auto px-6">
        <div className="ml-4 md:ml-8 lg:ml-12">
          <div className="space-y-2 mt-4">
            <div className="flex items-center text-lg text-neutral-700">
              <Clock className="h-5 w-5 text-orange-500 mr-2" />
              <span>
                <span className="font-semibold text-orange-500">Horario:</span> {sucursal.horario}
              </span>
            </div>
          </div>
        </div>
      </div>
    </SucursalPageWrapper>
  );
}
