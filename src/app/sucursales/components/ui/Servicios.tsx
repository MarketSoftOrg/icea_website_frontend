// app/components/ServicesSection.tsx

import { ChefHat, Truck, Beef } from 'lucide-react';
import { Card, Heading, Text, Flex } from '@radix-ui/themes';

export default function Servicios() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <Heading as="h3" size="4" className="mb-2 text-2xl">
            Más que una carnicería - somos tus especialistas en carnes
          </Heading>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Card className="text-center border-1 rounded-2xl p-6">
            <Flex direction="column" align="center">
              <Beef className="h-12 w-12 text-amber-600 mb-4 mx-auto" />
              <Heading as="h3" size="4" className="mb-2 text-2xl">
                Venta de cortes de carne fresca
              </Heading>
              <Text size="3" color="gray">
                Res, cerdo, pollo, pescado y borrego
              </Text>
            </Flex>
          </Card>

          {/* Card 2 */}
          <Card className="text-center border-1 rounded-2xl p-6">
            <Flex direction="column" align="center">
              <ChefHat className="h-12 w-12 text-amber-600 mb-4 mx-auto" />
              <Heading as="h3" size="4" className="mb-2 text-2xl">
                Preparación y procesamiento
              </Heading>
              <Text size="3" color="gray">
                Cortes al gusto, Marinados, Elaboracion de productos propios.
              </Text>
            </Flex>
          </Card>

          {/* Card 3 */}
          <Card className="text-center border-1 rounded-2xl p-6">
            <Flex direction="column" align="center">
              <Truck className="h-12 w-12 text-amber-600 mb-4 mx-auto" />
              <Heading as="h3" size="4" className="mb-2 text-2xl">
                Entrega a domicilio
              </Heading>
              <Text size="3" color="gray">
                Entregamos tu pedido hasta la puerta de tu casa sin costo extra.
              </Text>
            </Flex>
          </Card>
        </div>
      </div>
    </section>
  );
}
