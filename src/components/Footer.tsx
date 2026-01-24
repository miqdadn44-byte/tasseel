import { Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoAr from '@/assets/logo-ar.png';
import logoEn from '@/assets/logo-en.png';

const Footer = () => {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const quickLinks = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'team', href: '#team' },
    { key: 'contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      if (location.pathname === '/') {
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/' + href);
      }
    } else {
      navigate(href);
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-32 pb-12 border-t border-primary-foreground/5 relative overflow-hidden">
      {/* Background Pattern (Subtle texture) */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none mix-blend-multiply"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-12 mb-20">
          {/* Brand & Social */}
          <div className="lg:col-span-2">
            <div className="mb-8 inline-block">
              <img
                src={language === 'ar' ? logoAr : logoEn}
                alt={language === 'ar' ? 'شعار تأصيل' : 'Tasseel Logo'}
                className="h-20 sm:h-24 w-auto object-contain brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-primary-foreground/60 text-base leading-relaxed max-w-sm font-light mb-10">
              {t('footer.description')}
            </p>

            {/* Social Icons - Clean & Minimal */}
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label={t('footer.social.instagram')} className="h-10 w-10 flex items-center justify-center rounded-sm border border-primary-foreground/10 text-primary-foreground/60 hover:bg-accent hover:border-accent hover:text-primary transition-all duration-300">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label={t('footer.social.facebook')} className="h-10 w-10 flex items-center justify-center rounded-sm border border-primary-foreground/10 text-primary-foreground/60 hover:bg-accent hover:border-accent hover:text-primary transition-all duration-300">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label={t('footer.social.linkedin')} className="h-10 w-10 flex items-center justify-center rounded-sm border border-primary-foreground/10 text-primary-foreground/60 hover:bg-accent hover:border-accent hover:text-primary transition-all duration-300">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label={t('footer.social.twitter')} className="h-10 w-10 flex items-center justify-center rounded-sm border border-primary-foreground/10 text-primary-foreground/60 hover:bg-accent hover:border-accent hover:text-primary transition-all duration-300">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-8 text-accent uppercase text-[10px] tracking-[0.2em]">
              {t('footer.quicklinks')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm font-medium text-primary-foreground/60 hover:text-accent transition-colors block py-0.5 cursor-pointer"
                  >
                    {t(`nav.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-8 text-accent uppercase text-[10px] tracking-[0.2em]">
              {t('footer.legal')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm font-medium text-primary-foreground/60 hover:text-accent transition-colors block py-0.5">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm font-medium text-primary-foreground/60 hover:text-accent transition-colors block py-0.5">
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-primary-foreground/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-primary-foreground/30 uppercase tracking-widest">
          <p>
            © {currentYear} {language === 'ar' ? 'مكتب تأصيل للمحاماة' : 'Tasseel Law Firm'}.
          </p>
          <p className="opacity-70">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
