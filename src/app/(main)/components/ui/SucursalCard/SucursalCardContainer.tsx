import { SucursalCard } from './SucursalCard';
import { Box, Text } from '@radix-ui/themes';
import { Award, Heart, Globe } from 'lucide-react';
import { getSucursales } from '@/lib/data';

export function SucursalCardContainer() {
  const sucursalesData = getSucursales();

  return (
    <Box className="bg-white rounded-lg shadow-md p-8 mb-12">
      <Box className="text-center mb-8">
        <h2 className="text-gray-900 mb-4 text-3xl font-bold lg:text-4xl">Carnicerías de Grupo ICEA</h2>
        <Text as="p" size="3" className="text-gray-600">
          Nuestras carnicerías especializadas en toda la región
        </Text>
      </Box>

      <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 xl:grid-cols-3  gap-3 md:gap-6 md:px-4">
        {sucursalesData.map((sucursal) => (
          <div key={sucursal.id}>
            <SucursalCard
              name={sucursal.nombre}
              description={sucursal.cardDescription}
              location={sucursal.cardLocation}
              link={`/sucursales/${sucursal.slug}`}
              iconBgColorClass={sucursal.iconBgColorClass}
              iconTextColorClass={sucursal.iconTextColorClass}
              buttonClassName={sucursal.buttonClassName}
              imageUrl={sucursal.imageUrl}
              phoneNumber={sucursal.telefono}
              whatsappUrl={sucursal.whatsappUrl}
              facebookUrl={sucursal.facebookUrl}
            />
          </div>
        ))}
      </div>

      <Box className="text-center mt-8">
        <Text as="p" size="2" className="text-gray-600 mb-6">
          Cada una de nuestras carnicerías mantiene los más altos estándares de calidad y servicio
        </Text>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
          <div className="flex items-center justify-center gap-2 sm:w-auto w-full sm:px-0 px-4">
            <Award className="h-4 w-4 text-amber-600 flex-shrink-0" />
            <Text className="text-sm text-gray-600 whitespace-nowrap">Calidad</Text>
          </div>

          <div className="flex items-center justify-center gap-2 sm:w-auto w-full sm:px-0 px-4">
            <Heart className="h-4 w-4 text-red-600 flex-shrink-0" />
            <Text className="text-sm text-gray-600 whitespace-nowrap">Atención Personalizada</Text>
          </div>

          <div className="flex items-center justify-center gap-2 sm:w-auto w-full sm:px-0 px-4">
            <Globe className="h-4 w-4 text-green-600 flex-shrink-0" />
            <Text className="text-sm text-gray-600 whitespace-nowrap">Productos Locales</Text>
          </div>
        </div>
      </Box>
    </Box>
  );
}
