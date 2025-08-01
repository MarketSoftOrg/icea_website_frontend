import { Navbar } from '@/components/layout/Navbar/Navbar';
import { NavLink } from '@/components/layout/Navbar/navbar.types';
import { Footer } from '@/components/layout/Footbar/Footer';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const footerData = {
  companyName: 'Grupo ICEA',
  companyDescription: 'Un grupo comprometido con la calidad y la innovación en la industria alimentaria.',
  linkColumns: [
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
  ],
  socialLinks: [
    { href: 'https://facebook.com', icon: <Facebook className="h-6 w-6" /> },
    { href: 'https://instagram.com', icon: <Instagram className="h-6 w-6" /> },
    { href: 'https://twitter.com', icon: <Twitter className="h-6 w-6" /> },
  ],
  copyrightText: `© ${new Date().getFullYear()} Template.ui. Todos los derechos reservados.`,
};

const logoData = {
  src: '/logos/icea_blanco.png',
  alt: 'Logo Grupo ICEA',
  text: 'GRUPO ICEA',
};

const mainNavLinks: NavLink[] = [
  { href: '/', label: 'Inicio' },
  { href: '/#sucursales', label: 'Sucursales' },
  { href: '/#contacto', label: 'Contacto' },
  { href: '/#sobre-nosotros', label: 'Sobre Nosotros' },
];

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar logo={logoData} navLinks={mainNavLinks} logoHref="/" hasWhatsApp={false} />

      <main className="flex-grow">{children}</main>

      <Footer {...footerData} />
    </div>
  );
}
