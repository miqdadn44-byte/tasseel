import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.team': 'Team',
    'nav.contact': 'Contact',

    // Hero
    'hero.badge': 'Established 2004',
    'hero.title': 'Tasseel Law Firm',
    'hero.subheading': 'Trusted Legal Representation in Kuwait Since 2004',
    'hero.description': 'A professional legal practice dedicated to providing reliable legal representation and counsel across all areas of law, guided by integrity, discretion, and deep knowledge of Kuwaiti law.',
    'hero.cta': 'Contact Us',
    'hero.secondary_cta': 'View Legal Services',
    'hero.practice_areas': 'Labor Law • Civil Litigation • Family Law • Criminal Defense',
    'hero.trust': 'Serving clients across Kuwait with professionalism since 2004',
    'hero.confidential': 'Confidential consultation available',

    // About
    'about.title': 'About',
    'about.description': 'Tasseel Law Firm was established in 2004 with a commitment to upholding the principles of justice and providing sound legal representation. With over two decades of experience, we serve clients across Kuwait with professionalism and dedication.',
    'about.mission': 'Our firm operates with integrity, discretion, and a deep understanding of Kuwaiti law. We work diligently to protect our clients\' rights and interests in all legal matters.',
    'about.established': 'Established',
    'about.year': '2004',

    // Services
    'services.label': 'Areas of Practice',
    'services.title': 'Legal Services',
    'services.labor': 'Labor Cases',
    'services.labor.desc': 'Legal representation in employment disputes, worker rights, and labor law matters.',
    'services.civil': 'Civil Cases',
    'services.civil.desc': 'Handling civil litigation, contractual disputes, and property matters.',
    'services.family': 'Family Cases',
    'services.family.desc': 'Guidance in family law matters including divorce, custody, and inheritance.',
    'services.criminal': 'Criminal Cases',
    'services.criminal.desc': 'Defense representation in criminal proceedings and legal consultations.',
    'services.learn_more': 'Learn more',
    'services.cta': 'View All Services',

    // Team
    'team.title': 'Our Team',
    'team.owners': 'Firm Owners',
    'team.partner': 'Working Partner',
    'team.consultants': 'Legal Consultants',
    'team.assistants': 'Lawyer Assistants',

    'team.owner1': 'Abdullah K. Al-Foqom',
    'team.owner1.title': 'Founding Partner',
    'team.owner2': 'Mohamed  Alaazmy',
    'team.owner2.title': 'Founding Partner',
    'team.partner1': 'Omar Alazmi',
    'team.partner1.title': 'Working Partner',

    'team.consultant1': 'Al-Mustashar Abu Al-Hasan Muhammad',
    'team.consultant1.title': 'Legal Consultant',

    'team.consultant2': 'Mohamed Abdelaziz Ismail Gaballa',
    'team.consultant2.title': 'Legal Consultant',

    'team.assistant1': 'Adel Nasser Bekhit Ahmed',
    'team.assistant1.title': 'Lawyer Assistant',
    'team.assistant2': 'Hani Mostafa Mohamed Moustafa',
    'team.assistant2.title': 'Manager',
    'team.assistant3': 'Eslam Diaa Loutfi Delghani Elmowfi',
    'team.assistant3.title': 'Lawyer Assistant',
    'team.assistant4': 'Mohamed Samy Tawfik Mohamed Elsadek',
    'team.assistant4.title': 'Lawyer Assistant',
    'team.assistant5': 'Yousef Naser Aoraibi Gabur',
    'team.assistant5.title': 'Lawyer Assistant',

    'team.consultant': 'Legal Consultant',
    'team.assistant': 'Lawyer Assistant',
    'team.tba': 'To be announced',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in Touch',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.message': 'Your Message',
    'contact.submit': 'Send Message',
    'contact.location': 'Office Location',
    'contact.address': 'Al-Fahaheel, Block 8, Street 43, Building 7, Floor 2',
    'contact.city': 'Al-Fahaheel, Kuwait',

    // Footer
    'footer.description': 'Tasseel Law Firm provides professional legal services with integrity and dedication to justice.',
    'footer.quicklinks': 'Quick Links',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rights': 'All rights reserved',

    // FAB
    'fab.whatsapp_message': 'Hello, I would like to request a legal consultation.',
    'fab.call_label': 'Call Us',
    'fab.whatsapp_label': 'WhatsApp Us',

    // Social
    'footer.social.instagram': 'Tasseel Law Firm on Instagram',
    'footer.social.facebook': 'Tasseel Law Firm on Facebook',
    'footer.social.linkedin': 'Tasseel Law Firm on LinkedIn',
    'footer.social.twitter': 'Tasseel Law Firm on Twitter',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'عن المكتب',
    'nav.services': 'الخدمات',
    'nav.team': 'فريق العمل',
    'nav.contact': 'اتصل بنا',

    // Hero
    'hero.badge': 'تأسس عام ٢٠٠٤',
    'hero.title': 'مكتب تأصيل للمحاماة',
    'hero.subheading': 'تمثيل قانوني موثوق في دولة الكويت منذ عام ٢٠٠٤',
    'hero.description': 'مكتب محاماة متخصص يلتزم بتقديم التمثيل القانوني السليم والاستشارات القانونية الدقيقة في مختلف مجالات القانون، وفق أعلى معايير النزاهة والاحتراف، وبفهم عميق للقانون الكويتي.',
    'hero.cta': 'تواصل معنا',
    'hero.secondary_cta': 'الخدمات القانونية',
    'hero.practice_areas': 'قضايا العمال • القضايا المدنية • قضايا الأسرة • القضايا الجزائية',
    'hero.trust': 'نخدم عملاءنا في مختلف أنحاء دولة الكويت منذ عام ٢٠٠٤',
    'hero.confidential': 'استشارة قانونية بسرية تامة',

    // About
    'about.title': 'عن المكتب',
    'about.description': 'تأسس مكتب تأصيل للمحاماة عام ٢٠٠٤ بالتزام راسخ بمبادئ العدالة وتقديم التمثيل القانوني السليم. بخبرة تتجاوز عقدين من الزمن، نخدم موكلينا في جميع أنحاء الكويت بمهنية وتفانٍ.',
    'about.mission': 'يعمل مكتبنا بنزاهة وسرية وفهم عميق للقانون الكويتي. نعمل بجد لحماية حقوق موكلينا ومصالحهم في جميع الشؤون القانونية.',
    'about.established': 'تاريخ التأسيس',
    'about.year': '٢٠٠٤',

    // Services
    'services.label': 'مجالات الممارسة',
    'services.title': 'الخدمات القانونية',
    'services.labor': 'قضايا العمال',
    'services.labor.desc': 'التمثيل القانوني في منازعات العمل وحقوق العمال ومسائل قانون العمل.',
    'services.civil': 'القضايا المدنية',
    'services.civil.desc': 'معالجة الدعاوى المدنية والنزاعات التعاقدية والمسائل العقارية.',
    'services.family': 'قضايا الأسرة',
    'services.family.desc': 'الإرشاد في مسائل الأحوال الشخصية بما في ذلك الطلاق والحضانة والميراث.',
    'services.criminal': 'القضايا الجزائية',
    'services.criminal.desc': 'الدفاع في الإجراءات الجزائية والاستشارات القانونية.',
    'services.learn_more': 'اقرأ المزيد',
    'services.cta': 'عرض جميع الخدمات',

    // Team
    'team.title': 'فريق العمل',
    'team.owners': 'ملاك المكتب',
    'team.partner': 'الشريك العامل',
    'team.consultants': 'المستشارون القانونيون',
    'team.assistants': 'مساعدو المحامين',

    'team.owner1': 'عبدالله خلف الفقم',
    'team.owner1.title': 'الشريك المؤسس',
    'team.owner2': 'محمد فلاح   العازمي',
    'team.owner2.title': 'الشريك المؤسس',
    'team.partner1': 'عمر فلاح حشر الشقراء العازمي',
    'team.partner1.title': 'الشريك العامل',

    'team.consultant1': ' المستشار ابو الحسن محمد',
    'team.consultant1.title': 'مستشار قانوني',

    'team.consultant2': 'محمد عبدالعزيز إسماعيل جاب الله',
    'team.consultant2.title': 'مستشار قانوني',

    'team.assistant1': 'عادل ناصر بخيت أحمد',
    'team.assistant1.title': 'مساعد محامي',
    'team.assistant2': 'هاني مصطفى محمد مصطفى',
    'team.assistant2.title': 'مدير مكتب',
    'team.assistant3': 'إسلام ضياء لطفي الدلغاني الموفي',
    'team.assistant3.title': 'مساعد محامي',
    'team.assistant4': 'محمد سامي توفيق محمد الصادق',
    'team.assistant4.title': 'مساعد محامي',
    'team.assistant5': 'يوسف ناصر عريبي جبر',
    'team.assistant5.title': 'مساعد محامي',

    'team.consultant': 'مستشار قانوني',
    'team.assistant': 'مساعد محامي',
    'team.tba': 'سيُعلن لاحقاً',

    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'نحن في خدمتكم',
    'contact.name': 'الاسم الكامل',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'رقم الهاتف',
    'contact.message': 'رسالتكم',
    'contact.submit': 'إرسال الرسالة',
    'contact.location': 'موقع المكتب',
    'contact.address': 'الفحاحيل، قطعة ٨، شارع ٤٣، مبنى ٧، الطابق الثاني',
    'contact.city': 'الفحاحيل، الكويت',

    // Footer
    'footer.description': 'مكتب تأصيل للمحاماة يقدم خدمات قانونية متخصصة بنزاهة والتزام بتحقيق العدالة.',
    'footer.quicklinks': 'روابط سريعة',
    'footer.legal': 'قانوني',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.rights': 'جميع الحقوق محفوظة',

    // FAB
    'fab.whatsapp_message': 'مرحباً، أود طلب استشارة قانونية.',
    'fab.call_label': 'اتصل بنا',
    'fab.whatsapp_label': 'تواصل عبر واتساب',

    // Social
    'footer.social.instagram': 'مكتب تأصيل للمحاماة على إنستغرام',
    'footer.social.facebook': 'مكتب تأصيل للمحاماة على فيسبوك',
    'footer.social.linkedin': 'مكتب تأصيل للمحاماة على لينكد إن',
    'footer.social.twitter': 'مكتب تأصيل للمحاماة على تويتر',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.setAttribute('lang', language);
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
