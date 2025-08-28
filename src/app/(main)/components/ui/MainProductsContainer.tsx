// PremiumSelectionContainer.tsx
import CategoryBar from './CategoryBar';
import FeaturedProductsContainer from './FeaturedProductsContainer';

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

interface MainProductsContainer {
  products: Product[];
  onViewAllProducts?: () => void;
}

export default function MainProductsContainer({ products, onViewAllProducts }: MainProductsContainer) {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 border-t-4 border-orange-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Nuestra Selección Premium
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Desde res alimentada con pasto hasta aves de corral, ofrecemos solo las carnes de la más alta calidad
          </p>
        </div>

        <div className="mb-6 sm:mb-8 md:mb-10">
          <CategoryBar />
        </div>

        <FeaturedProductsContainer
          products={products}
          title="Productos Destacados"
          subtitle="Explora nuestra selección de carnes premium, cuidadosamente seleccionadas para ti"
        />

        <div className="text-center">
          <button
            onClick={onViewAllProducts}
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-semibold rounded-lg text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Todos Los Productos
          </button>
        </div>
      </div>
    </section>
  );
}
