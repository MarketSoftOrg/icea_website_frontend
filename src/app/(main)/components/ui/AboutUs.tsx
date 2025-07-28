import React from 'react';
import { Building2 } from 'lucide-react';

type StatItem = {
  number: string;
  label: string;
};

type AboutICEAProps = {
  title: string;
  description: string;
  stats: StatItem[];
  companies: string[];
};

export default function AboutICEA({ title, description, stats, companies }: AboutICEAProps) {
  return (
    <div
      className=" w-full sm:w-11/12 md:w-11/12 lg:w-10/12 2xl:w-3/4 py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#062B49] to-[#084272] rounded-2xl"
      id="sobre-nosotros"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Columna sobre ICEA */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold text-left text-white sm:text-4xl mb-6">{title}</h1>

            <div className="space-y-4 text-justify text-lg text-white mb-8">
              {description.split('\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Seccion de Stats*/}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-4xl font-bold text-white mb-2">{stat.number}</span>
                  <span className="text-sm font-medium text-gray-200 text-center">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Empresas del grupo */}
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-[#062B49] p-10 mb-2">
              <Building2 className="text-white" size={100} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-6">Empresas del Grupo</h2>
            <ul className="space-y-4 max-w-xs w-full">
              {' '}
              {companies.map((company, idx) => (
                <li
                  key={idx}
                  className="p-1 rounded-lg text-lg font-medium text-white hover:shadow-md transition-all flex items-center justify-center"
                >
                  <div className="bg-gray-200 w-2 h-2 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-600 font-bold"></span>
                  </div>
                  {company}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
