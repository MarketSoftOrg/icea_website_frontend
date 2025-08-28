// FeaturedProducts.tsx
import ProductCard from './ProductsCard';

interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  unit: string;
  oldPrice?: number;
  imageUrl: string;
  promoLabel?: string;
}

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProductsContainer({ products }: FeaturedProductsProps) {
  // Limitamos a 4 productos
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="flex justify-center">
              <ProductCard
                title={product.title}
                description={product.description}
                category={product.category}
                price={product.price}
                unit={product.unit}
                oldPrice={product.oldPrice}
                imageUrl={product.imageUrl}
                promoLabel={product.promoLabel}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
