import { Card, Flex, Heading, Text } from '@radix-ui/themes';
import { Target, Heart, Users, Globe, Eye } from 'lucide-react';

export default function MissionVisionCard() {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      {/* Tarjeta de Misión */}
      <Card style={{ height: '100%' }}>
        <Flex direction="column" justify="between" className="h-full px-4 pt-4 pb-4">
          <div className="min-h-[290px]">
            <div className="w-16 h-16 bg-[#CDCDCD] rounded-full flex items-center justify-center mb-6 mx-auto">
              <Target className="h-10 w-10 text-[#062B49]" />
            </div>

            <Heading as="h3" className="text-2xl text-[#062B49] text-center font-bold mb-4">
              Nuestra Misión
            </Heading>

            <Text align="center" size="3" className="text-gray-700 leading-relaxed text-justify mb-4">
              Ofrecer productos cárnicos y de primera necesidad con los más altos estándares de calidad, higiene y
              servicio, satisfaciendo las necesidades de las familias tapatías gracias al talento, compromiso y pasión
              de nuestro equipo.
            </Text>
          </div>

          <Flex direction="column" gap="3" className="w-full mt-6">
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-[#062B49]" />
              <Text className="text-gray-600">Valoramos a cada persona por lo que es y por lo que aporta.</Text>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-[#062B49]" />
              <Text className="text-gray-600">Actuamos con transparencia y ética en todo momento.</Text>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-[#062B49]" />
              <Text className="text-gray-600">Creamos un ambiente amable y positivo.</Text>
            </div>
          </Flex>
        </Flex>
      </Card>

      {/* Tarjeta de Visión */}
      <Card style={{ height: '100%' }} className="md:border-l md:pl-8">
        <Flex direction="column" justify="between" className="h-full px-4 pt-4 pb-4">
          <div className="min-h-[290px]">
            <div className="w-16 h-16 bg-[#696464] rounded-full flex items-center justify-center mb-6 mx-auto">
              <Eye className="h-10 w-10 text-[#CDCDCD]" />
            </div>

            <Heading as="h3" className="text-2xl text-[#062B49] text-center font-bold mb-4">
              Nuestra Visión
            </Heading>

            <Text align="center" size="3" className="text-gray-700 leading-relaxed text-justify mb-4">
              Ser la opción preferida de nuestros clientes, destacándonos por nuestra variedad de productos, atención
              ágil y precios competitivos. Buscamos crecer con un enfoque siempre humano y con un excelente servicio al
              cliente..
            </Text>
          </div>

          <Flex direction="column" gap="3" className="w-full mt-6">
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-[#062B49]" />
              <Text className="text-gray-600">Actuamos con rectitud, siempre..</Text>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-[#062B49]" />
              <Text className="text-gray-600">Cumplimos lo que prometemos.</Text>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-[#062B49]" />
              <Text className="text-gray-600">Damos lo mejor de nosotros todos los días.</Text>
            </div>
          </Flex>
        </Flex>
      </Card>
    </div>
  );
}
