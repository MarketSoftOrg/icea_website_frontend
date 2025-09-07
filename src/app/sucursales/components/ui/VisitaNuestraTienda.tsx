import { Theme, Heading, Text, Flex } from '@radix-ui/themes';
import { Phone, Mail, Clock } from 'lucide-react';

export default function ContactSection() {
  return (
    <Theme appearance="dark" accentColor="amber" radius="large">
      <section id="contact" className="py-16 text-black" style={{ backgroundColor: '#FFF8E7' }}>
        {/* Usamos el mismo ancho y layout que MapAndDesc */}
        <div className="px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start md:items-center md:justify-between">
            {/* Columna izquierda: Info (flex-1 y max-w-xl, igual que MapAndDesc) */}
            <div className="flex-1 w-full max-w-xl space-y-8">
              {/* Header */}
              <h2 className="text-4xl font-bold text-black text-center md:text-left">Visita Nuestra Tienda</h2>

              {/* Teléfono Atención */}
              <Flex direction="column" gap="1">
                <div className="grid grid-cols-[auto_1fr] items-center gap-x-3">
                  {/* Columna 1: ícono */}
                  <Phone className="h-6 w-6 text-amber-600 shrink-0" />

                  {/* Columna 2: título */}
                  <Heading as="h3" size="4" className="mb-2 text-2xl leading-none">
                    Teléfono de Atención a Cliente
                  </Heading>

                  {/* Columna 2 (debajo del título): número */}
                  <div className="col-start-2">
                    <Text as="p" className="text-gray-700">
                      (555) 123-MEAT
                    </Text>
                  </div>
                </div>
              </Flex>

              {/* Teléfonos Pedidos */}
              <Flex direction="column" gap="1">
                <div className="grid grid-cols-[auto_1fr] items-center gap-x-3">
                  {/* Columna 1: ícono */}
                  <Phone className="h-6 w-6 text-amber-600 shrink-0" />

                  {/* Columna 2: título */}
                  <Heading as="h3" size="4" className="mb-2 text-2xl leading-none">
                    Teléfonos para Pedidos
                  </Heading>

                  {/* Columna 2 (debajo del título): números */}
                  <div className="col-start-2">
                    <Text as="p" className="text-gray-700">
                      (555) 456-7890
                    </Text>
                    <Text as="p" className="text-gray-700">
                      (555) 987-6543
                    </Text>
                  </div>
                </div>
              </Flex>

              {/* Correo */}
              <Flex direction="column" gap="1">
                <div className="grid grid-cols-[auto_1fr] items-center gap-x-3">
                  <Mail className="h-6 w-6 text-amber-600 shrink-0" />

                  <Heading as="h3" size="4" className="mb-2 text-2xl leading-none">
                    Correo Electrónico
                  </Heading>

                  <div className="col-start-2">
                    <Text as="p" className="text-gray-700">
                      info@carnesnormandia.com
                    </Text>
                  </div>
                </div>
              </Flex>

              {/* Horarios */}
              <Flex direction="column" gap="1">
                <div className="grid grid-cols-[auto_1fr] items-center gap-x-3">
                  <Clock className="h-6 w-6 text-amber-600 shrink-0" />

                  <Heading as="h3" size="4" className="mb-2 text-2xl leading-none">
                    Horarios
                  </Heading>

                  <div className="col-start-2">
                    <Text as="p" className="text-gray-700">
                      Lunes - Sábado: 6:00 AM - 9:00 PM
                    </Text>
                    <Text as="p" className="text-gray-700">
                      Domingo: 6:00 AM - 8:00 PM
                    </Text>
                  </div>
                </div>
              </Flex>
            </div>

            {/* Columna derecha: Mapa (flex-1, igual que la “foto”) */}
            <div className="flex-1 w-full">
              <div className="rounded-xl overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.38!2d-103.3567849!3d20.6598975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae4e98d5453d%3A0xd6b455c117a6c4ab!2sAv%20Presa%20de%20Osorio%203212%2C%20Agust%C3%ADn%20Y%C3%A1%C3%B1ez%20(La%20Florida)%2C%2044790%20Guadalajara%2C%20Jal.%2C%20Mexico!5e0!3m2!1ses-419!2smx!4v1716939600000!5m2!1ses-419!2smx"
                  className="w-full h-[320px] md:h-[360px] lg:h-[400px]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Carnes Normandia - Av Presa de Osorio 3212"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Theme>
  );
}
