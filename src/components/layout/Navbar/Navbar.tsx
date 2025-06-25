import Link from 'next/link';
import Image from 'next/image';
import { Menu, User } from 'lucide-react';

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
import { NavbarProps } from './navbar.types';

export const Navbar = ({ logo, navLinks }: NavbarProps) => {
  return (
    // The <header> takes up the full width for the background and border.
    <header className="sticky top-0 z-50 w-full border-b bg-navbar/95 backdrop-blur-sm">
      <div className="mx-auto flex h-24 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LEFT GROUP: Logo and Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {logo && (
            <Link href="/" className="flex items-center space-x-2">
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
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* LEFT GROUP (MOBILE): Hamburger Menu */}
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>Navigation</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {navLinks.map((link) => (
                <DropdownMenuItem key={`mobile-${link.href}`} asChild>
                  <Link href={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* LOGO (MOBILE): Appears in the center on mobile view */}
        <div className="flex justify-center md:hidden">
          {logo && (
            <Link href="/" className="flex items-center space-x-2">
              <Image src={logo.src} alt={logo.alt} width={28} height={28} />
            </Link>
          )}
        </div>

        {/* RIGHT GROUP: User Menu (visible on all screen sizes) */}
        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Open user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/perfil">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/configuracion">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/logout">Log Out</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
