import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
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
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary mb-6 tracking-tight">
            {t('contact.title')}
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4 tracking-tight">
                {t('contact.location')}
              </h3>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">{t('contact.subtitle')}</p>
            </div>

            <div className="space-y-12 p-10 bg-background/50 rounded-sm border-none backdrop-blur-sm">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-bold text-primary text-lg mb-1">{t('contact.city')}</p>
                  <p className="text-muted-foreground leading-relaxed text-lg font-light">{t('contact.address')}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-bold text-primary text-lg mb-1">{t('contact.phone')}</p>
                  <p className="text-muted-foreground text-lg font-light" dir="ltr">+965 9955 3299</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-bold text-primary text-lg mb-1">{t('contact.email')}</p>
                  <p className="text-muted-foreground text-lg font-light">info@tasseel-law.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-12 rounded-sm border-none shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="space-y-10">
                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                      {t('contact.name')}
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 bg-transparent border-b border-border rounded-none px-0 focus:border-accent focus:ring-0 shadow-none transition-colors border-t-0 border-x-0 outline-none hover:border-accent/50"
                      placeholder=""
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                      {t('contact.phone')}
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="h-12 bg-transparent border-b border-border rounded-none px-0 focus:border-accent focus:ring-0 shadow-none transition-colors border-t-0 border-x-0 outline-none hover:border-accent/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    {t('contact.email')}
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 bg-transparent border-b border-border rounded-none px-0 focus:border-accent focus:ring-0 shadow-none transition-colors border-t-0 border-x-0 outline-none hover:border-accent/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    {t('contact.message')}
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="resize-none bg-transparent border-b border-border rounded-none px-0 focus:border-accent focus:ring-0 shadow-none transition-colors border-t-0 border-x-0 outline-none hover:border-accent/50 p-0"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-16 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg shadow-lg mt-6 tracking-[0.2em] uppercase rounded-sm"
              >
                {t('contact.submit')}
                <Send className="h-5 w-5 ms-3" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
