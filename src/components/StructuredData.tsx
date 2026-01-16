import { useLanguage } from '@/contexts/LanguageContext';

const StructuredData = () => {
    const { language } = useLanguage();

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        '@id': 'https://tasseellaw.com/#organization',
        name: language === 'ar' ? 'مكتب تأصيل للمحاماة' : 'Tasseel Law Firm',
        alternateName: language === 'ar' ? 'Tasseel Law Firm' : 'مكتب تأصيل للمحاماة',
        url: 'https://tasseellaw.com',
        logo: 'https://tasseellaw.com/logo.png',
        image: 'https://tasseellaw.com/og-image.jpg',
        description: language === 'ar'
            ? 'مكتب تأصيل للمحاماة في الكويت، تأسس عام 2004، ويقدم خدمات قانونية متخصصة.'
            : 'Tasseel Law Firm is a professional law firm in Kuwait established in 2004.',
        foundingDate: '2004',
        telephone: '+96599553299',
        email: 'info@tasseellaw.com',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Al-Fahaheel',
            addressLocality: 'Fahaheel',
            addressRegion: 'Ahmadi Governorate',
            addressCountry: {
                '@type': 'Country',
                name: 'Kuwait',
            },
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 29.0852,
            longitude: 48.1300,
        },
        areaServed: {
            '@type': 'Country',
            name: 'Kuwait',
        },
        availableLanguage: [
            {
                '@type': 'Language',
                name: 'Arabic',
                alternateName: 'ar',
            },
            {
                '@type': 'Language',
                name: 'English',
                alternateName: 'en',
            },
        ],
        knowsLanguage: ['ar', 'en'],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: language === 'ar' ? 'الخدمات القانونية' : 'Legal Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: language === 'ar' ? 'القضايا العمالية' : 'Labor Law',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: language === 'ar' ? 'القضايا المدنية' : 'Civil Cases',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: language === 'ar' ? 'الأحوال الشخصية' : 'Family Law',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: language === 'ar' ? 'القضايا الجنائية' : 'Criminal Cases',
                    },
                },
            ],
        },
        priceRange: '$$',
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
            opens: '09:00',
            closes: '17:00',
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default StructuredData;
