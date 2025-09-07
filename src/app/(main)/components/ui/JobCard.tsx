import React from 'react';
import { MapPin, Clock, DollarSign, Calendar, User } from 'lucide-react';
import Link from 'next/link';

interface JobCardProps {
  title: string;
  description: string;
  location: string;
  schedule: 'Tiempo Completo' | 'Medio Tiempo' | 'Por Horas';
  salaryMin: number;
  salaryMax: number;
  salaryCurrency?: string;
  experience: string;
  publishedDate: string;
  category: string;
  requirements: string[];
  link: string;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  description,
  location,
  schedule,
  salaryMin,
  salaryMax,
  salaryCurrency = 'MXN',
  experience,
  publishedDate,
  category,
  requirements,
  link,
}) => {
  const formatSalary = (min: number, max: number, currency: string) => {
    const formatNumber = (num: number) => {
      return new Intl.NumberFormat('es-MX').format(num);
    };
    return `$${formatNumber(min)} - $${formatNumber(max)} ${currency}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-MX', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <div className="bg-white rounded-lg p-6 ">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-orange-600">{title}</h3>
        <span className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-md">{category}</span>
      </div>
      <p className="text-gray-600 text-sm mb-6 leading-relaxed">{description}</p>
      <div className="flex gap-8">
        <div className="flex-1 space-y-3">
          <div className="flex items-center text-sm text-gray-700">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0 text-gray-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <Clock className="w-4 h-4 mr-2 flex-shrink-0 text-gray-500" />
            <span>{schedule}</span>
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <DollarSign className="w-4 h-4 mr-2 flex-shrink-0 text-gray-500" />
            <span>{formatSalary(salaryMin, salaryMax, salaryCurrency)}</span>
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <User className="w-4 h-4 mr-2 flex-shrink-0 text-gray-500" />
            <span>Experiencia: {experience}</span>
          </div>
          <div className="flex items-center text-sm text-gray-700">
            <Calendar className="w-4 h-4 mr-2 flex-shrink-0 text-gray-500" />
            <span>Publicado: {formatDate(publishedDate)}</span>
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Requisitos principales:</h4>
            <ul className="space-y-2">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-start text-sm text-gray-700">
                  <span className="inline-block w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link href={link}>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 px-4 rounded-md transition-colors duration-200">
              Aplicar Ahora
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
