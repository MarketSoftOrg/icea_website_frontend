import { Theme, Heading, Text, Flex } from '@radix-ui/themes';
import { Phone, Mail, Clock } from 'lucide-react';

interface ContactProps {
  contactData: {
    customerServicePhone: string;
    orderPhones: string[];
    email: string;
    openingHours: {
      weekdays: string;
      sunday: string;
    };
    mapSrc: string;
    mapTitle: string;
  };
}
export default function VisitaNuestraTienda({ contactData }: ContactProps) {
  const { customerServicePhone, orderPhones, email, openingHours, mapSrc, mapTitle } = contactData;

  return (
    <Theme appearance="dark" accentColor="amber" radius="large">
      <section id="contact" className="py-16 text-black" style={{ backgroundColor: '#FFF8E7' }}>
        <div className="px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start md:items-center md:justify-between">
            <div className="flex-1 w-full max-w-xl space-y-8">
              <h2 className="text-4xl font-bold text-black text-center md:text-left">Visita Nuestra Tienda</h2>
              <Flex direction="column" gap="1">
                <div className="grid grid-cols-[auto_1fr] items-center gap-x-3">
                  <Phone className="h-6 w-6 text-amber-600 shrink-0" />
                  <Heading as="h3" size="4" className="mb-2 text-2xl leading-none">
                    Teléfono de Atención a Cliente
                  </Heading>
                  <div className="col-start-2">
                    <Text as="p" className="text-gray-700">
                      {customerServicePhone}
                    </Text>
                  </div>
                </div>
              </Flex>
              <Flex direction="column" gap="1">
                <div className="grid grid-cols-[auto_1fr] items-center gap-x-3">
                  <Phone className="h-6 w-6 text-amber-600 shrink-0" />
                  <Heading as="h3" size="4" className="mb-2 text-2xl leading-none">
                    Teléfonos para Pedidos
                  </Heading>
                  <div className="col-start-2">
                    {orderPhones.map((phone, index) => (
                      <Text key={index} as="p" className="text-gray-700">
                        {phone}
                      </Text>
                    ))}
                  </div>
                </div>
              </Flex>
              <Flex direction="column" gap="1">
                <div className="grid grid-cols-[auto_1fr] items-center gap-x-3">
                  <Mail className="h-6 w-6 text-amber-600 shrink-0" />
                  <Heading as="h3" size="4" className="mb-2 text-2xl leading-none">
                    Correo Electrónico
                  </Heading>
                  <div className="col-start-2">
                    <Text as="p" className="text-gray-700">
                      {email}
                    </Text>
                  </div>
                </div>
              </Flex>
              <Flex direction="column" gap="1">
                <div className="grid grid-cols-[auto_1fr] items-center gap-x-3">
                  <Clock className="h-6 w-6 text-amber-600 shrink-0" />
                  <Heading as="h3" size="4" className="mb-2 text-2xl leading-none">
                    Horarios
                  </Heading>
                  <div className="col-start-2">
                    <Text as="p" className="text-gray-700">
                      {openingHours.weekdays}
                    </Text>
                    <Text as="p" className="text-gray-700">
                      {openingHours.sunday}
                    </Text>
                  </div>
                </div>
              </Flex>
            </div>
            <div className="flex-1 w-full">
              <div className="rounded-xl overflow-hidden shadow-md">
                <iframe
                  src={mapSrc}
                  className="w-full h-[320px] md:h-[360px] lg:h-[400px]"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={mapTitle}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Theme>
  );
}
