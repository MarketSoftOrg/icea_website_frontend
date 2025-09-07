import Link from 'next/link';
import { FooterProps } from './footer.types';

export const Footer = ({
  companyName,
  companyDescription,
  linkColumns,
  socialLinks,
  bgColor = '#111827', // gray-900
  textColor = '#ffffff',
  linkColor = '#9ca3af', // gray-400
  linkHoverColor = '#ffffff',
}: FooterProps) => {
  return (
    <footer
      className="text-white py-6"
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
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          <div className="md:col-span-2">
            <div className="mb-3">
              <span className="text-lg font-semibold text-[var(--footer-text)]">{companyName}</span>
            </div>
            <p className="text-[var(--footer-link)] mb-3 text-sm leading-relaxed">{companyDescription}</p>
            {socialLinks && socialLinks.length > 0 && (
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--footer-link)] hover:text-[var(--footer-link-hover)] transition-colors"
                    aria-label={`Seguir en ${social.href}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            )}
          </div>
          {linkColumns &&
            linkColumns.map((column, columnIndex) => (
              <div key={column.title || columnIndex}>
                <h3 className="text-lg font-semibold mb-3 text-[var(--footer-text)]">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links &&
                    column.links.map((link, linkIndex) => (
                      <li key={link.label || linkIndex}>
                        {link.href ? (
                          <Link
                            href={link.href}
                            className="text-[var(--footer-link)] hover:text-[var(--footer-link-hover)] transition-colors text-sm"
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <span className="text-[var(--footer-link)] text-sm">{link.label}</span>
                        )}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
        </div>
        <div className="border-t border-gray-600 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-[var(--footer-link)] text-sm">
                © {new Date().getFullYear()} {companyName}. Todos los derechos reservados.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-[var(--footer-link)] hover:text-[var(--footer-link-hover)] transition-colors text-sm"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/terms"
                className="text-[var(--footer-link)] hover:text-[var(--footer-link-hover)] transition-colors text-sm"
              >
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
