// src/lib/data.ts

export interface Sucursal {
  id: number;
  nombre: string; // Nombre completo de la sucursal, ej. "Carnes Normandia"
  slug: string; // Slug para la URL, ej. "carnes-normandia"
  direccion: string; // Dirección completa, ej. "Av. Vallarta 123, Col. Americana, Guadalajara, Jalisco"
  telefono: string;
  horario: string;
  descripcion: string; // Descripción general de la sucursal

  // Propiedades específicas para la tarjeta de sucursal (SucursalCard)
  cardDescription: string; // Descripción corta para la tarjeta, ej. "Carnicería premium..."
  cardLocation: string; // Ubicación corta para la tarjeta, ej. "Guadalajara, Jalisco"
  imageUrl: string; // Ruta de la imagen del logo para la tarjeta
  iconBgColorClass: string; // Clase de Tailwind para el color de fondo del icono/imagen
  iconTextColorClass: string; // Clase de Tailwind para el color del texto del icono (si aplica)
  buttonClassName: string; // Clase de Tailwind para el estilo del botón "Visitar Tienda"

  // Colores opcionales, pueden usarse para otros propósitos o para el fondo/hover de la tarjeta
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
    bgColor: 'oklch(0.35 0.15 25)', // Rojo vino
    hoverColor: 'oklch(0.85 0.10 90)', // Amarillo
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
    bgColor: 'oklch(0.35 0.15 25)', // Rojo vino
    hoverColor: 'oklch(0.85 0.10 90)', // Amarillo
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
    bgColor: 'oklch(0.35 0.15 25)', // Rojo vino
    hoverColor: 'oklch(0.85 0.10 90)', // Amarillo
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
    imageUrl: '/logos/delcampo_color.svg', // Usando la misma imagen para todos
    iconBgColorClass: 'bg-black',
    iconTextColorClass: 'text-red-700',
    buttonClassName: 'bg-red-600 text-white hover:bg-red-700',
    bgColor: 'oklch(0.25 0.08 265)', // Azul profundo
    hoverColor: 'oklch(0.8 0.15 130)', // Verde lima
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
    imageUrl: '/logos/tonala_color.png', // Usando la misma imagen para todos
    iconBgColorClass: 'bg-black',
    iconTextColorClass: 'text-red-700',
    buttonClassName: 'bg-red-600 text-white hover:bg-red-700',
    bgColor: 'oklch(0.25 0.08 265)', // Azul profundo
    hoverColor: 'oklch(0.8 0.15 130)', // Verde lima
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
    imageUrl: '/logos/normandia_color.png', // Usando la misma imagen para todos
    iconBgColorClass: 'bg-black',
    iconTextColorClass: 'text-red-700',
    buttonClassName: 'bg-red-600 text-white hover:bg-red-700',
    bgColor: 'oklch(0.25 0.08 265)', // Azul profundo
    hoverColor: 'oklch(0.8 0.15 130)', // Verde lima
    //navlink color
  },
];

// Función SÍNCRONA para obtener una sucursal por su slug.
export const getSucursalBySlug = (slug: string): Sucursal | undefined => {
  const sucursal = sucursalesData.find((s) => s.slug === slug);
  return sucursal;
};

// Función SÍNCRONA para obtener todas las sucursales.
export const getSucursales = (): Sucursal[] => {
  return sucursalesData;
};
