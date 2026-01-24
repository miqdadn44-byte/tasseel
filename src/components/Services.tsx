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
        </div>

        {/* Discrete Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-10 rounded-xl bg-background border border-border/10 hover:border-transparent hover:bg-secondary/40 hover:shadow-md transition-all duration-500 ease-out flex flex-col items-start h-full"
            >
              {/* Icon Container */}
              <div className="mb-8 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                <service.icon className="h-5 w-5 stroke-[1.5]" />
              </div>

              <h3 className="text-xl font-serif font-semibold text-primary mb-4 tracking-tight">
                {t(service.titleKey)}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed font-light mb-10 max-w-sm">
                {t(service.descKey)}
              </p>

              {/* Text Link CTA */}
              <Link
                to={getServiceLink(service.link)}
                className="mt-auto inline-flex items-center gap-2 text-[11px] font-bold text-primary/70 uppercase tracking-[0.15em] group-hover:text-accent transition-colors duration-300"
              >
                <span>{t('services.learn_more') || 'Learn More'}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 transition-transform duration-300 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
