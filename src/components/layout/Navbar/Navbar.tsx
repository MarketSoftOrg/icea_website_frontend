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
  textColor?: string;
  logoHref?: string;
  hasIceaNavLink?: boolean;
  hasWhatsApp?: boolean;
}

export const Navbar = ({
  logo,
  navLinks,
  bgColor,
  hoverColor,
  textColor,
  logoHref,
  hasIceaNavLink = false,
  hasWhatsApp = true,
}: NavbarProps) => {
  const dynamicStyles: React.CSSProperties = {
    '--navbar-background': bgColor,
    '--nav-link-text': textColor,
    '--nav-link-hover-text': hoverColor,
  } as React.CSSProperties;

  const defaultLogoHref = '/';
  return (
    <>
      <header style={dynamicStyles} className="relative w-full border-b bg-navbar/95 backdrop-blur-sm">
        <div className="mx-auto flex h-24 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Desktop */}
          <div className="hidden items-center gap-6 md:flex">
            {logo && (
              <Link href={logoHref || defaultLogoHref} className="flex items-center space-x-2">
                <Image className="mb-2" src={logo.src} alt={logo.alt} width={80} height={80} />
                {logo.text && <span className=" m-5 font-bold text-2xl text-[var(--nav-link-text)]">{logo.text}</span>}
              </Link>
            )}
            <NavigationMenu>
              <NavigationMenuList>
                {navLinks.map((link) => (
                  <NavigationMenuItem key={`desktop-${link.href}`}>
                    <Link
                      href={link.href}
                      className={`${navigationMenuTriggerStyle()} text-[var(--nav-link-text)] hover:text-[var(--nav-link-hover-text)]`}
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuItem>
                ))}
                {hasIceaNavLink && (
                  <NavigationMenuItem key="desktop-icea-home">
                    <Link
                      href="/"
                      className={`${navigationMenuTriggerStyle()} text-[var(--nav-link-text)] hover:text-[var(--nav-link-hover-text)] flex-grow h-full flex items-center justify-center`}
                    >
                      <div className="flex items-center space-x-2">
                        <span>Grupo ICEA</span>
                        <Image className="mb-1" src="/logos/icea_blanco.png" alt="Logo ICEA" width={50} height={50} />
                      </div>
                    </Link>
                  </NavigationMenuItem>
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile */}
          <div className="flex w-full items-center justify-between md:hidden">
            <div className="flex w-14 justify-start">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5 text-[var(--nav-link-text)]" />
                    <span className="sr-only">Abrir menú</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-[var(--navbar-background)]">
                  <DropdownMenuLabel className="text-[var(--nav-link-text)]">Navegación</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {navLinks.map((link) => (
                    <DropdownMenuItem
                      key={`mobile-${link.href}`}
                      asChild
                      className="text-[var(--nav-link-text)] hover:text-[var(--nav-link-hover-text)] hover:bg-transparent"
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex justify-center">
              {logo && (
                <Link href={logoHref || defaultLogoHref} className="flex items-center space-x-2">
                  <Image src={logo.src} alt={logo.alt} width={40} height={40} />
                  {logo.text && <span className="font-bold text-lg text-[var(--nav-link-text)]">{logo.text}</span>}
                </Link>
              )}
            </div>

            <div className="w-14"></div>
          </div>
        </div>
      </header>

      {/* WhatsApp */}
      {hasWhatsApp && (
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed top-6 right-[5%] md:right-[10%] lg:right-[30%] z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 shadow-lg hover:bg-green-600 hover:scale-110"
        >
          <MessageCircle className="h-7 w-7 text-white" />
        </a>
      )}
    </>
  );
};
