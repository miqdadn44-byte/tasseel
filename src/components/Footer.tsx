import { Scale, Instagram, Facebook, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logoAr from '@/assets/logo-ar.png';
import logoEn from '@/assets/logo-en.png';

const Footer = () => {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'team', href: '#team' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-20 mb-20">
          {/* About */}
          <div>
            <div className="mb-8 inline-block">
              <img
                src={language === 'ar' ? logoAr : logoEn}
                alt={language === 'ar' ? 'شعار تأصيل' : 'Tasseel Logo'}
                className="h-16 sm:h-20 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs font-light">
              {t('footer.description')}
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex gap-5">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label={t('footer.social.instagram')} className="text-primary-foreground/50 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label={t('footer.social.facebook')} className="text-primary-foreground/50 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label={t('footer.social.linkedin')} className="text-primary-foreground/50 hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label={t('footer.social.twitter')} className="text-primary-foreground/50 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-8 text-primary-foreground/80 uppercase text-xs tracking-widest">
              {t('footer.quicklinks')}
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                  >
                    {t(`nav.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-6 text-primary-foreground/90 uppercase text-xs tracking-widest">
              {t('footer.legal')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/40 font-light">
          <p>
            © {currentYear} {language === 'ar' ? 'مكتب تأصيل للمحاماة' : 'Tasseel Law Firm'}. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
