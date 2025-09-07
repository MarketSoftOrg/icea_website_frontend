// CategoryIconsBar.tsx
import { Beef, PiggyBank, Fish, Apple, Drumstick } from 'lucide-react';

interface CategoryItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  bgColor: string;
}

const categories: CategoryItem[] = [
  {
    id: 'res',
    name: 'Res',
    icon: <Beef className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
    bgColor: 'bg-red-100',
  },
  {
    id: 'cerdo',
    name: 'Cerdo',
    icon: <PiggyBank className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
    bgColor: 'bg-pink-100',
  },
  {
    id: 'pescados-mariscos',
    name: 'Pescados y Mariscos',
    icon: <Fish className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
    bgColor: 'bg-blue-100',
  },
  {
    id: 'Pollo',
    name: 'Pollo',
    icon: <Drumstick className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
    bgColor: 'bg-yellow-100',
  },
  {
    id: 'frutas-verduras',
    name: 'Verdureria y Abarrotes',
    icon: <Apple className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />,
    bgColor: 'bg-green-100',
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
            <div
              key={category.id}
              className="flex flex-col items-center justify-start rounded-xl flex-1 min-h-24 sm:min-h-28 md:min-h-32 lg:min-h-36"
            >
              <div className="p-1 sm:p-1.5 md:p-2">
                <div
                  className={`
                    relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20
                    ${category.bgColor}
                    rounded-full flex items-center justify-center flex-shrink-0
                  `}
                >
                  <div className="text-gray-700">{category.icon}</div>
                </div>
              </div>

              <div className="mt-1 sm:mt-2 md:mt-3 w-full max-w-12 sm:max-w-16 md:max-w-20 lg:max-w-24 h-6 sm:h-8 md:h-10 lg:h-12 flex items-start justify-center">
                <span className="text-xs sm:text-sm md:text-base font-medium text-gray-700 text-center leading-tight break-words">
                  {category.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
