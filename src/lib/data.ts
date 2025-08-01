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
  imageUrlColor: string;
  iconBgColorClass: string;
  iconTextColorClass: string;
  buttonClassName: string;

  facebookUrl: string;
  whatsappUrl: string;

  bgColor?: string;
  hoverColor?: string;

  navbarBgColor: string;
  navbarHoverColor: string;
  navbarTextColor: string;

  footerBgColor: string;
  footerTextColor: string;
  footerLinkColor: string;
  footerLinkHoverColor: string;
}

// PENDING: add facebook and whatsapp urls to Sucursal interface

const sucursalesData: Sucursal[] = [
  {
    id: 1,
    nombre: 'Carnicería Origen Valdepeñas',
    slug: 'carniceria-origen',
    direccion: 'Av. Patria 567, Zapopan, Jalisco',
    telefono: '33-9876-5432',
    horario: 'Lunes a Sábado de 10am a 8pm',
    descripcion:
      '¡El Origen de los buenos momentos! Fusionamos la tradición carnicera que nos heredaron nuestras familias con el concepto mini-super, ofreciendo una experiencia única, moderna y de gran calidad.',
    cardDescription:
      '¡El Origen de los buenos momentos! Fusionamos la tradición carnicera que nos heredaron nuestras familias con el concepto mini-super, ofreciendo una experiencia única, moderna y de gran calidad.',
    cardLocation: ' Av. Valdepeñas #8486, Real de Valdepeñas, Zapopan.',
    imageUrl: '/logos/origen_blanco.png',
    imageUrlColor: '/logos/origen_color.png',
    iconBgColorClass: 'bg-black',
    iconTextColorClass: 'text-red-800',
    buttonClassName: 'bg-[#F9943B] text-white hover:bg-[#E5832A]',
    bgColor: 'oklch(0.35 0.15 25)',
    hoverColor: 'oklch(0.85 0.10 90)',
    facebookUrl: 'https://www.facebook.com/',
    whatsappUrl: 'https://wa.me',
    navbarBgColor: '#292929',
    navbarHoverColor: '#df0000',
    navbarTextColor: '#F8D8B5',
    footerBgColor: '#292929',
    footerTextColor: '#F8D8B5',
    footerLinkColor: '#F9943B',
    footerLinkHoverColor: '#F8D8B5',
  },
  {
    id: 2,
    nombre: 'Carnicería Origen Base Aérea',
    slug: 'carniceria-origen-2',
    direccion: 'Base Aérea: Av. Base Aérea #1754, El Triángulo, Zapopan.',
    telefono: '33-9876-5432',
    horario: 'Lunes a Sábado de 10am a 8pm',
    descripcion:
      '¡El Origen de los buenos momentos! Fusionamos la tradición carnicera que nos heredaron nuestras familias con el concepto mini-super, ofreciendo una experiencia única, moderna y de gran calidad.',
    cardDescription:
      '¡El Origen de los buenos momentos! Fusionamos la tradición carnicera que nos heredaron nuestras familias con el concepto mini-super, ofreciendo una experiencia única, moderna y de gran calidad.',
    cardLocation: 'Base Aérea: Av. Base Aérea #1754, El Triángulo, Zapopan.',
    imageUrl: '/logos/origen_blanco.png',
    imageUrlColor: '/logos/origen_color.png',
    iconBgColorClass: 'bg-black',
    iconTextColorClass: 'text-red-800',
    buttonClassName: 'bg-[#F9943B] text-white hover:bg-[#E5832A]',
    bgColor: 'oklch(0.35 0.15 25)',
    hoverColor: 'oklch(0.85 0.10 90)',
    facebookUrl: 'https://www.facebook.com/',
    whatsappUrl: 'https://wa.me',
    navbarBgColor: '#292929',
    navbarHoverColor: '#df0000',
    navbarTextColor: '#F8D8B5',
    footerBgColor: '#292929',
    footerTextColor: '#F8D8B5',
    footerLinkColor: '#F9943B',
    footerLinkHoverColor: '#F8D8B5',
  },
  {
    id: 3,
    nombre: 'Carnicería Origen Rio Nilo',
    slug: 'carniceria-origen-3',
    direccion: 'Río Nilo: Av. Rio Nilo #3566, Jardin de los historiadores, Guadalajara.',
    telefono: '33-9876-5432',
    horario: 'Lunes a Sábado de 10am a 8pm',
    descripcion:
      '¡El Origen de los buenos momentos! Fusionamos la tradición carnicera que nos heredaron nuestras familias con el concepto mini-super, ofreciendo una experiencia única, moderna y de gran calidad.',
    cardDescription:
      '¡El Origen de los buenos momentos! Fusionamos la tradición carnicera que nos heredaron nuestras familias con el concepto mini-super, ofreciendo una experiencia única, moderna y de gran calidad.',
    cardLocation: 'Río Nilo: Av. Rio Nilo #3566, Jardin de los historiadores, Guadalajara.',
    imageUrl: '/logos/origen_blanco.png',
    imageUrlColor: '/logos/origen_color.png',
    iconBgColorClass: 'bg-black',
    iconTextColorClass: 'text-red-800',
    buttonClassName: 'bg-[#F9943B] text-white hover:bg-[#E5832A]',
    bgColor: 'oklch(0.35 0.15 25)',
    hoverColor: 'oklch(0.85 0.10 90)',
    facebookUrl: 'https://www.facebook.com/',
    whatsappUrl: 'https://wa.me',
    navbarBgColor: '#292929',
    navbarHoverColor: '#df0000',
    navbarTextColor: '#F8D8B5',
    footerBgColor: '#292929',
    footerTextColor: '#F8D8B5',
    footerLinkColor: '#F9943B',
    footerLinkHoverColor: '#F8D8B5',
  },
  {
    id: 4,
    nombre: 'Carnicería Del Campo',
    slug: 'carnes-del-campo',
    direccion: 'Av. Vallarta 123, Col. Americana, Guadalajara, Jalisco',
    telefono: '33-1234-5678',
    horario: 'Lunes a Viernes de 9am a 7pm',
    descripcion:
      '¡Desde el campo hasta tu mesa! Nos especializamos en ofrecer productos cárnicos frescos, cuidadosamente seleccionados. Nuestro objetivo es entregarte calidad cuidando tu economía familiar. ',
    cardDescription:
      '¡Desde el campo hasta tu mesa! Nos especializamos en ofrecer productos cárnicos frescos, cuidadosamente seleccionados. Nuestro objetivo es entregarte calidad cuidando tu economía familiar. ',
    cardLocation: 'C. Venustiano Carranza #206, El Mirador, Tonalá.',
    imageUrl: '/logos/delcampo_blanco.png',
    imageUrlColor: '/logos/delcampo_color.svg',
    iconBgColorClass: 'bg-black',
    iconTextColorClass: 'text-[#617C08]',
    buttonClassName: 'bg-[#F9943B] text-white hover:bg-[#E5832A]',
    hoverColor: 'oklch(0.8 0.15 130)',
    facebookUrl: 'https://www.facebook.com/',
    whatsappUrl: 'https://wa.me',
    //pendientes reemplzar por los colores de la sucursal
    navbarBgColor: '#526906',
    navbarHoverColor: '#292929',
    navbarTextColor: '#F8D8B5',
    footerBgColor: '#292929',
    footerTextColor: '#F8D8B5',
    footerLinkColor: '#617C08',
    footerLinkHoverColor: '#526906',
  },
  {
    id: 5,
    nombre: 'Carnicería Tonalá',
    slug: 'carniceria-tonala',
    direccion: 'Av. Vallarta 123, Col. Americana, Guadalajara, Jalisco',
    telefono: '33-1234-5678',
    horario: 'Lunes a Viernes de 9am a 7pm',
    descripcion:
      ' ¡Pura calidad Tonalteca! 8 años siendo orgullosamente la carnicería de confianza de cientos de familias. ',
    cardDescription:
      ' ¡Pura calidad Tonalteca! 8 años siendo orgullosamente la carnicería de confianza de cientos de familias. .',
    cardLocation: 'C. Zaragoza #430, Tonalá Centro, Tonalá.',
    imageUrl: '/logos/tonala_blanco.png',
    imageUrlColor: '/logos/tonala_color.png',
    iconBgColorClass: 'bg-black',
    iconTextColorClass: 'text-[#292929]',
    buttonClassName: 'bg-[#F9943B] text-white hover:bg-[#E5832A]',
    bgColor: 'oklch(0.25 0.08 265)',
    hoverColor: 'oklch(0.8 0.15 130)',
    facebookUrl: 'https://www.facebook.com/',
    whatsappUrl: 'https://wa.me',
    navbarBgColor: '#292929',
    navbarHoverColor: '#494949',
    navbarTextColor: '#F8D8B5',
    footerBgColor: '#292929',
    footerTextColor: '#F8D8B5',
    footerLinkColor: '#617C08',
    footerLinkHoverColor: '#526906',
  },
  {
    id: 6,
    nombre: 'Carnes Normandia',
    slug: 'carnes-normandia',
    direccion: 'Av. Vallarta 123, Col. Americana, Guadalajara, Jalisco',
    telefono: '33-1234-5678',
    horario: 'Lunes a Viernes de 9am a 7pm',
    descripcion:
      '¡Más que una carnicería! Un espacio práctico donde podrás encontrar los mejores cortes, y una gran diversidad productos seleccionados para tu despensa.  Un negocio familiar, construido para las familias. ',
    cardDescription:
      '¡Más que una carnicería! Un espacio práctico donde podrás encontrar los mejores cortes, y una gran diversidad productos seleccionados para tu despensa.  Un negocio familiar, construido para las familias. ',
    cardLocation: 'Av. Presa de Osorio #3212, Agustín Yáñez, Guadalajara.',
    imageUrl: '/logos/normandia_blanco.png',
    imageUrlColor: '/logos/normandia_color.png',
    iconBgColorClass: 'bg-black',
    iconTextColorClass: 'text-[#a38a17]',
    buttonClassName: 'bg-[#F9943B] text-white hover:bg-[#E5832A]',
    bgColor: 'oklch(0.25 0.08 265)',
    hoverColor: 'oklch(0.8 0.15 130)',
    facebookUrl: 'https://www.facebook.com/',
    whatsappUrl: 'https://wa.me',
    //pendientes reemplzar por los colores de la sucursal
    navbarBgColor: '#292929',
    navbarHoverColor: '#547D02',
    navbarTextColor: '#F9E473',
    footerBgColor: '#292929',
    footerTextColor: '#F8D8B5',
    footerLinkColor: '#F9943B',
    footerLinkHoverColor: '#547D02',
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

const companies = [
  'Carnes Normandía',
  'Distribuidora ICEA',
  'Alimentos Frescos del Pacífico',
  'Servicios Alimentarios Integrales',
];

const iceastats = [
  { number: '25+', label: 'Años de Experiencia' },
  { number: '50+', label: 'Empleados' },
  { number: '10+', label: 'Ciudades' },
  { number: '1000+', label: 'Clientes Satisfechos' },
];

const iceaCompanyInfo = {
  name: 'Grupo ICEA',
  email: 'contacto@grupoincea.com',
  phone: '(33) 1234-5678',
  address: 'Guadalajara, Jalisco, México',
  // Opcionales:
  privacyEmail: 'privacidad@grupoincea.com',
  industry: 'la industria alimentaria',
  jurisdiction: 'Guadalajara, Jalisco, México',
  Facebook: 'https://www.facebook.com/grupoincea',
  Instagram: 'https://www.instagram.com/grupoincea',
  whatsapp: 'https://wa.me/5213312345678',
};

export const getIceaStats = () => iceastats;

export const getValuesIcea = () => valuesicea;

export const getCompanies = () => companies;

export const getIceaCompanyInfo = () => iceaCompanyInfo;

export const getSucursalBySlug = (slug: string): Sucursal | undefined => {
  const sucursal = sucursalesData.find((s) => s.slug === slug);
  return sucursal;
};

export const getSucursales = (): Sucursal[] => {
  return sucursalesData;
};
