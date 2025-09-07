// PremiumSelectionContainer.tsx

import Link from 'next/link';
import CategoryBar from './CategoryBar';
import FeaturedProductsContainer from './FeaturedProductsContainer';

export default function MainProductsContainer({ logoData }: { logoData: { src: string; alt: string; text?: string } }) {
  return (
    <section className="w-full bg-white py-12 sm:py-8 md:py-12 border-t-4 border-orange-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-3">
            Nuestra Selección Premium
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed ">
            Desde res alimentada con pasto hasta aves de corral, ofrecemos solo las carnes de la más alta calidad
          </p>
        </div>

        <div className="mb-1 sm:mb-2 ">
          <CategoryBar />
        </div>
        <FeaturedProductsContainer logoData={logoData} />
        <div className="text-center">
          <Link
            href="/productos"
            className="inline-flex items-center justify-center px-8 py-4 mt-8 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-semibold rounded-lg text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Todos Los Productos
          </Link>
        </div>
      </div>
    </section>
  );
}
