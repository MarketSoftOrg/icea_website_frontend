import Link from "next/link";
import { FooterProps } from "./footer.types";

export const Footer = ({
  companyName,
  companyDescription,
  linkColumns,
  socialLinks,
  copyrightText,
}: FooterProps) => {
  return (
    <footer className="border-t bg-footer">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center sm:gap-10 lg:gap-50 text-center sm:text-left">
          <div className="sm:max-w-xs md:max-w-lg">
            <h2 className="text-xl font-bold">{companyName}</h2>
            <p className="mt-4 text-muted-foreground">{companyDescription}</p>
            <div className="mt-8 flex justify-center gap-4 sm:justify-start">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition hover:text-foreground"
                >
                  {social.icon}
                  <span className="sr-only">{social.href}</span>
                </a>
              ))}
            </div>
          </div>
          {linkColumns.map((column) => (
            <div key={column.title}>
              <p className="font-medium">{column.title}</p>
              <ul className="mt-6 space-y-4 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            {copyrightText}
          </p>
        </div>
      </div>
    </footer>
  );
};
