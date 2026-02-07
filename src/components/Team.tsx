import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Twitter } from 'lucide-react';
import abdullahImage from '@/assets/team/abdullah-k-al-foqom.jpg';
import consultant1Image from '@/assets/team/mohammed-hassan-mohammed-atta-al-karim.jpg';
import consultant2Image from '@/assets/team/mohamed-abdelaziz-ismail-gaballa.jpg';
import assistant1Image from '@/assets/team/adel-nasser-bekhit-ahmed.jpg';
import mohammedImage from '@/assets/team/mohamed_alaazmy.jpg';
import omarImage from '@/assets/team/omar_alazmi.jpg';

const Team = () => {
  const { t } = useLanguage();

  const owners = [
    {
      nameKey: 'team.owner1',
      titleKey: 'team.owner1.title',
      image: abdullahImage,
      socials: {
        instagram: "https://www.instagram.com/abdullah_alfoqom?utm_source=qr&igsh=MXFkMm1ua25pNTdjOQ==",
        x: "https://x.com/lawyer_al_azemi",
        snapchat: "https://www.snapchat.com/add/just-ready?share_id=ALg_Lv2jz2o&locale=en-US"
      }
    },
    { nameKey: 'team.owner2', titleKey: 'team.owner2.title', image: mohammedImage },
  ];

  const partner = { nameKey: 'team.partner1', titleKey: 'team.partner1.title', image: omarImage };

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
                  <div className="overflow-hidden rounded-md aspect-[4/5] w-full max-w-[340px] bg-background shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] relative">
                    <div className="absolute inset-4 border border-primary/5 z-20 pointer-events-none"></div>

                    {owner.image ? (
                      <img
                        src={owner.image}
                        alt={t(owner.nameKey)}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-secondary/30 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary to-transparent"></div>
                        <span className="font-serif text-6xl text-primary/5">TLF</span>
                      </div>
                    )}
                  </div>
                  <div className="text-center mt-6">
                    <p className="text-xl font-semibold text-primary mb-1">{t(owner.nameKey)}</p>
                    <p className="text-sm uppercase tracking-wide text-accent">{t(owner.titleKey)}</p>

                    {/* Social Icons for Owners */}
                    {owner.socials && (
                      <div className="flex items-center justify-center gap-4 mt-4">
                        {owner.socials.instagram && (
                          <a href={owner.socials.instagram} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <defs>
                                <linearGradient id="ig-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                  <stop offset="0%" stopColor="#833AB4" />
                                  <stop offset="50%" stopColor="#FD1D1D" />
                                  <stop offset="100%" stopColor="#FCB045" />
                                </linearGradient>
                              </defs>
                              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.18627 21.2178 4.78652 21.465 5.44C21.722 6.087 21.89 6.813 21.94 7.878C21.98 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.221 19.21 20.877 19.766 20.322 20.322C19.766 20.8305 19.1658 21.2178 18.512 21.465C17.865 21.722 17.139 21.89 16.074 21.94C15.008 21.98 14.669 22 11.952 22C9.235 22 8.896 21.99 7.83 21.94C6.765 21.89 6.04 21.722 5.402 21.475C4.742 21.221 4.186 20.877 3.63 20.322C3.12153 19.8137 2.73423 19.2135 2.487 18.56C2.23 17.913 2.062 17.187 2.012 16.122C1.972 15.056 1.952 14.717 1.952 12C1.952 9.283 1.962 8.944 2.012 7.878C2.062 6.813 2.23 6.087 2.477 5.45C2.731 4.79 3.075 4.234 3.63 3.678C4.13847 3.16953 4.73872 2.78223 5.392 2.535C6.039 2.278 6.765 2.11 7.83 2.06C8.896 2.02 9.235 2 11.952 2H12ZM12 7C9.243 7 7 9.243 7 12C7 14.757 9.243 17 12 17C14.757 17 17 14.757 17 12C17 9.243 14.757 7 12 7ZM12 15C10.343 15 9 13.657 9 12C9 10.343 10.343 9 12 9C13.657 9 15 10.343 15 12C15 13.657 13.657 15 12 15ZM18.406 4.93C17.672 4.93 17.078 5.524 17.078 6.258C17.078 6.992 17.672 7.586 18.406 7.586C19.14 7.586 19.734 6.992 19.734 6.258C19.734 5.524 19.14 4.93 18.406 4.93Z" fill="url(#ig-gradient)" />
                            </svg>
                          </a>
                        )}
                        {owner.socials.x && (
                          <a href={owner.socials.x} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zl-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                          </a>
                        )}
                        {owner.socials.snapchat && (
                          <a href={owner.socials.snapchat} target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#FFFC00" stroke="black" strokeWidth="0.5">
                              <path d="M12.003 2c-2.953 0-4.942 1.947-4.95 4.742v.078c0 .878-.458 1.402-1.258 1.402-.516 0-1.265-.184-1.265-.797 0-.258.079-.426.16-.625l.02-.039a.44.44 0 0 0-.239-.621.5.5 0 0 0-.586.207l-.023.035c-.32.61-.461 1.25-.461 1.914 0 1.621 1.156 2.457 2.277 2.813-.258 1.121-.297 2.898.156 4.355-.66.196-1.633.367-2.664.367-1.395 0-2.61-.316-2.61-1.355 0-.184.055-.383.18-.586.113-.188.168-.34.168-.508 0-.469-.473-.832-1.047-.832-.387 0-.766.184-1 .59l-.008.015a.511.511 0 0 0 .196.723c.09.043.191.066.293.066.226 0 .437-.097.55-.261.055.086.059.207.059.297 0 1.254 1.426 2.059 3.383 2.059.73 0 1.457-.101 2.148-.281.824 1.18 2.508 1.586 4.418 1.586 1.91 0 3.594-.406 4.418-1.586.691.18 1.418.281 2.148.281 1.957 0 3.383-.805 3.383-2.059 0-.09-.004-.211.051-.297.109.164.324.262.551.262.101 0 .203-.023.293-.066a.511.511 0 0 0 .195-.723l-.008-.016c-.234-.406-.613-.59-1-.59-.574 0-1.047.363-1.047.832 0 .168.055.32.168.508.125.203.18.402.18.586 0 1.039-1.215 1.355-2.61 1.355-1.03 0-2.004-.172-2.664-.367.453-1.457.414-3.234.156-4.355 1.121-.355 2.277-1.191 2.277-2.813 0-.664-.14-1.305-.461-1.914l-.023-.035a.5.5 0 0 0-.586-.207.44.44 0 0 0-.238.621l.02.039c.081.2.16.367.16.625 0 .613-.75.797-1.266.797-.8 0-1.258-.523-1.258-1.402V6.742C16.946 3.947 14.957 2 12.004 2z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    )}
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
              <div className="overflow-hidden rounded-md aspect-[4/5] w-full max-w-[260px] bg-background shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] relative">
                <div className="absolute inset-3 border border-primary/5 z-20 pointer-events-none"></div>

                {partner.image ? (
                  <img
                    src={partner.image}
                    alt={t(partner.nameKey)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-secondary/40 flex items-center justify-center relative">
                    <span className="font-serif text-5xl text-primary/10 italic">TLF</span>
                  </div>
                )}
              </div>
              <div className="text-center mt-6">
                <p className="text-xl font-semibold text-primary mb-1">{t(partner.nameKey)}</p>
                <p className="text-sm uppercase tracking-wide text-accent">{t(partner.titleKey)}</p>
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
                          className="w-full h-full object-cover transition-all duration-500"
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
                      {assistant.image && (
                        <div className="mb-3 w-20 h-20 rounded-full overflow-hidden border border-border/60 shadow-sm">
                          <img
                            src={assistant.image}
                            alt={t(assistant.nameKey)}
                            className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                          />
                        </div>
                      )}
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
