import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const seoData = {
    en: {
        title: 'Tasseel Law Firm | Lawyers & Legal Services in Kuwait',
        description: 'Tasseel Law Firm is a professional law firm in Kuwait established in 2004, providing legal services in labor, civil, family, and criminal cases.',
        ogTitle: 'Tasseel Law Firm | Lawyers & Legal Services in Kuwait',
        ogDescription: 'Professional legal services in Kuwait since 2004. Labor, civil, family, and criminal law.',
    },
    ar: {
        title: 'مكتب تأصيل للمحاماة | محامون وخدمات قانونية في الكويت',
        description: 'مكتب تأصيل للمحاماة في الكويت، تأسس عام 2004، ويقدم خدمات قانونية متخصصة في القضايا العمالية والمدنية والأسرية والجنائية.',
        ogTitle: 'مكتب تأصيل للمحاماة | محامون وخدمات قانونية في الكويت',
        ogDescription: 'خدمات قانونية متخصصة في الكويت منذ عام ٢٠٠٤. القضايا العمالية والمدنية والأسرية والجنائية.',
    },
};

export const useSEO = () => {
    const { language } = useLanguage();

    useEffect(() => {
        const data = seoData[language];

        // Update document title
        document.title = data.title;

        // Update html lang and dir
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';

        // Update meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', data.description);
        }

        // Update OG tags
        const updateMeta = (property: string, content: string) => {
            let meta = document.querySelector(`meta[property="${property}"]`);
            if (meta) {
                meta.setAttribute('content', content);
            }
        };

        updateMeta('og:title', data.ogTitle);
        updateMeta('og:description', data.ogDescription);
        updateMeta('og:locale', language === 'ar' ? 'ar_KW' : 'en_US');

    }, [language]);
};

export default useSEO;
