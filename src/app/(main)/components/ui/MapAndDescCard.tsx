import Image from 'next/image';
import { LucideIcon, Award, Users } from 'lucide-react';

type Props = {
  imageSrc: string;
  description: React.ReactNode;
  mapEmbedUrl: string;
  sucursalId: number;
  firstLogoText: string;
  secondLogoText: string;
};

export default function MapAndDesc({
  imageSrc,
  description,
  mapEmbedUrl,
  sucursalId,
  firstLogoText,
  secondLogoText,
}: Props) {
  let icon1: LucideIcon;
  let icon2: LucideIcon;
  icon1 = Award;
  icon2 = Award;
  // Cambiar los iconos segun la sucursal
  if (sucursalId === 6) {
    //Normandia
    icon1 = Award;
    icon2 = Users;
  }
  if (sucursalId === 5) {
    //TonalaCarniceria
    icon1 = Award;
    icon2 = Users;
  }
  if (sucursalId === 4) {
    //DelCampo
    icon1 = Award;
    icon2 = Users;
  }
  if (sucursalId === 3) {
    //RioNilo
    icon1 = Award;
    icon2 = Users;
  }
  if (sucursalId === 2) {
    //BaseAerea
    icon1 = Award;
    icon2 = Users;
  }
  if (sucursalId === 1) {
    //Valdepeñas
    icon1 = Award;
    icon2 = Users;
  }
  const Icon1 = icon1;
  const Icon2 = icon2;
  return (
    <section className="bg-[#FFF8E7] px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start md:items-center md:justify-between">
        {/* Texto y descripción */}
        <div className="flex-1 space-y-6 w-full max-w-xl">
          <h2 className="text-3xl font-bold text-neutral-900">Tres Generaciones de Excelencia</h2>
          <div className="text-neutral-700 text-lg space-y-4 text-justify">{description}</div>
          {/* Iconos */}
          <div className="flex flex-col md:flex-row gap-6 pt-6">
            {/* Icono 1 */}
            <div className="flex items-center text-gray-600">
              {Icon1 && <Icon1 className="h-10 w-10 mr-2 text-orange-400" />}
              <p className="text-sm font-bold">{firstLogoText}</p>
            </div>
            {/* Icono 2 */}
            <div className="flex items-center text-gray-600">
              {Icon2 && <Icon2 className="h-10 w-10 mr-2 text-orange-400" />}
              <p className="text-sm font-bold">{secondLogoText}</p>
            </div>
          </div>
        </div>
        {/* Imagen y mapa */}
        <div className="flex flex-col gap-4 flex-1">
          <div className="rounded-xl overflow-hidden shadow-md">
            <Image src={imageSrc} alt="Carnicería" width={640} height={360} className="object-cover w-full h-auto" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              src={mapEmbedUrl}
              className="w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] border-0 rounded-xl"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
