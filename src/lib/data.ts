export interface Sucursal {
  id: number;
  nombre: string;
  slug: string;
  direccion: string;
  telefono: string;
  horario: string;
  descripcion: string;
  map: string;
  fachada: string;
  descFirstLogo: string;
  descFirstLogotext: string;
  descSecondLogo: string;
  descSecondLogotext: string;
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
  carousel: {
    gradientFromColor: string;
    gradientToColor: string;
    buttonBgColor: string;
    buttonTextColor: string;
    titulo?: string;
    descripcion?: string;
  };
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
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.8954987279367!2d-103.40264292475085!3d20.755029280826715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428a5798ce2d91b%3A0x563c8df7721c511e!2sCarnicer%C3%ADa%20el%20Origen!5e0!3m2!1ses!2smx!4v1754519382474!5m2!1ses!2smx',
    fachada: '/fachadas/valdepenas_fachada.webp',
    descFirstLogo: 'Award',
    descFirstLogotext: 'Premios Regionales de Calidad',
    descSecondLogo: 'Users',
    descSecondLogotext: 'Tres Generaciones',
    carousel: {
      gradientFromColor: '#E5832A',
      gradientToColor: '#800000',
      buttonBgColor: '#FDF6E3',
      buttonTextColor: '#800000',
      titulo: 'Carnes de Calidad Premium Desde 1952',
      descripcion:
        'Carnicería familiar que ofrece los mejores cortes de res, cerdo, cordero y aves. De origen local, preparados por expertos y entregados frescos diariamente.',
    },
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
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.1061325379264!2d-103.44938221384605!3d20.74649194800833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428afa5b5962d27%3A0x993a4117f44d46d9!2sCARNICER%C3%8DA%20EL%20ORIGEN%20BASE%20AEREA!5e0!3m2!1ses!2smx!4v1754519447564!5m2!1ses!2smx',
    fachada: '/fachadas/aviacion_fachada.webp',
    descFirstLogo: 'Award',
    descFirstLogotext: 'Premios Regionales de Calidad',
    descSecondLogo: 'Users',
    descSecondLogotext: 'Tres Generaciones',
    carousel: {
      gradientFromColor: '#E5832A',
      gradientToColor: '#800000',
      buttonBgColor: '#FDF6E3',
      buttonTextColor: '#800000',
      titulo: 'Carnes de Calidad Premium Desde 1952',
      descripcion:
        'Carnicería familiar que ofrece los mejores cortes de res, cerdo, cordero y aves. De origen local, preparados por expertos y entregados frescos diariamente.',
    },
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
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.62693304973!2d-103.28995002400826!3d20.64405790087909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b3ed4048bbd5%3A0xca127a6ab63e250a!2sCarnicer%C3%ADa%20El%20Origen%20Rio%20Nilo!5e0!3m2!1ses!2smx!4v1754519479337!5m2!1ses!2smx',
    fachada: '/fachadas/rionilo_fachada.webp',
    descFirstLogo: 'Award',
    descFirstLogotext: 'Premios Regionales de Calidad',
    descSecondLogo: 'Users',
    descSecondLogotext: 'Tres Generaciones',
    carousel: {
      gradientFromColor: '#E5832A',
      gradientToColor: '#800000',
      buttonBgColor: '#FDF6E3',
      buttonTextColor: '#800000',
      titulo: 'Carnes de Calidad Premium Desde 1952',
      descripcion:
        'Carnicería familiar que ofrece los mejores cortes de res, cerdo, cordero y aves. De origen local, preparados por expertos y entregados frescos diariamente.',
    },
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
      bgColor: '#292929',
      hoverColor: '#617C08',
      textColor: '#F8D8B5',
    },
    footer: {
      bgColor: '#292929',
      textColor: '#F8D8B5',
      linkColor: '#617C08',
      linkHoverColor: '#526906',
    },
    cloudinaryFolder: 'promociones-delcampo',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.1880852877093!2d-103.23971552475446!3d20.621188980928135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b5504e5ddb2f%3A0x4fec02ddf3337ef!2sDel%20Campo%20Carnicer%C3%ADa!5e0!3m2!1ses!2smx!4v1754519512715!5m2!1ses!2smx',
    fachada: '/fachadas/delcampo_fachada.webp',
    descFirstLogo: 'Award',
    descFirstLogotext: 'Premios Regionales de Calidad',
    descSecondLogo: 'Users',
    descSecondLogotext: 'Tres Generaciones',
    carousel: {
      gradientFromColor: '#617C08',
      gradientToColor: '#E5832A',
      buttonBgColor: '#F3EAD3',
      buttonTextColor: '#3B4A05',
      titulo: 'Carnes de Calidad Premium Desde 1952',
      descripcion:
        'Carnicería familiar que ofrece los mejores cortes de res, cerdo, cordero y aves. De origen local, preparados por expertos y entregados frescos diariamente.',
    },
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
      iconTextColorClass: 'text-[#CC5500]',
      buttonClassName: 'bg-[#F9943B] text-white hover:bg-[#E5832A]',
      bgColor: 'oklch(0.25 0.08 265)',
      hoverColor: 'oklch(0.8 0.15 130)',
    },
    navbar: {
      bgColor: '#292929',
      hoverColor: '#F9943B',
      textColor: '#F8D8B5',
    },
    footer: {
      bgColor: '#292929',
      textColor: '#F8D8B5',
      linkColor: '#617C08',
      linkHoverColor: '#526906',
    },
    cloudinaryFolder: 'promociones-tonala',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.0768954990367!2d-103.25342442475433!3d20.62572228092464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b489c4a65463%3A0x2b0d0ee3322c24b6!2sCarnicer%C3%ADa%20Tonal%C3%A1%2C%20Carne%20Artesanal.!5e0!3m2!1ses!2smx!4v1754519547630!5m2!1ses!2smx',
    fachada: '/fachadas/tonala_fachada.webp',
    descFirstLogo: 'Award',
    descFirstLogotext: 'Premios Regionales de Calidad',
    descSecondLogo: 'Users',
    descSecondLogotext: 'Tres Generaciones',
    carousel: {
      gradientFromColor: '#FFB347',
      gradientToColor: '#E5832A',
      buttonBgColor: '#FDF6E3',
      buttonTextColor: '#4E342A',
      titulo: 'Carnes de Calidad Premium Desde 1952',
      descripcion:
        'Carnicería familiar que ofrece los mejores cortes de res, cerdo, cordero y aves. De origen local, preparados por expertos y entregados frescos diariamente.',
    },
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
    map: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3733.1487729402547!2d-103.2907902!3d20.6635255!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b3949d97f79f%3A0x748ba2949f8a75ec!2sCarniceria%20Normandia!5e0!3m2!1ses!2smx!4v1754092255242!5m2!1ses!2smx',
    fachada: '/fachadas/normandia_fachada.webp',
    descFirstLogo: 'Award',
    descFirstLogotext: 'Premios Regionales de Calidad',
    descSecondLogo: 'Users',
    descSecondLogotext: 'Tres Generaciones',
    carousel: {
      gradientFromColor: '#F9E473',
      gradientToColor: '#E5832A',
      buttonBgColor: '#1C1C1C',
      buttonTextColor: '#F9E473',
      titulo: 'Carnes de Calidad Premium Desde 1952',
      descripcion:
        'Carnicería familiar que ofrece los mejores cortes de res, cerdo, cordero y aves. De origen local, preparados por expertos y entregados frescos diariamente.',
    },
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

