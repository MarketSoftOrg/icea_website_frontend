import React from 'react';
import { Upload } from 'lucide-react';
import { getSucursalBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SucursalPageWrapper } from '../../components/SucursalPageWrapper';

export default async function JobApplicationSkeleton({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sucursal = getSucursalBySlug(slug);

  if (!sucursal) {
    notFound();
  }

  return (
    <SucursalPageWrapper sucursal={sucursal}>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Aplicar al Puesto</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Documentos</label>
                <div className="mb-4">
                  <label htmlFor="cv-upload" className="block text-sm font-medium text-gray-700 mb-2">
                    Currículum Vitae (PDF) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer group">
                    <input
                      id="cv-upload"
                      name="cv"
                      type="file"
                      accept=".pdf"
                      required
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2 group-hover:text-gray-500 transition-colors" />
                    <p className="text-sm text-gray-600 mb-1">
                      <span className="text-orange-500 font-medium">Subir archivo</span> o arrastra y suelta
                    </p>
                    <p className="text-xs text-gray-500">PDF hasta 10MB</p>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Mensaje Adicional
                </label>
                <textarea
                  id="message"
                  name="additionalMessage"
                  placeholder="¿Hay algo más que te gustaría que sepamos sobre ti?"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none text-sm"
                />
              </div>
              <div>
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    id="terms"
                    name="acceptTerms"
                    type="checkbox"
                    required
                    className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 focus:ring-2 mt-0.5"
                  />
                  <span className="text-sm text-gray-700">
                    Acepto los términos y condiciones y autorizo el tratamiento de mis datos personales{' '}
                    <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>
              <div className="flex gap-3 pt-4">
                <Link href={`bolsa-trabajo`}>
                  <button
                    type="reset"
                    className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancelar
                  </button>
                </Link>
                <button
                  type="button"
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors duration-200"
                >
                  Enviar Aplicación
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SucursalPageWrapper>
  );
}
