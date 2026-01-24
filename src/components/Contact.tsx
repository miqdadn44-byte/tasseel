import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Lock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: language === 'ar' ? 'تم إرسال الرسالة' : 'Message Sent',
      description: language === 'ar' ? 'سنتواصل معكم قريباً' : 'We will contact you shortly.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-secondary/40 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-6 flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-accent/40"></span>
            {t('contact.subtitle')}
            <span className="w-8 h-px bg-accent/40"></span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6 tracking-tight">
            {t('contact.title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 max-w-6xl mx-auto items-start">
          {/* Contact Information */}
          <div className="space-y-16 py-4">
            <div>
              <h3 className="text-2xl font-serif font-medium text-primary mb-6 tracking-tight">
                {t('contact.location')}
              </h3>
              <p className="text-muted-foreground text-base font-light leading-relaxed max-w-md">
                We are available for consultations during regular business hours. Please schedule an appointment prior to visiting.
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-10 h-10 rounded-sm border border-primary/10 flex items-center justify-center flex-shrink-0 group-hover:border-accent transition-colors duration-500 bg-background shadow-sm">
                  <MapPin className="h-4 w-4 text-primary group-hover:text-accent transition-colors duration-500" />
                </div>
                <div>
                  <p className="font-bold text-primary text-[10px] mb-1.5 tracking-[0.2em] uppercase opacity-60">{t('contact.address')}</p>
                  <p className="text-muted-foreground text-lg font-serif">{t('contact.city')}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-10 h-10 rounded-sm border border-primary/10 flex items-center justify-center flex-shrink-0 group-hover:border-accent transition-colors duration-500 bg-background shadow-sm">
                  <Phone className="h-4 w-4 text-primary group-hover:text-accent transition-colors duration-500" />
                </div>
                <div>
                  <p className="font-bold text-primary text-[10px] mb-1.5 tracking-[0.2em] uppercase opacity-60">{t('contact.phone')}</p>
                  <p className="text-muted-foreground text-lg font-serif font-light" dir="ltr">+965 9955 3299</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-10 h-10 rounded-sm border border-primary/10 flex items-center justify-center flex-shrink-0 group-hover:border-accent transition-colors duration-500 bg-background shadow-sm">
                  <Mail className="h-4 w-4 text-primary group-hover:text-accent transition-colors duration-500" />
                </div>
                <div>
                  <p className="font-bold text-primary text-[10px] mb-1.5 tracking-[0.2em] uppercase opacity-60">{t('contact.email')}</p>
                  <p className="text-muted-foreground text-lg font-serif font-light">info@tasseel-law.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - "Paper" Look */}
          <div className="bg-background p-10 lg:p-12 border border-border/60 rounded-sm shadow-xl relative">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-secondary/50 to-transparent pointer-events-none opacity-50"></div>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3 group">
                    <label className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest group-focus-within:text-accent transition-colors">
                      {t('contact.name')}
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-10 bg-transparent border-b border-border rounded-none px-0 focus:border-accent focus:ring-0 shadow-none transition-all border-t-0 border-x-0 outline-none text-base font-serif placeholder:font-sans"
                      placeholder=""
                    />
                  </div>
                  <div className="space-y-3 group">
                    <label className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest group-focus-within:text-accent transition-colors">
                      {t('contact.phone')}
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="h-10 bg-transparent border-b border-border rounded-none px-0 focus:border-accent focus:ring-0 shadow-none transition-all border-t-0 border-x-0 outline-none text-base font-serif placeholder:font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-3 group">
                  <label className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest group-focus-within:text-accent transition-colors">
                    {t('contact.email')}
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-10 bg-transparent border-b border-border rounded-none px-0 focus:border-accent focus:ring-0 shadow-none transition-all border-t-0 border-x-0 outline-none text-base font-serif placeholder:font-sans"
                  />
                </div>

                <div className="space-y-3 group">
                  <label className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest group-focus-within:text-accent transition-colors">
                    {t('contact.message')}
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="resize-none bg-transparent border-b border-border rounded-none px-0 focus:border-accent focus:ring-0 shadow-none transition-all border-t-0 border-x-0 outline-none text-base font-serif placeholder:font-sans p-0 min-h-[80px]"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  type="submit"
                  className="w-full h-14 bg-primary hover:bg-primary/95 text-primary-foreground font-semibold text-sm shadow-lg mt-2 tracking-[0.2em] uppercase rounded-sm border border-transparent hover:border-primary/20 transition-all hover:-translate-y-0.5"
                  disabled={!formData.name || !formData.email || !formData.message}
                >
                  {t('contact.submit')}
                  <Send className="h-3.5 w-3.5 ms-4 rtl:rotate-180 opacity-70" />
                </Button>

                <p className="text-[10px] text-center text-muted-foreground/50 flex items-center justify-center gap-1.5 uppercase tracking-widest font-medium">
                  <Lock className="h-3 w-3" />
                  {language === 'ar' ? 'جميع المراسلات سرية تماماً' : 'All communications are strictly confidential'}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
