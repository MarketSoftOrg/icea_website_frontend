export interface Sucursal {
  id: number;
  nombre: string;
  slug: string;
  direccion: string;
  telefono: string;
  horario: string;
  descripcion: string;
  // Agregar colores opcionales
  bgColor?: string;
  hoverColor?: string;
}

const sucursalesData: Sucursal[] = [
  {
    id: 1,
    nombre: "Guadalajara",
    slug: "guadalajara",
    direccion: "Av. Vallarta 123, Col. Americana, Guadalajara, Jalisco",
    telefono: "33-1234-5678",
    horario: "Lunes a Viernes de 9am a 7pm",
    descripcion: "Nuestra casa matriz en el corazón de Guadalajara.",
    bgColor: "oklch(0.25 0.08 265)", // Azul profundo
    hoverColor: "oklch(0.8 0.15 130)", // Verde lima
  },
  {
    id: 2,
    nombre: "Monterrey",
    slug: "monterrey",
    direccion: "Calz. del Valle 456, San Pedro Garza García, Nuevo León",
    telefono: "81-8765-4321",
    horario: "Lunes a Sábado de 10am a 8pm",
    descripcion: "La sucursal más moderna en San Pedro.",
    bgColor: "oklch(0.35 0.15 25)", // Rojo vino
    hoverColor: "oklch(0.85 0.10 90)", // Amarillo
  },
  {
    id: 3,
    nombre: "Ciudad de México",
    slug: "ciudad-de-mexico",
    direccion: "Av. Insurgentes Sur 789, Col. Del Valle, Ciudad de México",
    telefono: "55-5555-5555",
    horario: "Lunes a Viernes de 9am a 6pm",
    descripcion: "Atendemos a toda la zona metropolitana.",
    bgColor: "oklch(0.30 0.12 145)", // Verde bosque
    hoverColor: "oklch(0.75 0.10 220)", // Azul claro
  },
  // Agrega más sucursales con sus colores...
];

// Función SÍNCRONA para obtener una sucursal.
// No necesita ser 'async' porque no espera a nada.
export const getSucursalBySlug = (slug: string): Sucursal | undefined => {
  const sucursal = sucursalesData.find((s) => s.slug === slug);
  return sucursal;
};

// Función SÍNCRONA para obtener todas.
export const getSucursales = (): Sucursal[] => {
  return sucursalesData;
};
