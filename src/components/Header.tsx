import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import logo from '@/assets/logo.png';
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
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Controlled state for deskop dropdown
  const [isMobileServicesExpanded, setIsMobileServicesExpanded] = useState(false); // Controlled state for mobile accordion

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
        // If not home, highlighted services if on service page (English or Arabic)
        if (location.pathname.startsWith('/services/') || location.pathname.startsWith('/ar/services/')) {
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
    { key: 'labor', slug: 'labor-law', labelEn: 'Labor Law', labelAr: 'قانون العمل' },
    { key: 'civil', slug: 'civil-litigation', labelEn: 'Civil Litigation', labelAr: 'القضايا المدنية' },
    { key: 'family', slug: 'family-law', labelEn: 'Family Law', labelAr: 'قضايا الأسرة' },
    { key: 'criminal', slug: 'criminal-defense', labelEn: 'Criminal Defense', labelAr: 'الدفاع الجنائي' },
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
          <Link to="/" className="block group relative z-50 flex items-center gap-3 sm:gap-4" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img
              src={logo}
              alt="Tasseel Logo"
              className={`w-auto object-contain transition-all duration-500 ${isScrolled || location.pathname !== '/' ? 'h-10 sm:h-12 lg:h-14' : 'h-14 sm:h-20 lg:h-24'}`}
            />
            <div className={`flex flex-col justify-center transition-all duration-500 ${isScrolled || location.pathname !== '/' ? 'scale-95' : 'scale-100'}`}>
              <span
                className={`font-serif font-bold text-primary leading-none transition-all duration-500 ${isScrolled || location.pathname !== '/'
                  ? 'text-2xl sm:text-3xl lg:text-3xl'
                  : 'text-3xl sm:text-4xl lg:text-5xl'
                  }`}
                style={{ letterSpacing: language === 'ar' ? '0' : '0.15em' }}
              >
                {language === 'ar' ? 'تأصيل' : 'TASSEEL'}
              </span>
            </div>
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
                  <div key={item.key} className="flex items-center gap-1.5 relative group">
                    {/* Main Link - Navigates to Services Page */}
                    <a
                      href="#services"
                      onClick={(e) => handleNavClick(e, '#services')}
                      className={`text-sm font-medium tracking-widest transition-colors duration-300 relative py-2 cursor-pointer ${activeSection === 'services'
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-primary'
                        }`}
                      style={{ fontFamily: language === 'ar' ? '"Noto Sans Arabic", sans-serif' : 'inherit' }}
                    >
                      {t('nav.services')}
                      <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent transition-all duration-500 ${activeSection === 'services' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} />
                    </a>

                    {/* Independent Dropdown Trigger */}
                    <DropdownMenu
                      key={item.key}
                      dir={isRTL ? "rtl" : "ltr"}
                      open={isServicesOpen}
                      onOpenChange={setIsServicesOpen}
                    >
                      <DropdownMenuTrigger asChild>
                        <button
                          className={`p-1.5 text-muted-foreground/60 hover:text-primary transition-colors outline-none focus:text-primary ${isServicesOpen ? 'text-primary' : ''}`}
                          aria-label="Toggle Services Menu"
                          aria-expanded={isServicesOpen}
                        >
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                      </DropdownMenuTrigger>

                      {/* Premium Dropdown Content */}
                      {/* Premium Dropdown Content */}
                      <DropdownMenuContent
                        align={isRTL ? "end" : "start"}
                        sideOffset={8}
                        className="w-64 bg-background border border-border/40 shadow-lg shadow-black/5 rounded-sm p-2 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 duration-200"
                        onCloseAutoFocus={(e) => e.preventDefault()}
                        onInteractOutside={() => setIsServicesOpen(false)}
                      >
                        {/* Muted Label */}
                        <div className="px-4 py-3 text-[10px] font-bold text-muted-foreground/60 uppercase tracking-[0.2em] border-b border-border/40 mb-3 select-none">
                          {language === 'ar' ? 'الخدمات القانونية' : 'LEGAL SERVICES'}
                        </div>

                        {serviceLinks.map((service) => {
                          const servicePath = language === 'ar'
                            ? `/ar/services/${service.slug}`
                            : `/services/${service.slug}`;

                          return (
                            <DropdownMenuItem key={service.key} asChild className="focus:bg-transparent p-0 mb-1 last:mb-0 outline-none">
                              <Link
                                to={servicePath}
                                onClick={() => setIsServicesOpen(false)}
                                className={`group/item relative flex items-center w-full cursor-pointer py-3.5 px-4 text-sm font-medium text-primary/80 hover:text-primary transition-all duration-300 outline-none
                                ${isRTL
                                    ? 'border-r-2 border-r-transparent hover:border-r-accent focus:border-r-accent'
                                    : 'border-l-2 border-l-transparent hover:border-l-accent focus:border-l-accent'
                                  }`}
                                style={{ fontFamily: language === 'ar' ? '"Noto Sans Arabic", sans-serif' : 'inherit' }}
                              >
                                <span className="transition-transform duration-300 group-hover/item:translate-x-1.5 rtl:group-hover/item:-translate-x-1.5 text-primary/70 group-hover:text-primary group-focus:text-primary">
                                  {language === 'ar' ? service.labelAr : service.labelEn}
                                </span>
                              </Link>
                            </DropdownMenuItem>
                          );
                        })}
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

            {/* Mobile Services Section - Accordion */}
            <div className="flex flex-col">
              <button
                onClick={() => setIsMobileServicesExpanded(!isMobileServicesExpanded)}
                className="flex items-center justify-center gap-2 text-xl font-medium text-foreground/80 hover:text-primary transition-colors w-full"
                aria-expanded={isMobileServicesExpanded}
              >
                {t('nav.services')}
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesExpanded ? 'rotate-180 text-primary' : 'text-muted-foreground/50'}`} />
              </button>

              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileServicesExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                <div className="flex flex-col gap-3 pb-2">
                  {/* Optional 'View All' link if desired, or just list items. Requirement says 'simple vertical list' */}

                  {serviceLinks.map((s) => {
                    const servicePath = language === 'ar'
                      ? `/ar/services/${s.slug}`
                      : `/services/${s.slug}`;

                    return (
                      <Link
                        key={s.key}
                        to={servicePath}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-base text-muted-foreground hover:text-primary transition-colors py-1"
                      >
                        {language === 'ar' ? s.labelAr : s.labelEn}
                      </Link>
                    );
                  })}
                </div>
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
