import React from 'react';

interface NoResultsBannerProps {
  className?: string;
}

const NoResultsBanner: React.FC<NoResultsBannerProps> = ({ className }) => {
  return (
    <div className={`bg-white px-8 py-12 text-center ${className || ''}`}>
      {/* Main heading */}
      <h2 className="text-orange-600 text-2xl font-semibold mb-4">¿No encontraste lo que buscas?</h2>

      {/* Subtitle */}
      <p className="text-gray-700 text-base mb-8 max-w-2xl mx-auto leading-relaxed">
        Envíanos tu CV y te contactaremos cuando tengamos una posición que se ajuste a tu perfil
      </p>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <form action="/api/upload-cv" method="post" encType="multipart/form-data" className="inline-block">
          <label
            htmlFor="cv-upload"
            className="bg-orange-600 text-white hover:bg-orange-700 font-medium px-6 py-3 rounded-md transition-colors duration-200 min-w-[180px] cursor-pointer inline-block"
          >
            Enviar CV Espontáneo
          </label>
          <input id="cv-upload" name="cv" type="file" accept=".pdf" className="sr-only" />
        </form>

        <a
          href="mailto:rrhh@empresa.com?subject=Consulta%20sobre%20oportunidades%20laborales"
          className="bg-orange-600 text-white hover:bg-orange-700 font-medium px-6 py-3 rounded-md transition-colors duration-200 min-w-[180px] inline-block text-center"
        >
          Contactar RRHH
        </a>
      </div>
    </div>
  );
};

export default NoResultsBanner;
