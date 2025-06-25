import type { ReactNode } from 'react';

export interface FooterLink {
  href: string;
  label: string;
}

export interface LinkColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  href: string;
  icon: ReactNode;
}

export interface FooterProps {
  companyName: string;
  companyDescription: string;
  linkColumns: LinkColumn[];
  socialLinks: SocialLink[];
  copyrightText: string;
}
