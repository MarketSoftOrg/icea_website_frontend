import { getSucursalBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SucursalPageWrapper } from '../components/SucursalPageWrapper';
import { getImagesFromFolder } from '@/lib/cloudinary';
import MapAndDesc from '@/app/(main)/components/ui/MapAndDescCard';
import Servicios from '../components/ui/Servicios';
import VisitaNuestraTienda from '../components/ui/VisitaNuestraTienda';
import CarouselContainer from '../components/ui/CarouselContainer';
import MainProductsContainer from '@/app/(main)/components/ui/MainProductsContainer';

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

  const carousel = sucursal.carousel;

  return (
    <SucursalPageWrapper sucursal={sucursal}>
      <CarouselContainer
        images={images}
        buttonText="Algunos de Nuestros Productos"
        buttonBgColor={carousel.buttonBgColor}
        buttonTextColor={carousel.buttonTextColor}
        titulo={carousel.titulo}
        descripcion={carousel.descripcion}
      />
      <section id="nuestros-productos">
        <MainProductsContainer
          sucursalProductsFolder={sucursal.cloudinaryProductsFolder}
          sucursalWhatsappUrl={sucursal.social.whatsappUrl}
        />
      </section>
      <MapAndDesc
        imageSrc={sucursal.fachada}
        description={sucursal.descripcion}
        sucursalId={sucursal.id}
        firstLogoText={sucursal.descFirstLogotext}
        secondLogoText={sucursal.descSecondLogotext}
      />
      <VisitaNuestraTienda />
      <Servicios />
    </SucursalPageWrapper>
  );
}
