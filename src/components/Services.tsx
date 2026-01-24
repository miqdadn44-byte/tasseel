import { Briefcase, Scale, Users, Shield, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: Briefcase,
      titleKey: 'services.labor',
      descKey: 'services.labor.desc',
      link: 'labor-law'
    },
    {
      icon: Scale,
      titleKey: 'services.civil',
      descKey: 'services.civil.desc',
      link: 'civil-litigation'
    },
    {
      icon: Users,
      titleKey: 'services.family',
      descKey: 'services.family.desc',
      link: 'family-law'
    },
    {
      icon: Shield,
      titleKey: 'services.criminal',
      descKey: 'services.criminal.desc',
      link: 'criminal-defense'
    },
  ];

  const getServiceLink = (slug: string) => {
    return language === 'ar' ? `/ar/services/${slug}` : `/services/${slug}`;
  };

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-6 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-accent/40"></span>
            {t('services.label')}
            <span className="w-8 h-px bg-accent/40"></span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6 tracking-tight">
            {t('services.title')}
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed max-w-2xl mx-auto">
            {language === 'ar'
              ? 'نقدم حلولاً قانونية شاملة مصممة خصيصاً لتلبية احتياجات عملائنا بأعلى معايير المهنية والاحترافية.'
              : 'Providing comprehensive legal solutions tailored to your specific needs with the highest standards of professionalism.'}
          </p>
        </div>

        {/* Discrete Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 sm:p-10 rounded-sm bg-background border border-border/40 hover:border-accent/30 hover:bg-secondary/20 hover:shadow-lg transition-all duration-500 ease-out flex flex-col items-start h-full"
            >
              {/* Icon Container */}
              <div className="mb-8 w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                <service.icon className="h-6 w-6 stroke-[1.5]" />
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-medium text-primary mb-4 tracking-tight group-hover:text-accent transition-colors duration-300">
                {t(service.titleKey)}
              </h3>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-light mb-10 max-w-sm">
                {t(service.descKey)}
              </p>

              {/* Text Link CTA */}
              <Link
                to={getServiceLink(service.link)}
                className="mt-auto inline-flex items-center gap-3 text-xs font-bold text-primary uppercase tracking-[0.2em] group-hover:text-accent transition-colors duration-300 border-b border-transparent group-hover:border-accent/30 pb-1"
              >
                <span>{t('services.learn_more') || 'Experience'}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
