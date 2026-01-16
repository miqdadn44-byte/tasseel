import { Briefcase, Scale, Users, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Briefcase,
      titleKey: 'services.labor',
      descKey: 'services.labor.desc',
    },
    {
      icon: Scale,
      titleKey: 'services.civil',
      descKey: 'services.civil.desc',
    },
    {
      icon: Users,
      titleKey: 'services.family',
      descKey: 'services.family.desc',
    },
    {
      icon: Shield,
      titleKey: 'services.criminal',
      descKey: 'services.criminal.desc',
    },
  ];

  return (
    <section id="services" className="py-32 bg-secondary/5 border-b border-border/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">
            {t('services.label')}
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-6 tracking-tight">
            {t('services.title')}
          </h2>
          <div className="w-px h-12 bg-accent/30 mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-10 bg-background border border-border/40 hover:border-accent/40 hover:shadow-sm transition-all duration-500 ease-out flex flex-col items-start h-full"
            >
              <service.icon className="h-8 w-8 text-accent/80 mb-6 stroke-[1.5] group-hover:text-accent transition-colors" />

              <h3 className="text-2xl font-serif font-medium text-primary mb-4 group-hover:text-accent transition-colors">
                {t(service.titleKey)}
              </h3>

              <p className="text-base text-muted-foreground/70 leading-relaxed font-light mb-8">
                {t(service.descKey)}
              </p>

              <div className="mt-auto w-12 h-px bg-border group-hover:bg-accent group-hover:w-full transition-all duration-700 ease-in-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
