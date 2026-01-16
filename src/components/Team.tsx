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
    <section id="team" className="py-24 bg-background border-b border-border/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-6 tracking-tight">
            {t('team.title')}
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto space-y-24">
          {/* Owners */}
          <div>
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] text-center mb-12">
              {t('team.owners')}
            </h3>
            <div className="grid sm:grid-cols-2 gap-10">
              {owners.map((owner, index) => (
                <div key={index} className="p-10 bg-white border-none text-center rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                  {owner.image && (
                    <div className="mb-8 overflow-hidden rounded-sm aspect-[3/4] max-w-[200px] mx-auto">
                      <img
                        src={owner.image}
                        alt={t(owner.nameKey)}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  )}
                  <p className="font-serif font-bold text-primary text-2xl mb-3 tracking-tight">{t(owner.nameKey)}</p>
                  <p className="text-xs font-bold text-accent uppercase tracking-widest">{t(owner.titleKey)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Working Partner */}
          <div>
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] text-center mb-12">
              {t('team.partner')}
            </h3>
            <div className="max-w-xl mx-auto p-10 bg-white border-none text-center rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
              {partner.image && (
                <div className="mb-8 overflow-hidden rounded-sm aspect-[3/4] max-w-[200px] mx-auto">
                  <img
                    src={partner.image}
                    alt={t(partner.nameKey)}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              )}
              <p className="font-serif font-bold text-primary text-2xl mb-3 tracking-tight">{t(partner.nameKey)}</p>
              <p className="text-xs font-bold text-accent uppercase tracking-widest">{t(partner.titleKey)}</p>
            </div>
          </div>

          <div className="pt-20 border-t border-border/40 space-y-20">
            {/* Legal Consultants */}
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest text-center mb-10">
                {t('team.consultants')}
              </h3>
              <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {consultants.map((consultant, index) => (
                  <div key={index} className="p-8 bg-white border border-transparent hover:border-accent/20 rounded-sm text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                    {consultant.image && (
                      <div className="mb-6 overflow-hidden rounded-sm aspect-[3/4] max-w-[140px] mx-auto shadow-sm">
                        <img
                          src={consultant.image}
                          alt={t(consultant.nameKey)}
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                    )}
                    <p className="font-bold text-primary mb-2 text-lg tracking-tight">{t(consultant.nameKey)}</p>
                    <p className="text-xs font-bold text-accent uppercase tracking-widest">
                      {t(consultant.titleKey)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Lawyer Assistants */}
            <div>
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest text-center mb-10">
                {t('team.assistants')}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {assistants.map((assistant, index) => {
                  const isPlaceholder = assistant.nameKey === 'team.assistant';
                  return (
                    <div key={index} className="p-4 py-6 bg-white border border-transparent hover:border-accent/10 rounded-sm text-center flex flex-col items-center justify-start shadow-sm hover:shadow-md transition-all duration-500 min-h-[140px]">
                      {assistant.image ? (
                        <div className="mb-3 overflow-hidden rounded-full w-16 h-16 border border-border/50 mx-auto">
                          <img
                            src={assistant.image}
                            alt={t(assistant.nameKey)}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                      ) : (
                        <div className="mb-3 w-16 h-16 rounded-full bg-secondary/50 border border-border/50 mx-auto flex items-center justify-center">
                          <span className="text-muted-foreground/30 text-xs uppercase font-bold">TBA</span>
                        </div>
                      )}

                      <p className={`text-xs ${!isPlaceholder ? 'font-bold text-primary mt-1 tracking-tight leading-tight' : 'text-muted-foreground text-opacity-80'}`}>
                        {t(assistant.nameKey)}
                      </p>
                      {!isPlaceholder && (
                        <p className="text-[10px] font-bold text-accent uppercase tracking-widest mt-1.5 opacity-80">
                          {t(assistant.titleKey)}
                        </p>
                      )}
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
