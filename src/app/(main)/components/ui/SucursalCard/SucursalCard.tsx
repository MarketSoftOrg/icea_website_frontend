import Link from 'next/link';
import Image from 'next/image';
import { Card, Box, Text, Button } from '@radix-ui/themes';
import { Phone, MapPin, MessageCircle, Facebook } from 'lucide-react';

interface SucursalCardProps {
  name: string;
  description: string;
  location: string;
  phoneNumber: string;
  link: string;
  iconBgColorClass: string;
  iconTextColorClass: string;
  buttonClassName: string;
  imageUrl: string;
  whatsappUrl: string;
  facebookUrl: string;
}

export function SucursalCard({
  name,
  description,
  location,
  phoneNumber,
  link,
  iconBgColorClass,
  iconTextColorClass,
  buttonClassName,
  imageUrl,
  whatsappUrl,
  facebookUrl,
}: SucursalCardProps) {
  return (
    <Card className="border border-gray-200 rounded-md hover:shadow-xl transition-shadow duration-300 sm:min-h-[500px] xl:min-h-[650px] 2xl:min-h-[750px] flex flex-col justify-between py-8 px-6">
      <Box className="text-center mb-4">
        <div
          className={`w-20 h-20 ${iconBgColorClass} rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden`}
        >
          <Image src={imageUrl} alt={`Logo de ${name}`} width={80} height={80} className="object-contain" />
        </div>
        <h3 className={`text-lg ${iconTextColorClass}`}>
          <Text as="span" size="4" weight="bold">
            {name}
          </Text>
        </h3>
      </Box>
      <Box className="text-center flex-grow mb-4">
        <Text as="p" size="2" className="text-gray-600 mb-4">
          {description}
        </Text>

        <div className="flex flex-col items-center text-xs text-gray-500 mb-2">
          <div className="flex items-center gap-1">
            <div className="flex-shrink-0">
              <MapPin size={25} className="text-red-500 relative -top-1" />
            </div>
            <span>{location}</span>
          </div>
        </div>

        <div className="flex flex-col items-center text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <div className="flex-shrink-0">
              <Phone size={25} className="text-green-500 relative -top-1" />
            </div>
            <span>{phoneNumber}</span>
          </div>
        </div>
      </Box>

      <div className="flex justify-center gap-4 mt-4">
        <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <Button className="flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-200 hover:shadow-md bg-green-500 hover:bg-green-600 text-white cursor-pointer">
            <MessageCircle size={24} />
          </Button>
        </Link>
        <Link href={facebookUrl} target="_blank" rel="noopener noreferrer">
          <Button className="flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-200 hover:shadow-md bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
            <Facebook size={24} />
          </Button>
        </Link>
      </div>

      <Link href={link}>
        <Button
          className={`mt-4 mx-auto px-10 py-2 rounded-md transition-colors duration-200 hover:shadow-md cursor-pointer ${buttonClassName}`}
        >
          Visitar Tienda
        </Button>
      </Link>
    </Card>
  );
}
