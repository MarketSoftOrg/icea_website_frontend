import Link from 'next/link';
import Image from 'next/image';
import { Menu, MessageCircle } from 'lucide-react';
import React from 'react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
// Asegúrate de que NavbarProps esté definida, ya sea importada o directamente aquí.
// Si tienes un archivo navbar.types.ts separado, actualízalo allí.
interface NavbarProps {
  logo: {
    src: string;
    alt: string;
    text?: string;
  };
  navLinks: {
    href: string;
    label: string;
  }[];
  bgColor?: string;
  hoverColor?: string;
  logoHref?: string;
  hasIceaNavLink?: boolean;
}

export const Navbar = ({ logo, navLinks, bgColor, hoverColor, logoHref, hasIceaNavLink = false }: NavbarProps) => {
  const dynamicStyles: React.CSSProperties = {
    '--navbar-background': bgColor,
    '--nav-link-hover-text': hoverColor,
  } as React.CSSProperties;

  const defaultLogoHref = '/';

  return (
    <>
      <header style={dynamicStyles} className="relative w-full border-b bg-navbar/95 backdrop-blur-sm">
        <div className="mx-auto flex h-24 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Diseño de escritorio: Logo y enlaces de navegación */}
          <div className="hidden items-center gap-6 md:flex">
            {logo && (
              <Link href={logoHref || defaultLogoHref} className="flex items-center space-x-2">
                <Image src={logo.src} alt={logo.alt} width={40} height={40} />
                {logo.text && <span className="font-bold text-2xl">{logo.text}</span>}
              </Link>
            )}
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={`desktop-${link.href}`}>
                    <Link href={link.href} className={navigationMenuTriggerStyle()}>
                      {link.label}
                    </Link>
                  </NavigationMenuItem>
                ))}
                {hasIceaNavLink && (
                  <NavigationMenuItem key="desktop-icea-home">
                    {/* MODIFICADO AQUÍ: El `Link` usa `navigationMenuTriggerStyle()`, y el contenido se envuelve en un `div` con `flex` */}
                    <Link href="/" className={navigationMenuTriggerStyle()}>
                      <div className="flex items-center space-x-2">
                        {' '}
                        {/* <--- NUEVO DIV PARA CONTROLAR EL FLEX */}
                        <span>Grupo ICEA</span>
                        <Image src="/globe.svg" alt="Logo ICEA" width={20} height={20} />
                      </div>
                    </Link>
                  </NavigationMenuItem>
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Diseño móvil: Tres columnas */}
          <div className="flex w-full items-center justify-between md:hidden">
            {/* Columna izquierda: Menú hamburguesa */}
            <div className="flex w-14 justify-start">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Abrir menú</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuLabel>Navegación</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {navLinks.map((link) => (
                    <DropdownMenuItem key={`mobile-${link.href}`} asChild>
                      <Link href={link.href}>{link.label}</Link>
                    </DropdownMenuItem>
                  ))}
                  {hasIceaNavLink && (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem key="mobile-icea-home" asChild>
                        {/* MODIFICADO AQUÍ (MÓVIL): El `Link` ya no tiene clases `flex`, se usa el `div` interno */}
                        <Link href="/">
                          <div className="flex items-center space-x-2">
                            {' '}
                            {/* <--- NUEVO DIV PARA CONTROLAR EL FLEX (MÓVIL) */}
                            <span>Grupo ICEA</span>
                            <Image src="/globe.svg" alt="Logo ICEA" width={20} height={20} />
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Columna central: Logo */}
            <div className="flex justify-center">
              {logo && (
                <Link href={logoHref || defaultLogoHref} className="flex items-center space-x-2">
                  <Image src={logo.src} alt={logo.alt} width={28} height={28} />
                  {logo.text && <span className="font-bold text-lg">{logo.text}</span>}
                </Link>
              )}
            </div>

            {/* Columna derecha: Espaciador */}
            <div className="w-14"></div>
          </div>
        </div>
      </header>
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-6 right-[5%] md:right-[10%] lg:right-[30%] z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 shadow-lg transition-all hover:bg-green-600 hover:scale-110"
      >
        <MessageCircle className="h-7 w-7 text-white" />
      </a>
    </>
  );
};
