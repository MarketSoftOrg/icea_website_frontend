export interface NavLink {
  href: string;
  label: string;
}

export interface NavbarProps {
  logo?: {
    src: string;
    alt: string;
    text?: string;
  };
  navLinks: NavLink[];
}
