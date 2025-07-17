export interface Sucursal {
  id: number;
  nombre: string;
  slug: string;
  direccion: string;
  telefono: string;
  horario: string;
  descripcion: string;

  cardDescription: string;
  cardLocation: string;
  imageUrl: string;
  iconBgColorClass: string;
  iconTextColorClass: string;
  buttonClassName: string;

  bgColor?: string;
  hoverColor?: string;
}

const sucursalesData: Sucursal[] = [
  {
    id: 1,
    nombre: 'Carnicería Origen Valdepeñas',
    slug: 'carniceria-origen',
    direccion: 'Av. Patria 567, Zapopan, Jalisco',
    telefono: '33-9876-5432',
    horario: 'Lunes a Sábado de 10am a 8pm',
    descripcion: 'Especialistas en carnes orgánicas certificadas, directamente de productores locales y sostenibles.',
    cardDescription:
      '¡El Origen de los buenos momentos! Fusionamos la tradición carnicera que nos heredaron nuestras familias con el concepto mini-super, ofreciendo una experiencia única, moderna y de gran calidad.',
    cardLocation: ' Av. Valdepeñas #8486, Real de Valdepeñas, Zapopan.',
    imageUrl: '/logos/origen_color.png',
    iconBgColorClass: 'bg-black',
    iconTextColorClass: 'text-blue-700',
    buttonClassName: 'bg-blue-600 text-white hover:bg-blue-700',
    bgColor: 'oklch(0.35 0.15 25)',
    hoverColor: 'oklch(0.85 0.10 90)',
  },
  {
    id: 2,
    nombre: 'Carnicería Origen Base Aérea',
    slug: 'carniceria-origen-2',
    direccion: 'Av. Patria 567, Zapopan, Jalisco',
    telefono: '33-9876-5432',
    horario: 'Lunes a Sábado de 10am a 8pm',
    descripcion: 'Especialistas en carnes orgánicas certificadas, directamente de productores locales y sostenibles.',
    cardDescription:
      '¡El Origen de los buenos momentos! Fusionamos la tradición carnicera que nos heredaron nuestras familias con el concepto mini-super, ofreciendo una experiencia única, moderna y de gran calidad.',
    cardLocation: 'Zapopan, Jalisco',
    imageUrl: '/logos/origen_color.png',
    iconBgColorClass: 'bg-black',
    iconTextColorClass: 'text-blue-700',
    buttonClassName: 'bg-blue-600 text-white hover:bg-blue-700',
    bgColor: 'oklch(0.35 0.15 25)',
    hoverColor: 'oklch(0.85 0.10 90)',
  },
  {
    id: 3,
    nombre: 'Carnicería Origen 3',
    slug: 'carniceria-origen-3',
    direccion: 'Av. Patria 567, Zapopan, Jalisco',
    telefono: '33-9876-5432',
    horario: 'Lunes a Sábado de 10am a 8pm',
    descripcion: 'Especialistas en carnes orgánicas certificadas, directamente de productores locales y sostenibles.',
    cardDescription: 'Especialistas en carnes orgánicas, con un compromiso con la sostenibilidad y el sabor.',
    cardLocation: 'Zapopan, Jalisco',
    imageUrl: '/logos/origen_color.png',
    iconBgColorClass: 'bg-black',
    iconTextColorClass: 'text-blue-700',
    buttonClassName: 'bg-blue-600 text-white hover:bg-blue-700',
    bgColor: 'oklch(0.35 0.15 25)',
    hoverColor: 'oklch(0.85 0.10 90)',
  },
  {
    id: 4,
    nombre: 'Carnicería Del Campo',
    slug: 'carnes-del-campo',
    direccion: 'Av. Vallarta 123, Col. Americana, Guadalajara, Jalisco',
    telefono: '33-1234-5678',
    horario: 'Lunes a Viernes de 9am a 7pm',
    descripcion: 'Nuestra casa matriz en el corazón de Guadalajara, ofreciendo la mejor selección de cortes finos.',
    cardDescription: 'Carnicería premium, con la mejor selección de cortes finos y atención personalizada.',
    cardLocation: 'Guadalajara, Jalisco',
    imageUrl: '/logos/delcampo_color.svg',
    iconBgColorClass: 'bg-black',
    iconTextColorClass: 'text-red-700',
    buttonClassName: 'bg-red-600 text-white hover:bg-red-700',
    bgColor: 'oklch(0.25 0.08 265)',
    hoverColor: 'oklch(0.8 0.15 130)',
  },
  {
    id: 5,
    nombre: 'Carnicería Tonalá',
    slug: 'carniceria-tonala',
    direccion: 'Av. Vallarta 123, Col. Americana, Guadalajara, Jalisco',
    telefono: '33-1234-5678',
    horario: 'Lunes a Viernes de 9am a 7pm',
    descripcion: 'Nuestra casa matriz en el corazón de Guadalajara, ofreciendo la mejor selección de cortes finos.',
    cardDescription: 'Carnicería premium, con la mejor selección de cortes finos y atención personalizada.',
    cardLocation: 'Guadalajara, Jalisco',
    imageUrl: '/logos/tonala_color.png',
    iconBgColorClass: 'bg-black',
    iconTextColorClass: 'text-red-700',
    buttonClassName: 'bg-red-600 text-white hover:bg-red-700',
    bgColor: 'oklch(0.25 0.08 265)',
    hoverColor: 'oklch(0.8 0.15 130)',
  },
  {
    id: 6,
    nombre: 'Carnes Normandia',
    slug: 'carnes-normandia',
    direccion: 'Av. Vallarta 123, Col. Americana, Guadalajara, Jalisco',
    telefono: '33-1234-5678',
    horario: 'Lunes a Viernes de 9am a 7pm',
    descripcion: 'Nuestra casa matriz en el corazón de Guadalajara, ofreciendo la mejor selección de cortes finos.',
    cardDescription: 'Carnicería premium, con la mejor selección de cortes finos y atención personalizada.',
    cardLocation: 'Guadalajara, Jalisco',
    imageUrl: '/logos/normandia_color.png',
    iconBgColorClass: 'bg-black',
    iconTextColorClass: 'text-red-700',
    buttonClassName: 'bg-red-600 text-white hover:bg-red-700',
    bgColor: 'oklch(0.25 0.08 265)',
    hoverColor: 'oklch(0.8 0.15 130)',
  },
];

const valuesicea = [
  {
    initial: 'I',
    title: 'Innovación',
    description: 'Buscamos constantemente nuevas formas de mejorar nuestros productos y procesos',
  },
  {
    initial: 'C',
    title: 'Calidad',
    description: 'Mantenemos los más altos estándares en todos nuestros productos y servicios',
  },
  {
    initial: 'E',
    title: 'Excelencia',
    description: 'Nos esforzamos por superar las expectativas en cada proyecto que emprendemos',
  },
  {
    initial: 'A',
    title: 'Alimentación',
    description: 'Nos dedicamos a nutrir y alimentar de manera responsable y sostenible',
  },
];
export const getValuesIcea = () => valuesicea;

export const getSucursalBySlug = (slug: string): Sucursal | undefined => {
  const sucursal = sucursalesData.find((s) => s.slug === slug);
  return sucursal;
};

export const getSucursales = (): Sucursal[] => {
  return sucursalesData;
};
