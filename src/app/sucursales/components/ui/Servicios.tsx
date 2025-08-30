// app/components/ServicesSection.tsx

import { ChefHat, Award, Truck } from 'lucide-react';
import { Card, Heading, Text, Flex } from '@radix-ui/themes';

export default function Servicios() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600">Más que una carnicería - somos tus especialistas en carnes</p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card className="text-center border-1 rounded-2xl p-6">
            <Flex direction="column" align="center">
              <ChefHat className="h-12 w-12 text-amber-600 mb-4 mx-auto" />
              <Heading as="h3" size="4" className="mb-2">
                Cortes Personalizados
              </Heading>
              <Text size="3" color="gray">
                Servicios de corte personalizados según tus especificaciones exactas
              </Text>
            </Flex>
          </Card>

          {/* Card 2 */}
          <Card className="text-center border-1 rounded-2xl p-6">
            <Flex direction="column" align="center">
              <Truck className="h-12 w-12 text-amber-600 mb-4 mx-auto" />
              <Heading as="h3" size="4" className="mb-2">
                Pedidos Especiales
              </Heading>
              <Text size="3" color="gray">
                Asados para ocasiones especiales, animales enteros y cortes difíciles de encontrar
              </Text>
            </Flex>
          </Card>

          {/* Card 3 */}
          <Card className="text-center border-1 rounded-2xl p-6">
            <Flex direction="column" align="center">
              <Award className="h-12 w-12 text-amber-600 mb-4 mx-auto" />
              <Heading as="h3" size="4" className="mb-2">
                Procesamiento de Carnes
              </Heading>
              <Text size="3" color="gray">
                Servicios profesionales de procesamiento para cazadores y ganaderos
              </Text>
            </Flex>
          </Card>
        </div>
      </div>
    </section>
  );
}
