import { getSucursalBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SucursalPageWrapper } from '../components/SucursalPageWrapper';
import { getImagesFromFolder } from '@/lib/cloudinary';
import MapAndDesc from '@/app/(main)/components/ui/MapAndDescCard';
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

  const logoData = {
    src: sucursal.card.imageUrlColor,
    alt: `Logo de la sucursal ${sucursal.nombre}`,
    text: sucursal.nombre,
  };

  return (
    <SucursalPageWrapper sucursal={sucursal}>
      <CarouselContainer
        images={images}
        buttonText="Nuestros Productos"
        buttonHref="/productos"
        buttonBgColor={carousel.buttonBgColor}
        buttonTextColor={carousel.buttonTextColor}
        titulo={carousel.titulo}
        descripcion={carousel.descripcion}
      />
      <MapAndDesc
        imageSrc={sucursal.fachada}
        description={sucursal.descripcion}
        mapEmbedUrl={sucursal.map}
        sucursalId={sucursal.id}
        firstLogoText={sucursal.descFirstLogotext}
        secondLogoText={sucursal.descSecondLogotext}
        horario={sucursal.horario}
      />
      <MainProductsContainer logoData={logoData} />
    </SucursalPageWrapper>
  );
}
