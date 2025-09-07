import Image from 'next/image';

interface ProductCardProps {
  imageData: { src: string; alt: string };
}

export default function ProductCard({ imageData }: ProductCardProps) {
  return (
    <div className="group bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col w-full max-w-xs mx-auto transition-all duration-300">
      <div className="relative aspect-[4/4] overflow-hidden rounded-xl">
        <Image
          src={imageData.src}
          alt={imageData.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain transition-transform duration-300"
        />
      </div>
    </div>
  );
}
