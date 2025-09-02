import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="text-center mb-12 mt-12 p-5">
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center overflow-hidden">
          <Image
            src="/logos/icea_blanco.png"
            alt="Logo ICEA"
            width={96}
            height={96}
            className="rounded-full object-cover"
          />
        </div>
      </div>
      <h1 className="text-5xl font-bold text-gray-900 mb-4">Grupo ICEA</h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Innovación, Calidad, Excelencia y Alimentación - Comprometidos con el futuro de la industria cárnica
      </p>
    </div>
  );
}
