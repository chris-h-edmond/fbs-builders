import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';
import { Logo } from './Logo';
import { NAVIGATION_LINKS, COMPANY_INFO, SERVICES_SUMMARY } from '@/constants';

const socialIcons: Record<string, React.ReactNode> = {
  linkedin: <Linkedin size={18} />,
  instagram: <Instagram size={18} />,
  twitter: <Twitter size={18} />,
};

/**
 * Global Site Footer.
 */
export const Footer: React.FC = () => {
  return (
    <footer className="bg-accent-950 text-accent-100 border-t border-accent-900 pt-16 pb-8 transition-colors duration-300">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <Logo showText={true} className="text-white" />
            <p className="text-sm text-accent-400 mt-2 max-w-xs leading-relaxed">
              Engineering premium commercial structures, custom spaces, and general contracting solutions tailored for enterprise and modern brands.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-accent-900 hover:bg-primary-600 transition-colors duration-200 text-accent-300 hover:text-white"
                aria-label="Follow FBS Builders on LinkedIn"
              >
                {socialIcons.linkedin}
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-accent-900 hover:bg-primary-600 transition-colors duration-200 text-accent-300 hover:text-white"
                aria-label="Follow FBS Builders on Instagram"
              >
                {socialIcons.instagram}
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-accent-900 hover:bg-primary-600 transition-colors duration-200 text-accent-300 hover:text-white"
                aria-label="Follow FBS Builders on Twitter"
              >
                {socialIcons.twitter}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-4">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-accent-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-4">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {SERVICES_SUMMARY.map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-sm text-accent-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-4">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-500 shrink-0 mt-0.5" />
                <span className="text-sm text-accent-400 leading-relaxed">
                  {COMPANY_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-500 shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-sm text-accent-400 hover:text-primary-400 transition-colors duration-200"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-500 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-sm text-accent-400 hover:text-primary-400 transition-colors duration-200 break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-900 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-accent-500">
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-xs text-accent-500 hover:text-accent-300">
              Privacy Policy
            </Link>
            <Link to="#" className="text-xs text-accent-500 hover:text-accent-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
export default Footer;
