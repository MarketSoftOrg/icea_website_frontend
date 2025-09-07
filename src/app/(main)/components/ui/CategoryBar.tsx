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
    icon: <Beef className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
    bgColor: 'bg-red-100',
    hoverBgColor: 'hover:bg-red-200',
  },
  {
    id: 'cerdo',
    name: 'Cerdo',
    href: '/categoria/cerdo',
    icon: <PiggyBank className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
    bgColor: 'bg-pink-100',
    hoverBgColor: 'hover:bg-pink-200',
  },
  {
    id: 'pescados-mariscos',
    name: 'Pescados y Mariscos',
    href: '/categoria/pescados-mariscos',
    icon: <Fish className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
    bgColor: 'bg-blue-100',
    hoverBgColor: 'hover:bg-blue-200',
  },
  {
    id: 'aves',
    name: 'Aves',
    href: '/categoria/aves',
    icon: <Bird className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
    bgColor: 'bg-yellow-100',
    hoverBgColor: 'hover:bg-yellow-200',
  },
  {
    id: 'frutas-verduras',
    name: 'Frutas y Verduras',
    href: '/categoria/frutas-verduras',
    icon: <Apple className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
    bgColor: 'bg-green-100',
    hoverBgColor: 'hover:bg-green-200',
  },
];

interface CategoryIconsBarProps {
  className?: string;
}

export default function CategoryIconsBar({ className = '' }: CategoryIconsBarProps) {
  return (
    <section className={`w-full py-2 sm:py-3 md:py-4 ${className}`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-start gap-1 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group flex flex-col items-center justify-start transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded-xl flex-1 min-h-24 sm:min-h-28 md:min-h-32 lg:min-h-36"
            >
              <div className="p-1 sm:p-1.5 md:p-2">
                <div
                  className={`
                    relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20
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

              <div className="mt-1 sm:mt-2 md:mt-3 w-full max-w-12 sm:max-w-16 md:max-w-20 lg:max-w-24 h-6 sm:h-8 md:h-10 lg:h-12 flex items-start justify-center">
                <span className="text-xs sm:text-sm md:text-base font-medium text-gray-700 text-center leading-tight group-hover:text-gray-900 transition-colors duration-200 break-words">
                  {category.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
