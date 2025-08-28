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
  title?: string;
  subtitle?: string;
}

export default function FeaturedProductsContainer({
  products,
  title = 'Productos Destacados',
  subtitle = 'Los mejores productos seleccionados para ti',
}: FeaturedProductsProps) {
  // Limitamos a 4 productos
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de la sección */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">{title}</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        </div>

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
