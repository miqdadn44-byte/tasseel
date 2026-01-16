import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FloatingActions = () => {
    const { t } = useLanguage();

    const phoneNumber = '+96599553299';
    const whatsappNumber = '96599553299';

    const whatsappMessage = encodeURIComponent(t('fab.whatsapp_message'));
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    const callLink = `tel:${phoneNumber}`;

    return (
        <div className="fixed bottom-8 end-8 z-50 flex flex-col gap-4 print:hidden">
            {/* WhatsApp Button */}
            <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('fab.whatsapp_label')}
                className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
                <MessageCircle className="w-7 h-7" />
            </a>

            {/* Call Button */}
            <a
                href={callLink}
                aria-label={t('fab.call_label')}
                className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
                <Phone className="w-6 h-6" />
            </a>
        </div>
    );
};

export default FloatingActions;
