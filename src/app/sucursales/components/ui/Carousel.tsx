"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { CloudinaryImage } from '@/lib/cloudinary';

interface CarouselProps {
  images: CloudinaryImage[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [nextImage]);


  if (!images || images.length === 0) {
    return (
      <div className="text-center p-8">
        <p>No hay promociones disponibles en este momento.</p>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-lg shadow-2xl w-full max-w-4xl mx-auto my-8">
      <div className="relative h-64 md:h-96 lg:h-[500px] w-full bg-black">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src || '/placeholder.svg'}
              alt={image.alt}
              width={1200}
              height={800}
              className="w-full h-full object-contain bg-black"
              priority={index === 0} // Prioritize loading the first image
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white text-lg md:text-xl font-semibold">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
              index === currentImage ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
