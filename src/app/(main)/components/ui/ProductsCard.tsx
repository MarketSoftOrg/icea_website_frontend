// ProductCard.tsx
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  description: string;
  category: string;
  price: number;
  unit: string;
  oldPrice?: number;
  imageUrl: string;
  promoLabel?: string;
}

export default function ProductCard({
  title,
  description,
  category,
  price,
  unit,
  oldPrice,
  imageUrl,
  promoLabel,
}: ProductCardProps) {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg overflow-hidden flex flex-col w-full max-w-xs mx-auto transition-all duration-300 hover:-translate-y-1">
      {/* Imagen del producto */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {promoLabel && (
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-orange-500 text-white text-xs sm:text-sm font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-lg animate-pulse">
            {promoLabel}
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-col justify-between flex-1 p-3 sm:p-4">
        {/* Parte superior (texto y descripción) */}
        <div className="flex-1">
          <h3 className="text-sm sm:text-base font-semibold text-gray-800 leading-tight mb-1.5 line-clamp-2">
            {title}
          </h3>
          <p className="text-xs text-gray-600 mb-2.5 line-clamp-2 leading-relaxed">{description}</p>
        </div>

        {/* Parte inferior (categoría, precio y botón) */}
        <div className="mt-auto space-y-2.5">
          {/* Categoría */}
          <span className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-md transition-colors">
            {category}
          </span>

          {/* Precio */}
          <div className="flex items-center gap-2 flex-wrap">
            {oldPrice && <span className="text-xs sm:text-sm text-gray-400 line-through">${oldPrice.toFixed(2)}</span>}
            <span className="text-green-600 font-bold text-sm sm:text-base">
              ${price.toFixed(2)}/{unit}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
