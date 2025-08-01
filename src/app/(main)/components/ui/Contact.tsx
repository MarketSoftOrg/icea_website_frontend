import React from 'react';
import { Building, Mail, Phone, Handshake, ArrowRight } from 'lucide-react';

export default function ContactoCorporativo() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacto Corporativo</h1>
        <p className="text-xl text-gray-700">¿Interesado en formar parte de Grupo ICEA?</p>
      </div>

      {/* Sección de contactos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Oficinas Corporativas */}
        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex flex-col items-center text-center">
            <div className="bg-red-100 p-4 rounded-full mb-6">
              <Building className="text-red-600" size={36} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Oficinas Corporativas</h2>
            <div className="text-lg text-gray-700 space-y-3">
              <p>Av. Empresarial 1234</p>
              <p>Guadalajara, Jalisco, México</p>
            </div>
          </div>
        </div>

        {/* Recursos Humanos */}
        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex flex-col items-center text-center">
            <div className="bg-red-100 p-4 rounded-full mb-6">
              <Mail className="text-red-600" size={36} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recursos Humanos</h2>
            <div className="text-lg text-gray-700 space-y-3">
              <a
                href="mailto:rrhh@grupolcea.com"
                className="flex items-center justify-center hover:text-red-600 transition-colors"
              >
                <Mail className="mr-2" size={20} /> rrhh@grupolcea.com
              </a>
              <p className="flex items-center justify-center">
                <Phone className="mr-2" size={20} /> (33) 1234-5678 ext. 100
              </p>
            </div>
          </div>
        </div>

        {/* Desarrollo de Negocios */}
        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex flex-col items-center text-center">
            <div className="bg-red-100 p-4 rounded-full mb-6">
              <Handshake className="text-red-600" size={36} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Desarrollo de Negocios</h2>
            <div className="text-lg text-gray-700 space-y-3">
              <a
                href="mailto:negocios@grupolcea.com"
                className="flex items-center justify-center hover:text-red-600 transition-colors"
              >
                <Mail className="mr-2" size={20} /> negocios@grupolcea.com
              </a>
              <p className="flex items-center justify-center">
                <Phone className="mr-2" size={20} /> (33) 1234-5678 ext. 200
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Conoce Nuestras Empresas */}
      <div className="bg-gradient-to-r from-red-50 to-gray-50 rounded-2xl p-10 border border-gray-200 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Conoce Nuestras Empresas</h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Descubre nuestra familia de empresas líderes en el sector alimentario
        </p>

        <div className="flex justify-center mb-8">
          <div className="bg-white p-6 rounded-full border-4 border-red-100">
            <div className="bg-red-100 p-6 rounded-full">
              <Building className="text-red-600" size={48} />
            </div>
          </div>
        </div>

        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full flex items-center justify-center mx-auto transition-colors shadow-lg transform hover:scale-105 duration-300">
          Descubrir Empresas <ArrowRight className="ml-3" size={24} />
        </button>
      </div>
    </div>
  );
}
