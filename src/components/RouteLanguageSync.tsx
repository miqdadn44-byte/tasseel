import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const RouteLanguageSync = () => {
    const location = useLocation();
    const { language, setLanguage } = useLanguage();

    useEffect(() => {
        // If path starts with /ar/, force Arabic
        if (location.pathname.startsWith('/ar/')) {
            if (language !== 'ar') {
                setLanguage('ar');
            }
        }
        // If path implies English (not /ar/) but we are in Arabic, 
        // we might want to switch back ONLY if it's an explicit English route (optional).
        // But usually for bilingual sites, /ar/ enforces AR, and root/others enforce EN 
        // OR we just stick to what the user chose unless the URL explicitly dictates it.
        // The requirement says: "If language === ar -> Arabic route".
        // So if I go to /services/labor-law, I expect English.
        else if (location.pathname.startsWith('/services/')) {
            if (language !== 'en') {
                setLanguage('en');
            }
        }
    }, [location.pathname, language, setLanguage]);

    return null;
};

export default RouteLanguageSync;
