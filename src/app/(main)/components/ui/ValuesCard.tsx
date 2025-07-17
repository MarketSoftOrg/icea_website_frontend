import React from 'react';

type Value = {
  initial: string;
  title: string;
  description: string;
};

type ValuesCardProps = {
  title: string;
  subtitle: string;
  values: Value[];
};

const colorMap: Record<string, string> = {
  I: 'bg-red-100 text-red-700',
  C: 'bg-green-100 text-green-700',
  E: 'bg-blue-100 text-blue-700',
  A: 'bg-yellow-100 text-yellow-700',
};

export default function ValuesCard({ title, subtitle, values }: ValuesCardProps) {
  return (
    <div className="text-center py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-12">{subtitle}</p>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {values.map((value, idx) => {
          const color = colorMap[value.initial] || 'bg-gray-100 text-gray-700';

          return (
            <div key={idx} className="flex flex-col items-center text-center">
              <div
                className={`rounded-full w-16 h-16 flex items-center justify-center text-xl font-semibold ${color} mb-4`}
              >
                {value.initial}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-sm text-gray-700 max-w-xs mx-auto">{value.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
