export interface Sucursal {
  id: number;
  nombre: string;
  slug: string;
  direccion: string;
  telefono: string;
  horario: string;
  descripcion: string;
  social: {
    facebookUrl: string;
    whatsappUrl: string;
  };
  card: {
    description: string;
    location: string;
    imageUrl: string;
    imageUrlColor: string;
    iconBgColorClass: string;
    iconTextColorClass: string;
    buttonClassName: string;
    bgColor?: string;
    hoverColor?: string;
  };
  navbar: {
    bgColor: string;
    hoverColor: string;
    textColor: string;
  };
  footer: {
    bgColor: string;
    textColor: string;
    linkColor: string;
    linkHoverColor: string;
  };
  cloudinaryFolder: string;
}

const sucursalesData: Sucursal[] = [
  {
    id: 1,
    nombre: 'Carnicería Origen Valdepeñas',
    slug: 'carniceria-origen-valdepenas',
    direccion: 'Av. Patria 567, Zapopan, Jalisco',
    telefono: '33-9876-5432',
    horario: 'Lunes a Sábado de 10am a 8pm',
    descripcion:
      '¡El Origen de los buenos momentos! Fusionamos la tradición carnicera que nos heredaron nuestras familias con el concepto mini-super, ofreciendo una experiencia única, moderna y de gran calidad.',
    social: {
      facebookUrl: 'https://www.facebook.com/',
      whatsappUrl: 'https://wa.me',
    },
    card: {
      description:
        '¡El Origen de los buenos momentos! Fusionamos la tradición carnicera que nos heredaron nuestras familias con el concepto mini-super, ofreciendo una experiencia única, moderna y de gran calidad.',
      location: ' Av. Valdepeñas #8486, Real de Valdepeñas, Zapopan.',
      imageUrl: '/logos/origen_blanco.png',
      imageUrlColor: '/logos/origen_color.png',
      iconBgColorClass: 'bg-black',
      iconTextColorClass: 'text-red-800',
      buttonClassName: 'bg-[#F9943B] text-white hover:bg-[#E5832A]',
      bgColor: 'oklch(0.35 0.15 25)',
      hoverColor: 'oklch(0.85 0.10 90)',
    },
    navbar: {
      bgColor: '#292929',
      hoverColor: '#df0000',
      textColor: '#F8D8B5',
    },
    footer: {
      bgColor: '#292929',
      textColor: '#F8D8B5',
      linkColor: '#F9943B',
      linkHoverColor: '#F8D8B5',
    },
    cloudinaryFolder: 'promociones-origen',
  },
  {
    id: 2,
    nombre: 'Carnicería Origen Base Aérea',
    slug: 'carniceria-origen-base-aerea',
    direccion: 'Base Aérea: Av. Base Aérea #1754, El Triángulo, Zapopan.',
    telefono: '33-9876-5432',
    horario: 'Lunes a Sábado de 10am a 8pm',
    descripcion:
      '¡El Origen de los buenos momentos! Fusionamos la tradición carnicera que nos heredaron nuestras familias con el concepto mini-super, ofreciendo una experiencia única, moderna y de gran calidad.',
    social: {
      facebookUrl: 'https://www.facebook.com/',
      whatsappUrl: 'https://wa.me',
    },
    card: {
      description:
        '¡El Origen de los buenos momentos! Fusionamos la tradición carnicera que nos heredaron nuestras familias con el concepto mini-super, ofreciendo una experiencia única, moderna y de gran calidad.',
      location: 'Base Aérea: Av. Base Aérea #1754, El Triángulo, Zapopan.',
      imageUrl: '/logos/origen_blanco.png',
      imageUrlColor: '/logos/origen_color.png',
      iconBgColorClass: 'bg-black',
      iconTextColorClass: 'text-red-800',
      buttonClassName: 'bg-[#F9943B] text-white hover:bg-[#E5832A]',
      bgColor: 'oklch(0.35 0.15 25)',
      hoverColor: 'oklch(0.85 0.10 90)',
    },
    navbar: {
      bgColor: '#292929',
      hoverColor: '#df0000',
      textColor: '#F8D8B5',
    },
    footer: {
      bgColor: '#292929',
      textColor: '#F8D8B5',
      linkColor: '#F9943B',
      linkHoverColor: '#F8D8B5',
    },
    cloudinaryFolder: 'promociones-origen',
  },
  {
    id: 3,
    nombre: 'Carnicería Origen Rio Nilo',
    slug: 'carniceria-origen-rio-nilo',
    direccion: 'Río Nilo: Av. Rio Nilo #3566, Jardin de los historiadores, Guadalajara.',
    telefono: '33-9876-5432',
    horario: 'Lunes a Sábado de 10am a 8pm',
    descripcion:
      '¡El Origen de los buenos momentos! Fusionamos la tradición carnicera que nos heredaron nuestras familias con el concepto mini-super, ofreciendo una experiencia única, moderna y de gran calidad.',
    social: {
      facebookUrl: 'https://www.facebook.com/',
      whatsappUrl: 'https://wa.me',
    },
    card: {
      description:
        '¡El Origen de los buenos momentos! Fusionamos la tradición carnicera que nos heredaron nuestras familias con el concepto mini-super, ofreciendo una experiencia única, moderna y de gran calidad.',
      location: 'Río Nilo: Av. Rio Nilo #3566, Jardin de los historiadores, Guadalajara.',
      imageUrl: '/logos/origen_blanco.png',
      imageUrlColor: '/logos/origen_color.png',
      iconBgColorClass: 'bg-black',
      iconTextColorClass: 'text-red-800',
      buttonClassName: 'bg-[#F9943B] text-white hover:bg-[#E5832A]',
      bgColor: 'oklch(0.35 0.15 25)',
      hoverColor: 'oklch(0.85 0.10 90)',
    },
    navbar: {
      bgColor: '#292929',
      hoverColor: '#df0000',
      textColor: '#F8D8B5',
    },
    footer: {
      bgColor: '#292929',
      textColor: '#F8D8B5',
      linkColor: '#F9943B',
      linkHoverColor: '#F8D8B5',
    },
    cloudinaryFolder: 'promociones-origen',
  },
  {
    id: 4,
    nombre: 'Carnicería Del Campo',
    slug: 'carniceria-del-campo',
    direccion: 'Av. Vallarta 123, Col. Americana, Guadalajara, Jalisco',
    telefono: '33-1234-5678',
    horario: 'Lunes a Viernes de 9am a 7pm',
    descripcion:
      '¡Desde el campo hasta tu mesa! Nos especializamos en ofrecer productos cárnicos frescos, cuidadosamente seleccionados. Nuestro objetivo es entregarte calidad cuidando tu economía familiar. ',
    social: {
      facebookUrl: 'https://www.facebook.com/',
      whatsappUrl: 'https://wa.me',
    },
    card: {
      description:
        '¡Desde el campo hasta tu mesa! Nos especializamos en ofrecer productos cárnicos frescos, cuidadosamente seleccionados. Nuestro objetivo es entregarte calidad cuidando tu economía familiar. ',
      location: 'C. Venustiano Carranza #206, El Mirador, Tonalá.',
      imageUrl: '/logos/delcampo_blanco.png',
      imageUrlColor: '/logos/delcampo_color.svg',
      iconBgColorClass: 'bg-black',
      iconTextColorClass: 'text-[#617C08]',
      buttonClassName: 'bg-[#F9943B] text-white hover:bg-[#E5832A]',
      hoverColor: 'oklch(0.8 0.15 130)',
    },
    navbar: {
      bgColor: '#526906',
      hoverColor: '#292929',
      textColor: '#F8D8B5',
    },
    footer: {
      bgColor: '#292929',
      textColor: '#F8D8B5',
      linkColor: '#617C08',
      linkHoverColor: '#526906',
    },
    cloudinaryFolder: 'promociones-delcampo',
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
    social: {
      facebookUrl: 'https://www.facebook.com/',
      whatsappUrl: 'https://wa.me',
    },
    card: {
      description:
        ' ¡Pura calidad Tonalteca! 8 años siendo orgullosamente la carnicería de confianza de cientos de familias. .',
      location: 'C. Zaragoza #430, Tonalá Centro, Tonalá.',
      imageUrl: '/logos/tonala_blanco.png',
      imageUrlColor: '/logos/tonala_color.png',
      iconBgColorClass: 'bg-black',
      iconTextColorClass: 'text-[#292929]',
      buttonClassName: 'bg-[#F9943B] text-white hover:bg-[#E5832A]',
      bgColor: 'oklch(0.25 0.08 265)',
      hoverColor: 'oklch(0.8 0.15 130)',
    },
    navbar: {
      bgColor: '#292929',
      hoverColor: '#494949',
      textColor: '#F8D8B5',
    },
    footer: {
      bgColor: '#292929',
      textColor: '#F8D8B5',
      linkColor: '#617C08',
      linkHoverColor: '#526906',
    },
    cloudinaryFolder: 'promociones-tonala',
  },
  {
    id: 6,
    nombre: 'Carnes Normandia',
    slug: 'carnices-normandia',
    direccion: 'Av. Vallarta 123, Col. Americana, Guadalajara, Jalisco',
    telefono: '33-1234-5678',
    horario: 'Lunes a Viernes de 9am a 7pm',
    descripcion:
      '¡Más que una carnicería! Un espacio práctico donde podrás encontrar los mejores cortes, y una gran diversidad productos seleccionados para tu despensa.  Un negocio familiar, construido para las familias. ',
    social: {
      facebookUrl: 'https://www.facebook.com/',
      whatsappUrl: 'https://wa.me',
    },
    card: {
      description:
        '¡Más que una carnicería! Un espacio práctico donde podrás encontrar los mejores cortes, y una gran diversidad productos seleccionados para tu despensa.  Un negocio familiar, construido para las familias. ',
      location: 'Av. Presa de Osorio #3212, Agustín Yáñez, Guadalajara.',
      imageUrl: '/logos/normandia_blanco.png',
      imageUrlColor: '/logos/normandia_color.png',
      iconBgColorClass: 'bg-black',
      iconTextColorClass: 'text-[#a38a17]',
      buttonClassName: 'bg-[#F9943B] text-white hover:bg-[#E5832A]',
      bgColor: 'oklch(0.25 0.08 265)',
      hoverColor: 'oklch(0.8 0.15 130)',
    },
    navbar: {
      bgColor: '#292929',
      hoverColor: '#547D02',
      textColor: '#F9E473',
    },
    footer: {
      bgColor: '#292929',
      textColor: '#F8D8B5',
      linkColor: '#F9943B',
      linkHoverColor: '#547D02',
    },
    cloudinaryFolder: 'promociones-normandia',
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
