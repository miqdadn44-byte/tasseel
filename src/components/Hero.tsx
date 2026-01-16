import { ArrowRight, ArrowLeft, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { language, t } = useLanguage();
  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/20 via-background to-background pt-48 pb-32 px-4 border-b border-accent/5">
      <div className="container mx-auto max-w-5xl">
        <div className="relative z-10 text-center max-w-4xl mx-auto">

          {/* Badge */}
          <div className="inline-block mb-12 px-5 py-2 rounded-sm bg-secondary/10 border border-accent/10 backdrop-blur-sm">
            <p className="text-xs font-bold text-accent tracking-[0.3em] uppercase">
              {t('hero.badge')}
            </p>
          </div>

          {/* H1 */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-bold text-primary mb-10 leading-[0.9] tracking-tighter">
            {t('hero.title')}
          </h1>

          {/* Divider */}
          <div className="w-px h-16 bg-accent/30 mx-auto mb-10"></div>

          {/* Subheading (Authority Line) */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-primary/90 mb-8 max-w-3xl mx-auto font-serif font-medium leading-snug tracking-tight">
            {t('hero.subheading')}
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground/70 mb-14 max-w-2xl mx-auto leading-relaxed font-light">
            {t('hero.description')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-6 mb-20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 h-14 text-lg rounded-sm shadow-lg transition-all hover:-translate-y-0.5 min-w-[200px]"
                asChild
              >
                <a href="#contact">
                  {t('hero.cta')}
                </a>
              </Button>

              <a href="#services" className="text-primary font-medium hover:text-accent transition-colors flex items-center gap-2 group text-lg px-6 py-4">
                {t('hero.secondary_cta')}
                <ArrowIcon className="h-4 w-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </a>
            </div>

            <p className="text-xs text-muted-foreground/50 font-medium flex items-center gap-2">
              <Lock className="h-3 w-3" /> {t('hero.confidential')}
            </p>
          </div>

          {/* Practice Areas */}
          <p className="text-[10px] sm:text-xs font-bold text-muted-foreground/40 uppercase tracking-[0.25em] mb-8">
            {t('hero.practice_areas')}
          </p>

          {/* Trust Line */}
          <div className="flex items-center justify-center gap-3 opacity-60">
            <span className="w-8 h-px bg-border"></span>
            <p className="text-sm text-muted-foreground font-serif italic">
              {t('hero.trust')}
            </p>
            <span className="w-8 h-px bg-border"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
