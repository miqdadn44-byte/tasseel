import { useLanguage } from '@/contexts/LanguageContext';
import abdullahImage from '@/assets/team/abdullah-k-al-foqom.jpg';
import consultant1Image from '@/assets/team/mohammed-hassan-mohammed-atta-al-karim.jpg';
import consultant2Image from '@/assets/team/mohamed-abdelaziz-ismail-gaballa.jpg';
import assistant1Image from '@/assets/team/adel-nasser-bekhit-ahmed.jpg';

const Team = () => {
  const { t } = useLanguage();

  const owners = [
    { nameKey: 'team.owner1', titleKey: 'team.owner1.title', image: abdullahImage },
    { nameKey: 'team.owner2', titleKey: 'team.owner2.title', image: null },
  ];

  const partner = { nameKey: 'team.partner1', titleKey: 'team.partner1.title', image: null };

  const consultants = [
    { nameKey: 'team.consultant1', titleKey: 'team.consultant1.title', image: consultant1Image },
    { nameKey: 'team.consultant2', titleKey: 'team.consultant2.title', image: consultant2Image },
    { nameKey: 'team.consultant', titleKey: 'team.consultant', image: null },
  ];

  const assistants = [
    { nameKey: 'team.assistant1', titleKey: 'team.assistant1.title', image: assistant1Image },
    { nameKey: 'team.assistant2', titleKey: 'team.assistant2.title', image: null },
    { nameKey: 'team.assistant3', titleKey: 'team.assistant3.title', image: null },
    { nameKey: 'team.assistant4', titleKey: 'team.assistant4.title', image: null },
    { nameKey: 'team.assistant5', titleKey: 'team.assistant5.title', image: null },
    { nameKey: 'team.assistant', titleKey: 'team.assistant', image: null },
  ];

  return (
    <section id="team" className="py-24 bg-secondary/20 relative border-b border-border/30">
      {/* Top subtle fade */}
      <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-background to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-6 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-accent/40"></span>
            {t('team.subtitle') || 'Our Experts'}
            <span className="w-8 h-px bg-accent/40"></span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary mb-0 tracking-tight">
            {t('team.title')}
          </h2>
        </div>

        <div className="max-w-7xl mx-auto space-y-24">
          {/* Owners - Dominant, Central */}
          <div>
            <div className="text-center mb-16">
              <h3 className="inline-block text-xs font-bold text-primary uppercase tracking-[0.3em] border-b border-primary/20 pb-3 px-8">
                {t('team.owners')}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
              {owners.map((owner, index) => (
                <div key={index} className="group relative flex flex-col items-center">
                  <div className="mb-8 overflow-hidden rounded-sm aspect-[3/4] w-full max-w-[340px] bg-background shadow-xl group-hover:shadow-2xl transition-all duration-700 relative">
                    <div className="absolute inset-4 border border-primary/5 z-20 pointer-events-none"></div>

                    {/* Placeholder Logic Updated for Premium matching */}
                    {owner.image ? (
                      <img
                        src={owner.image}
                        alt={t(owner.nameKey)}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                      />
                    ) : (
                      <div className="w-full h-full bg-secondary/30 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary to-transparent"></div>
                        <span className="font-serif text-6xl text-primary/5">TLF</span>
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <p className="font-serif font-semibold text-primary text-3xl mb-3 tracking-tight">{t(owner.nameKey)}</p>
                    <p className="text-xs font-bold text-accent uppercase tracking-[0.2em]">{t(owner.titleKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Working Partner - Distinct */}
          <div>
            <div className="text-center mb-12">
              <h3 className="inline-block text-xs font-bold text-muted-foreground uppercase tracking-[0.25em] pb-2 opacity-80">
                {t('team.partner')}
              </h3>
            </div>
            <div className="max-w-xs mx-auto group relative flex flex-col items-center">
              <div className="mb-6 overflow-hidden rounded-sm aspect-[3/4] w-full max-w-[260px] bg-background shadow-lg group-hover:shadow-xl transition-all duration-700 relative">
                <div className="absolute inset-3 border border-primary/5 z-20 pointer-events-none"></div>

                {partner.image ? (
                  <img
                    src={partner.image}
                    alt={t(partner.nameKey)}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                ) : (
                  <div className="w-full h-full bg-secondary/40 flex items-center justify-center relative">
                    <span className="font-serif text-5xl text-primary/10 italic">TLF</span>
                  </div>
                )}
              </div>
              <div className="text-center">
                <p className="font-serif font-medium text-primary text-2xl mb-2 tracking-wide">{t(partner.nameKey)}</p>
                <p className="text-[10px] font-bold text-accent/90 uppercase tracking-[0.15em]">{t(partner.titleKey)}</p>
              </div>
            </div>
          </div>

          <div className="pt-24 border-t border-primary/5">
            {/* Legal Consultants - Professional Grid */}
            <div className="mb-24">
              <h3 className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-[0.2em] text-center mb-12">
                {t('team.consultants')}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 max-w-5xl mx-auto">
                {consultants.map((consultant, index) => (
                  <div key={index} className="group flex flex-col items-center text-center p-6 hover:bg-background/80 rounded-sm transition-all duration-500 hover:shadow-sm border border-transparent hover:border-border/40">
                    <div className="mb-5 overflow-hidden rounded-full w-28 h-28 mx-auto border border-border/60 group-hover:border-accent/40 transition-colors shadow-sm bg-background relative flex items-center justify-center">
                      {consultant.image ? (
                        <img
                          src={consultant.image}
                          alt={t(consultant.nameKey)}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      ) : (
                        <span className="font-serif text-xl text-primary/10">TLF</span>
                      )}
                    </div>
                    <p className="font-serif font-medium text-primary mb-1 text-lg tracking-tight">{t(consultant.nameKey)}</p>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest group-hover:text-accent transition-colors">
                      {t(consultant.titleKey)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Lawyer Assistants - Minimal */}
            <div>
              <h3 className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-[0.2em] text-center mb-10">
                {t('team.assistants')}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {assistants.map((assistant, index) => {
                  const isPlaceholder = assistant.nameKey === 'team.assistant';
                  if (isPlaceholder) return null;

                  return (
                    <div key={index} className="py-4 px-3 rounded-sm text-center flex flex-col items-center justify-center bg-background/40 hover:bg-background border border-transparent hover:border-border/30 transition-all duration-300">
                      <p className="text-sm font-semibold text-primary/80 mb-1 tracking-tight">
                        {t(assistant.nameKey)}
                      </p>
                      <p className="text-[9px] text-muted-foreground uppercase tracking-wider opacity-60">
                        {t(assistant.titleKey)}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
