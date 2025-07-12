// app/(main)/layout.tsx
import { Navbar } from "@/components/layout/Navbar/Navbar";
import { NavLink } from "@/components/layout/Navbar/navbar.types";
import { Footer } from "@/components/layout/Footbar/Footer";
import { Facebook, Instagram, Twitter } from "lucide-react";

const footerData = {
  companyName: "Template.ui",
  companyDescription:
    "Un template base increíblemente flexible para tus proyectos con Next.js.",
  linkColumns: [
    {
      title: "Recursos",
      links: [
        { href: "/contacto", label: "Contacto" },
        { href: "/faq", label: "FAQ" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/privacidad", label: "Política de Privacidad" },
        { href: "/terminos", label: "Términos de Servicio" },
      ],
    },
  ],
  socialLinks: [
    { href: "https://facebook.com", icon: <Facebook className="h-6 w-6" /> },
    { href: "https://instagram.com", icon: <Instagram className="h-6 w-6" /> },
    { href: "https://twitter.com", icon: <Twitter className="h-6 w-6" /> },
  ],
  copyrightText: `© ${new Date().getFullYear()} Template.ui. Todos los derechos reservados.`,
};

const logoData = {
  src: "/globe.svg",
  alt: "Logo de Mi Template",
  text: "Template.ui",
};

const mainNavLinks: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/acerca-de", label: "Acerca de" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
];

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar logo={logoData} navLinks={mainNavLinks} logoHref="/" />
      <main className="flex flex-1 flex-col items-center justify-center min-h-[calc(100vh-20rem)] text-center">
        {children}
      </main>
      <Footer {...footerData} />
    </>
  );
}