const sampleProducts = [
  {
    id: '1',
    title: 'Manzanas Rojas Premium',
    description: 'Manzanas frescas y jugosas, perfectas para tu desayuno diario',
    category: 'Frutas',
    price: 4.99,
    unit: 'kg',
    oldPrice: 6.99,
    imageUrl: '/images/manzanas.jpg',
    promoLabel: '30% OFF',
  },
  {
    id: '2',
    title: 'Leche Entera Orgánica',
    description: 'Leche 100% natural de vacas alimentadas con pasto orgánico',
    category: 'Lácteos',
    price: 3.5,
    unit: 'litro',
    imageUrl: '/images/leche.jpg',
  },
  {
    id: '3',
    title: 'Pan Artesanal Integral',
    description: 'Pan recién horneado con ingredientes naturales y semillas',
    category: 'Panadería',
    price: 2.75,
    unit: 'unidad',
    oldPrice: 3.25,
    imageUrl: '/images/pan.jpg',
    promoLabel: 'NUEVO',
  },
  {
    id: '4',
    title: 'Tomates Cherry Orgánicos',
    description: 'Tomates cherry dulces y frescos, cultivados sin pesticidas',
    category: 'Verduras',
    price: 5.2,
    unit: 'bandeja',
    imageUrl: '/images/tomates.jpg',
  },
  {
    id: '5',
    title: 'Yogurt Griego Natural',
    description: 'Yogurt cremoso alto en proteínas, sin azúcares añadidos',
    category: 'Lácteos',
    price: 4.1,
    unit: 'envase',
    imageUrl: '/images/yogurt.jpg',
  },
];

export const getSampleProducts = () => sampleProducts;

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
