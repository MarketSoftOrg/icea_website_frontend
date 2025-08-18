import { Footer } from '@/components/layout/Footbar/Footer';
import { Navbar } from '@/components/layout/Navbar/Navbar';
import { NavLink } from '@/components/layout/Navbar/navbar.types';
import { Sucursal } from '@/lib/data';
import { Facebook, MessageCircle } from 'lucide-react';

interface SucursalPageWrapperProps {
  sucursal: Sucursal;
  children: React.ReactNode;
  currentPage?: 'inicio' | 'contacto' | 'productos' | 'acerca';
}

export function SucursalPageWrapper({ sucursal, children }: SucursalPageWrapperProps) {
  const navLinks: NavLink[] = [
    {
      href: `/sucursales/${sucursal.slug}`,
      label: 'Inicio',
    },
    {
      href: `/sucursales/${sucursal.slug}/contacto`,
      label: 'Contacto',
    },
    {
      href: `/sucursales/${sucursal.slug}/bolsa-trabajo`,
      label: 'Bolsa de Trabajo',
    },
  ];

  const logoData = {
    src: sucursal.imageUrlColor,
    alt: `Logo de la sucursal ${sucursal.nombre}`,
    text: sucursal.nombre,
  };

  const linkColumns = [
    {
      title: 'Recursos',
      links: [{ href: '/quejas-sugerencias', label: 'Quejas y Sugerencias ' }],
    },
    {
      title: 'Legal',
      links: [
        { href: '/privacidad', label: 'Política de Privacidad' },
        { href: '/terminos', label: 'Términos de Servicio' },
      ],
    },
  ];

  const socialLinks = [
    { href: sucursal.facebookUrl, icon: <Facebook size={24} /> }, // Puedes ajustar el 'size'
    { href: sucursal.whatsappUrl, icon: <MessageCircle size={24} /> }, // 'MessageCircle' es común para WhatsApp en Lucide
  ];

  return (
    <>
      <Navbar
        logo={logoData}
        navLinks={navLinks}
        bgColor={sucursal.navbarBgColor}
        hoverColor={sucursal.navbarHoverColor}
        textColor={sucursal.navbarTextColor}
        logoHref={`/sucursales/${sucursal.slug}`}
        hasIceaNavLink={true}
      />
      <main className="container mx-auto py-10 flex-grow">{children}</main>
      <Footer
        companyName={sucursal.nombre}
        companyDescription={sucursal.descripcion}
        linkColumns={linkColumns}
        socialLinks={socialLinks}
        bgColor={sucursal.footerBgColor}
        textColor={sucursal.footerTextColor}
        linkColor={sucursal.footerLinkColor}
        linkHoverColor={sucursal.footerLinkHoverColor}
      />
    </>
  );
}
