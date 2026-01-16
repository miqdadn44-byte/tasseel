import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import logoAr from '@/assets/logo-ar.png';
import logoEn from '@/assets/logo-en.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Active section detection
      const sections = ['home', 'about', 'services', 'team', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'team', href: '#team' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background/98 backdrop-blur-sm border-b border-border shadow-sm py-3'
        : 'bg-background py-6'
        }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="block group">
            <img
              src={language === 'ar' ? logoAr : logoEn}
              alt={language === 'ar' ? 'شعار تأصيل' : 'Tasseel Logo'}
              className="h-24 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10 xl:gap-14">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`text-sm font-medium tracking-widest transition-colors relative py-2 ${activeSection === item.key
                  ? 'text-primary font-bold'
                  : 'text-muted-foreground hover:text-primary'
                  }`}
                style={{ fontFamily: language === 'ar' ? '"Noto Sans Arabic", sans-serif' : 'inherit' }}
              >
                {t(`nav.${item.key}`)}
                {activeSection === item.key && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full animate-fade-in" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={toggleLanguage}
              className="text-sm font-medium text-muted-foreground hover:text-primary px-3 py-2 transition-colors tracking-wide"
            >
              {language === 'ar' ? 'English' : 'العربية'}
            </button>

            <Button
              size="default"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 shadow-sm rounded-sm"
              asChild
            >
              <a href="#contact">
                {language === 'ar' ? 'طلب استشارة' : 'Request Consultation'}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              {language === 'ar' ? 'EN' : 'ع'}
            </button>
            <button
              className="text-foreground p-1 hover:bg-secondary rounded-sm transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-border mt-4 animate-accordion-down">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="block py-3 px-4 text-foreground/80 hover:text-primary hover:bg-secondary rounded-sm transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
              <div className="pt-4 mt-6 border-t border-border px-1">
                <Button
                  size="default"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-sm"
                  asChild
                >
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    {language === 'ar' ? 'طلب استشارة' : 'Request Consultation'}
                  </a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
