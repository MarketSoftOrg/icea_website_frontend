import Image from 'next/image';

interface ProductCardProps {
  title: string;
  description: string;
  category: string;
  imageData: { src: string; alt: string; text?: string };
}

export default function ProductCard({ title, description, category, imageData }: ProductCardProps) {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg overflow-hidden flex flex-col w-full max-w-xs mx-auto transition-all duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageData?.src}
          alt={imageData?.alt || title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col justify-between flex-1 p-3 sm:p-4">
        <div className="flex-1">
          <h3 className="text-sm sm:text-base font-semibold text-gray-800 leading-tight mb-1.5 line-clamp-2">
            {title}
          </h3>
          <p className="text-xs text-gray-600 mb-2.5 line-clamp-2 leading-relaxed">{description}</p>
        </div>
        <div className="mt-auto space-y-2.5">
          <span className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-md transition-colors">
            {category}
          </span>
        </div>
      </div>
    </div>
  );
}
