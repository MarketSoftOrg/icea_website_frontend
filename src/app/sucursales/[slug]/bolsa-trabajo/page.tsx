import { getSucursalBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import { SucursalPageWrapper } from '../../components/SucursalPageWrapper';
import { Briefcase, GraduationCap, Medal, Users, Wallet } from 'lucide-react';
import MainPageContentContainer from '@/app/(main)/components/ui/MainPageContentContainer';
import Image from 'next/image';

export default async function ContactoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sucursal = getSucursalBySlug(slug);

  if (!sucursal) {
    notFound();
  }

  return (
    <SucursalPageWrapper sucursal={sucursal}>
      <div className="bg-[#FFFBEB] p-6 flex items-center gap-4 rounded-4xl shadow-2xs w-full sm:w-11/12 md:w-11/12 lg:w-10/12 2xl:w-3/4 justify-center mx-auto mb-6">
        <div className="bg-yellow-100 rounded-full p-3 flex items-center justify-center">
          <Briefcase className="text-orange-600 w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Bolsa de Trabajo</h1>
          <p className="text-gray-700">Únete a la familia {sucursal.nombre} y construye tu carrera con nosotros</p>
        </div>
      </div>
      <MainPageContentContainer>
        <div className="px-4 py-8 md:px-8 lg:px-10 xl:px-16 rounded-xl flex flex-col-reverse xl:flex-row items-center gap-8">
          <div className="w-full xl:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué trabajar en {sucursal.nombre}?
            </h2>
            <p className="text-gray-700 mb-6 text-base md:text-lg">
              Somos una empresa familiar con más de 70 años de experiencia en el sector cárnico. Ofrecemos un ambiente
              de trabajo estable, oportunidades de crecimiento y beneficios competitivos.
            </p>
            {/* Grid iconos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6">
              <div className="flex items-start gap-3">
                <Users className="text-orange-600 w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Ambiente Familiar</p>
                  <p className="text-gray-600 text-sm">Equipo unido y colaborativo</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <GraduationCap className="text-orange-600 w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Capacitación</p>
                  <p className="text-gray-600 text-sm">Desarrollo profesional continuo</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Medal className="text-orange-600 w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Reconocimiento</p>
                  <p className="text-gray-600 text-sm">Valoramos tu esfuerzo</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Wallet className="text-orange-600 w-6 h-6 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Beneficios</p>
                  <p className="text-gray-600 text-sm">Paquete competitivo</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <Image
              src={sucursal.fachada}
              alt="Carnicería"
              width={640}
              height={360}
              className="object-cover w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </MainPageContentContainer>
    </SucursalPageWrapper>
  );
}
