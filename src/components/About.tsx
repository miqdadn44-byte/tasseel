import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-secondary/10 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Column A: Visual Anchor */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col items-start md:border-e border-accent/50 py-4 pe-8">
            <span className="text-sm font-bold text-muted-foreground uppercase tracking-[0.3em] mb-4">
              {t('about.established')}
            </span>
            <span className="text-7xl lg:text-8xl font-serif font-light text-accent leading-none">
              {t('about.year')}
            </span>
          </div>

          {/* Column B: Content */}
          <div className="md:col-span-8 lg:col-span-9 space-y-10">
            <div>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-primary mb-8 leading-tight tracking-tighter">
                {t('about.title')}
              </h2>
              <div className="w-16 h-1 bg-accent rounded-full"></div>
            </div>

            <p className="text-2xl sm:text-3xl font-serif text-primary leading-relaxed max-w-3xl">
              {t('about.description')}
            </p>

            <div className="w-full h-px bg-accent/20"></div>

            <p className="text-lg sm:text-xl text-muted-foreground leading-loose font-light max-w-3xl">
              {t('about.mission')}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
