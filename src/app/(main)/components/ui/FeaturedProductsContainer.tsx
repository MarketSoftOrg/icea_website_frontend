import { getProductImagesFromFolder } from '@/lib/cloudinary';
import ProductCard from './ProductsCard';

export default async function FeaturedProductsContainer({
  sucursalProductsFolder,
}: {
  sucursalProductsFolder: string;
}) {
  const images = await getProductImagesFromFolder(sucursalProductsFolder);

  if (!images || images.length === 0) {
    return <div className="text-center text-gray-500">No hay productos destacados disponibles.</div>;
  }

  return (
    <section className="w-full bg-white py-1 sm:py-1 md:py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {images.map((image) => (
            <div key={image.src} className="flex justify-center">
              <ProductCard imageData={{ src: image.src, alt: image.alt }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
