import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import logoAr from '@/assets/logo-ar.png';
import logoEn from '@/assets/logo-en.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Controlled state for dropdown

  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isRTL = language === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Active section detection only on home page
      if (location.pathname === '/') {
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
      } else {
        // If not home, maybe highlight services if on service page
        if (location.pathname.startsWith('/services/')) {
          setActiveSection('services');
        } else {
          setActiveSection('');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle Hash Scroll when landing on homepage from another page
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  // Close dropdown on location change
  useEffect(() => {
    setIsServicesOpen(false);
  }, [location.pathname]);


  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      if (location.pathname === '/') {
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setIsMobileMenuOpen(false); // Close mobile menu if open
        }
      } else {
        navigate('/' + href);
        setIsMobileMenuOpen(false);
      }
    } else {
      navigate(href);
      setIsMobileMenuOpen(false);
    }
  };

  const serviceLinks = [
    { key: 'labor', href: '/services/labor-law', labelEn: 'Labor Law', labelAr: 'قانون العمل' },
    { key: 'civil', href: '/services/civil-litigation', labelEn: 'Civil Litigation', labelAr: 'القضايا المدنية' },
    { key: 'family', href: '/services/family-law', labelEn: 'Family Law', labelAr: 'قضايا الأسرة' },
    { key: 'criminal', href: '/services/criminal-defense', labelEn: 'Criminal Defense', labelAr: 'الدفاع الجنائي' },
  ];

  const mainNavItems = [
    { key: 'home', href: '#home', isLink: true },
    { key: 'about', href: '#about', isLink: true },
    { key: 'services', isDropdown: true },
    { key: 'team', href: '#team', isLink: true },
    { key: 'contact', href: '#contact', isLink: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled || location.pathname !== '/'
        ? 'bg-background/95 backdrop-blur-md border-border/40 py-3 sm:py-4 shadow-sm'
        : 'bg-transparent border-transparent py-4 sm:py-6 lg:py-6'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="block group relative z-50" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src={language === 'ar' ? logoAr : logoEn}
              alt={language === 'ar' ? 'شعار تأصيل' : 'Tasseel Logo'}
              className={`w-auto object-contain transition-all duration-500 ${isScrolled || location.pathname !== '/' ? 'h-12 sm:h-16 lg:h-20' : 'h-16 sm:h-24 lg:h-32'}`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10 xl:gap-14">
            {mainNavItems.map((item) => {
              if (item.isLink) {
                return (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href!)}
                    className={`text-sm font-medium tracking-widest transition-all duration-300 relative py-2 cursor-pointer ${activeSection === item.key
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                      }`}
                    style={{ fontFamily: language === 'ar' ? '"Noto Sans Arabic", sans-serif' : 'inherit' }}
                  >
                    {t(`nav.${item.key}`)}
                    <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent transition-all duration-500 ${activeSection === item.key ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
                  </a>
                );
              }

              if (item.isDropdown && item.key === 'services') {
                return (
                  <div key={item.key} className="flex items-center gap-1">
                    {/* Static Label (Link to Service Overview if preferred, currently just label or scroll to #services) */}
                    <a
                      href="#services"
                      onClick={(e) => handleNavClick(e, '#services')}
                      className={`text-sm font-medium tracking-widest transition-all duration-300 relative py-2 cursor-pointer ${activeSection === 'services'
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-primary'
                        }`}
                      style={{ fontFamily: language === 'ar' ? '"Noto Sans Arabic", sans-serif' : 'inherit' }}
                    >
                      {t('nav.services')}
                      <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent transition-all duration-500 ${activeSection === 'services' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
                    </a>

                    {/* Dropdown Menu - Trigger is ONLY click on arrow */}
                    <DropdownMenu
                      key={item.key}
                      dir={isRTL ? "rtl" : "ltr"}
                      open={isServicesOpen}
                      onOpenChange={setIsServicesOpen}
                    >
                      <DropdownMenuTrigger asChild>
                        <button
                          className={`p-1 text-muted-foreground hover:text-primary transition-colors outline-none focus:text-primary ${isServicesOpen ? 'text-primary' : ''}`}
                          aria-label="Toggle Services Menu"
                          aria-expanded={isServicesOpen}
                        >
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align={isRTL ? "end" : "start"} className="w-56 bg-background/95 backdrop-blur-xl border-border/50">
                        {serviceLinks.map((service) => (
                          <DropdownMenuItem key={service.key} asChild>
                            <Link
                              to={service.href}
                              onClick={() => setIsServicesOpen(false)} // Explicitly close on click
                              className="w-full cursor-pointer py-2.5 text-sm font-medium focus:bg-primary/5 focus:text-primary"
                              style={{ fontFamily: language === 'ar' ? '"Noto Sans Arabic", sans-serif' : 'inherit' }}
                            >
                              {language === 'ar' ? service.labelAr : service.labelEn}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                );
              }
              return null;
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-8">
            <button
              onClick={toggleLanguage}
              className="text-xs lg:text-sm font-bold text-muted-foreground hover:text-primary px-3 py-2 transition-colors tracking-widest uppercase"
            >
              {language === 'ar' ? 'English' : 'العربية'}
            </button>

            <Button
              size="default"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white font-medium px-8 h-12 rounded-sm transition-all duration-300 uppercase tracking-widest text-xs"
              asChild
            >
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
                {language === 'ar' ? 'طلب استشارة' : 'Request Consultation'}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
            >
              {language === 'ar' ? 'EN' : 'ع'}
            </button>
            <button
              className="text-primary p-2 hover:bg-secondary rounded-sm transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-500 flex flex-col pt-32 px-6 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <nav className="w-full max-w-md mx-auto flex flex-col space-y-6 text-center">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="text-xl font-medium text-foreground/80 hover:text-primary transition-colors">{t('nav.home')}</a>
            <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-xl font-medium text-foreground/80 hover:text-primary transition-colors">{t('nav.about')}</a>

            {/* Mobile Services Section */}
            <div className="bg-secondary/20 rounded-xl p-4">
              <span className="block text-primary font-bold mb-4 uppercase text-sm tracking-widest">{t('nav.services')}</span>
              <div className="flex flex-col gap-3">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.key}
                    to={s.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg text-foreground/70 hover:text-primary transition-colors py-1"
                  >
                    {language === 'ar' ? s.labelAr : s.labelEn}
                  </Link>
                ))}
              </div>
            </div>

            <a href="#team" onClick={(e) => handleNavClick(e, '#team')} className="text-xl font-medium text-foreground/80 hover:text-primary transition-colors">{t('nav.team')}</a>

            <div className="w-12 h-px bg-border mx-auto my-2"></div>

            <Button
              size="lg"
              className="w-full bg-primary text-white hover:bg-primary/90 font-medium rounded-sm h-14"
              asChild
            >
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
                {language === 'ar' ? 'طلب استشارة' : 'Request Consultation'}
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
