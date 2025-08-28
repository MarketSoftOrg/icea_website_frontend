// CategoryIconsBar.tsx
import Link from 'next/link';
import { Beef, PiggyBank, Fish, Bird, Apple } from 'lucide-react';

interface CategoryItem {
  id: string;
  name: string;
  href: string;
  icon: React.ReactNode;
  bgColor: string;
  hoverBgColor: string;
}

const categories: CategoryItem[] = [
  {
    id: 'res',
    name: 'Res',
    href: '/categoria/res',
    icon: <Beef className="w-5 h-5 sm:w-6 sm:h-6" />,
    bgColor: 'bg-red-100',
    hoverBgColor: 'hover:bg-red-200',
  },
  {
    id: 'cerdo',
    name: 'Cerdo',
    href: '/categoria/cerdo',
    icon: <PiggyBank className="w-5 h-5 sm:w-6 sm:h-6" />,
    bgColor: 'bg-pink-100',
    hoverBgColor: 'hover:bg-pink-200',
  },
  {
    id: 'pescados-mariscos',
    name: 'Pescados y Mariscos',
    href: '/categoria/pescados-mariscos',
    icon: <Fish className="w-5 h-5 sm:w-6 sm:h-6" />,
    bgColor: 'bg-blue-100',
    hoverBgColor: 'hover:bg-blue-200',
  },
  {
    id: 'aves',
    name: 'Aves',
    href: '/categoria/aves',
    icon: <Bird className="w-5 h-5 sm:w-6 sm:h-6" />,
    bgColor: 'bg-yellow-100',
    hoverBgColor: 'hover:bg-yellow-200',
  },
  {
    id: 'frutas-verduras',
    name: 'Frutas y Verduras',
    href: '/categoria/frutas-verduras',
    icon: <Apple className="w-5 h-5 sm:w-6 sm:h-6" />,
    bgColor: 'bg-green-100',
    hoverBgColor: 'hover:bg-green-200',
  },
];

interface CategoryIconsBarProps {
  className?: string;
}

export default function CategoryIconsBar({ className = '' }: CategoryIconsBarProps) {
  return (
    <section className={`w-full py-6 sm:py-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenedor con scroll horizontal para móviles */}
        <div className="overflow-x-auto pb-4 pt-2">
          <div className="flex justify-center items-center min-w-max">
            <div className="flex space-x-3 sm:space-x-6 md:space-x-8 lg:space-x-12 px-4 py-2">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={category.href}
                  className="group flex flex-col items-center justify-start transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded-xl flex-shrink-0 min-h-32 sm:min-h-36 md:min-h-40"
                >
                  {/* Círculo del icono - Tamaño fijo con padding para el hover */}
                  <div className="p-1 sm:p-2">
                    <div
                      className={`
                      relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20
                      ${category.bgColor} ${category.hoverBgColor}
                      rounded-full flex items-center justify-center
                      transition-all duration-300 group-hover:shadow-lg group-hover:scale-105
                      group-active:scale-95 flex-shrink-0
                    `}
                    >
                      <div className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                        {category.icon}
                      </div>
                    </div>
                  </div>

                  {/* Texto de la categoría - Con altura fija y multilinea */}
                  <div className="mt-2 sm:mt-3 w-16 sm:w-20 md:w-24 h-8 sm:h-10 md:h-12 flex items-start justify-center">
                    <span className="text-xs sm:text-sm font-medium text-gray-700 text-center leading-tight group-hover:text-gray-900 transition-colors duration-200 break-words">
                      {category.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
