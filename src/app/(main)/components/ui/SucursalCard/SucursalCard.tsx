import Link from 'next/link';
import Image from 'next/image';
import { Card, Box, Text, Button } from '@radix-ui/themes';

interface SucursalCardProps {
  name: string;
  description: string;
  location: string;
  link: string;
  iconBgColorClass: string;
  iconTextColorClass: string;
  buttonClassName: string;
  imageUrl: string;
}

export function SucursalCard({
  name,
  description,
  location,
  link,
  iconBgColorClass,
  iconTextColorClass,
  buttonClassName,
  imageUrl,
}: SucursalCardProps) {
  return (
    <Card className="border border-gray-200 rounded-md hover:shadow-xl transition-shadow duration-300 min-h-[62vh] flex flex-col justify-between py-8 px-6">
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
        <div className="flex flex-col items-center gap-2 text-xs text-gray-500">
          <div className="flex items-center justify-center gap-1">
            <span>📍</span>
            <Text>{location}</Text>
          </div>
        </div>
      </Box>

      <Link href={link} passHref>
        <Button
          size="3"
          className={`mt-4 mx-auto px-20 py-2 rounded-md transition-colors duration-200 hover:shadow-md ${buttonClassName}`}
        >
          Visitar Tienda
        </Button>
      </Link>
    </Card>
  );
}
