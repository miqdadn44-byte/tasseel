import { ArrowRight, ArrowLeft, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { language, t } = useLanguage();
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  return (

    <section id="home" className="min-h-[100dvh] flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/40 via-background to-background pt-28 pb-16 sm:pt-32 sm:pb-20 px-4 border-b border-border/40 relative overflow-hidden">
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] pointer-events-none mix-blend-multiply"></div>

      <div className="container mx-auto px-6 sm:px-6 lg:px-12 max-w-5xl relative z-10">
        <div className="text-center max-w-4xl mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-primary/5 bg-secondary/40 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            <p className="text-[10px] sm:text-xs font-bold text-primary/70 tracking-[0.2em] uppercase">
              {t('hero.badge')}
            </p>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-serif font-bold text-primary mb-6 leading-[1.1] tracking-tight">
            {t('hero.title')}
          </h1>

          {/* Divider */}
          <div className="w-px h-12 bg-gradient-to-b from-accent/0 via-accent/50 to-accent/0 mx-auto mb-8"></div>

          {/* Subheading */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-primary/80 mb-8 max-w-3xl mx-auto font-serif font-light leading-relaxed tracking-wide text-balance">
            {t('hero.subheading')}
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto leading-loose font-light text-balance">
            {t('hero.description')}
          </p>

          {/* Trust Cue - Row */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-16 text-[10px] sm:text-xs font-bold text-muted-foreground/60 uppercase tracking-[0.2em]">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/50 border border-primary/5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
              {language === 'ar' ? 'تأسست ٢٠٠٩' : 'EST. 2009'}
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/50 border border-primary/5 backdrop-blur-sm">
              <Lock className="h-3 w-3" />
              {t('hero.confidential')}
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/50 border border-primary/5 backdrop-blur-sm">
              <span className="text-primary">{language === 'ar' ? 'الكويت' : 'KUWAIT'}</span>
            </div>
          </div>



          {/* CTAs */}
          <div className="flex flex-col items-center gap-10 mb-20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/95 text-primary-foreground font-semibold px-10 h-14 text-sm tracking-widest uppercase rounded-sm shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 w-full sm:w-auto min-w-[180px]"
                asChild
              >
                <a href="#contact">
                  {t('hero.cta')}
                </a>
              </Button>

              <a
                href="#services"
                className="text-primary/80 font-semibold text-sm hover:text-primary transition-colors inline-flex items-center gap-3 group whitespace-nowrap tracking-wider uppercase border-b border-transparent hover:border-primary/20 pb-0.5"
              >
                {t('hero.secondary_cta')}
                <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </a>
            </div>


          </div>

          {/* Footer of Hero */}
          <div className="opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="flex items-center justify-center gap-6">
              <span className="h-px w-8 bg-border"></span>
              <p className="text-xs text-muted-foreground font-serif italic tracking-wide">
                {t('hero.trust')}
              </p>
              <span className="h-px w-8 bg-border"></span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
