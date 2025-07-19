import Link from 'next/link';
import { FooterProps } from './footer.types';

export const Footer = ({
  companyName,
  companyDescription,
  linkColumns,
  socialLinks,
  copyrightText,
  bgColor,
  textColor,
  linkColor,
  linkHoverColor,
}: FooterProps) => {
  return (
    <footer
      className="w-full border-t border-[var(--color-footer-border)]"
      style={
        {
          '--footer-background': bgColor,
          '--footer-text': textColor,
          '--footer-link': linkColor,
          '--footer-link-hover': linkHoverColor,
          backgroundColor: 'var(--footer-background)',
        } as React.CSSProperties
      }
    >
      <div className="mx-auto w-full sm:w-11/12 md:w-11/12 lg:w-10/12 2xl:w-3/4 px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center sm:gap-10 lg:gap-50 text-center sm:text-left">
          <div className="sm:max-w-xs md:max-w-lg">
            <h2 className="text-xl font-bold text-[var(--footer-text)]">{companyName}</h2>
            <p className="mt-4 opacity-90 text-[var(--footer-text)]">{companyDescription}</p>
            <div className="mt-8 flex justify-center gap-4 sm:justify-start mb-10 sm:mb-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--footer-link)] hover:text-[var(--footer-link-hover)] transition-colors"
                >
                  {social.icon}
                  <span className="sr-only">{social.href}</span>
                </a>
              ))}
            </div>
          </div>

          {linkColumns.map((column) => (
            <div key={column.title}>
              <p className="font-medium text-[var(--footer-text)]">{column.title}</p>
              <ul className="mt-6 space-y-4 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[var(--footer-link)] hover:text-[var(--footer-link-hover)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-[var(--color-footer-border)] pt-8">
          <p className="text-center text-sm opacity-80 text-[var(--footer-text)]">{copyrightText}</p>
        </div>
      </div>
    </footer>
  );
};
