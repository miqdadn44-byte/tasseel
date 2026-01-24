import { ArrowRight, ArrowLeft, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { language, t } = useLanguage();
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  return (

    <section id="home" className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/40 via-background to-background pt-32 pb-20 px-4 border-b border-border/40 relative overflow-hidden">
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] pointer-events-none mix-blend-multiply"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center max-w-4xl mx-auto">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-primary/5 bg-secondary/40 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            <p className="text-[10px] sm:text-xs font-bold text-primary/70 tracking-[0.2em] uppercase">
              {t('hero.badge')}
            </p>
          </div>

          {/* H1 */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-serif font-bold text-primary mb-6 leading-[1.1] tracking-tight">
            {t('hero.title')}
          </h1>

          {/* Divider */}
          <div className="w-px h-12 bg-gradient-to-b from-accent/0 via-accent/50 to-accent/0 mx-auto mb-8"></div>

          {/* Subheading */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-primary/80 mb-8 max-w-3xl mx-auto font-serif font-light leading-relaxed tracking-wide text-balance">
            {t('hero.subheading')}
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed font-light text-balance">
            {t('hero.description')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-10 mb-20">
            <div className="flex flex-row items-center justify-center gap-6 w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 h-12 text-base rounded-sm shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5 min-w-[140px] sm:min-w-[160px]"
                asChild
              >
                <a href="#contact">
                  {t('hero.cta')}
                </a>
              </Button>

              <a 
                href="#services" 
                className="text-accent font-medium text-sm sm:text-base hover:text-accent/80 transition-colors inline-flex items-center gap-2 group whitespace-nowrap"
              >
                {t('hero.secondary_cta')}
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
              </a>
            </div>

            {/* Trust Cue */}
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground/60 font-semibold uppercase tracking-widest backdrop-blur-sm px-4 py-1 rounded-full border border-border/40">
              <Lock className="h-3 w-3" /> {t('hero.confidential')}
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
