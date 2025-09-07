import { getSampleProducts } from '@/lib/data';
import { getProductsWithImages } from '@/lib/cloudinary';
import ProductCard from './ProductsCard';

export default async function FeaturedProductsContainer({
  logoData,
}: {
  logoData: { src: string; alt: string; text?: string };
}) {
  const sampleProducts = getSampleProducts();
  const featuredProductsData = sampleProducts.slice(0, 4);

  const productsWithImages = await getProductsWithImages(featuredProductsData, logoData, 'productos');

  return (
    <section className="w-full bg-white py-1 sm:py-1 md:py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {productsWithImages.map((product) => (
            <div key={product.id} className="flex justify-center">
              <ProductCard
                title={product.title}
                description={product.description}
                category={product.category}
                imageData={product.imageData}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
