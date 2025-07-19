import { Navbar } from '@/components/layout/Navbar/Navbar';
import { NavLink } from '@/components/layout/Navbar/navbar.types';
import { Sucursal } from '@/lib/data';

interface SucursalPageWrapperProps {
  sucursal: Sucursal;
  children: React.ReactNode;
  currentPage?: 'inicio' | 'contacto' | 'productos' | 'acerca';
}

export function SucursalPageWrapper({ sucursal, children }: SucursalPageWrapperProps) {
  const logoData = {
    src: '/globe.svg',
    alt: 'Logo de Mi Template',
    text: `Sucursal ${sucursal.nombre}`,
  };

  const navLinks: NavLink[] = [
    {
      href: `/sucursales/${sucursal.slug}`,
      label: 'Inicio',
    },
    {
      href: `/sucursales/${sucursal.slug}/contacto`,
      label: 'Contacto',
    },
  ];

  const bgColor = sucursal.bgColor || 'oklch(0.25 0.08 265)';
  const hoverColor = sucursal.hoverColor || 'oklch(0.8 0.15 130)';

  return (
    <>
      <Navbar
        logo={logoData}
        navLinks={navLinks}
        bgColor={bgColor}
        hoverColor={hoverColor}
        logoHref={`/sucursales/${sucursal.slug}`}
        hasIceaNavLink={true}
      />
      <main className="container mx-auto py-10 flex-grow">{children}</main>
    </>
  );
}
