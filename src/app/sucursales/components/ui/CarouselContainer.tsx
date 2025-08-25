'use client';

import Link from 'next/link';
import Carousel from './Carousel';
import type { CloudinaryImage } from '@/lib/cloudinary';

interface CarouselContainerProps {
  images: CloudinaryImage[];
  buttonText: string;
  buttonHref: string;
  buttonTextColor?: string;
  buttonBgColor?: string;
  gradientFromColor?: string;
  gradientToColor?: string;
  titulo?: string;
  descripcion?: string;
}

export default function CarouselContainer({
  images,
  buttonText,
  buttonHref,
  buttonTextColor = '#a16207',
  buttonBgColor = '#ffffff',
  gradientFromColor = '#facc15',
  gradientToColor = '#d97706',
  titulo,
  descripcion,
}: CarouselContainerProps) {
  return (
    <section
      id="home"
      className="relative text-white py-1"
      style={{
        background: `linear-gradient(to top, ${gradientFromColor}, ${gradientToColor})`,
      }}
    >
      <div className="w-full mb-12">
        <Carousel images={images} />
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{titulo}</h2>
          <p className="text-lg md:text-xl mb-8 text-amber-50">{descripcion}</p>
          <div className="flex justify-center">
            <Link
              href={buttonHref}
              className="inline-block px-8 py-3 mb-10 text-lg font-medium text-center rounded-lg transition hover:brightness-95"
              style={{
                backgroundColor: buttonBgColor,
                color: buttonTextColor,
              }}
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
