import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Header';
import Footer from './Footer';

interface ServicePageLayoutProps {
    title: { en: string; ar: string };
    overview: { en: string; ar: string };
    handles: { en: string[]; ar: string[] };
    seoTitle: { en: string; ar: string };
    seoDescription: { en: string; ar: string };
    slug: string;
}

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({
    title,
    overview,
    handles,
    seoTitle,
    seoDescription
}) => {
    const { language, t } = useLanguage();
    const isRTL = language === 'ar';

    useEffect(() => {
        document.title = language === 'ar' ? seoTitle.ar : seoTitle.en;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', language === 'ar' ? seoDescription.ar : seoDescription.en);
        }
        window.scrollTo(0, 0);
    }, [language, seoTitle, seoDescription]);

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow">

                {/* Hero Section */}
                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-secondary/30">
                    <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

                    <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mx-auto">
                        <div className="max-w-4xl mx-auto text-center">
                            {/* Breadcrumb */}
                            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6 font-medium tracking-wide uppercase">
                                <Link to="/" className="hover:text-primary transition-colors">{t('nav.home')}</Link>
                                <span>/</span>
                                <span className="text-primary">{t('nav.services')}</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 font-serif">
                                {language === 'ar' ? title.ar : title.en}
                            </h1>
                            <div className="h-1 w-24 bg-primary mx-auto rounded-full mb-8" />
                        </div>
                    </div>
                </section>

                {/* Overview Section */}
                <section className="py-16 lg:py-24 bg-background">
                    <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-8 font-serif">{language === 'ar' ? 'نظرة عامة' : 'Overview'}</h2>
                            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                                {language === 'ar' ? overview.ar : overview.en}
                            </p>
                        </div>
                    </div>
                </section>

                {/* What We Handle */}
                <section className="py-16 lg:py-24 bg-secondary/20">
                    <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                        <div className="max-w-5xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className={`order-2 ${isRTL ? 'md:order-2' : 'md:order-1'}`}>
                                    <h2 className="text-3xl font-bold mb-8 font-serif">
                                        {language === 'ar' ? 'نطاق الخدمات' : 'What We Handle'}
                                    </h2>
                                    <ul className="space-y-4">
                                        {(language === 'ar' ? handles.ar : handles.en).map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary">
                                                    <CheckCircle2 className="w-5 h-5" />
                                                </div>
                                                <span className="text-lg text-foreground/80">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* Decorative / Visual Side */}
                                <div className={`order-1 ${isRTL ? 'md:order-1' : 'md:order-2'} flex justify-center`}>
                                    <div className="relative w-full max-w-md aspect-[4/5] bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/10 flex items-center justify-center p-8">
                                        <Scale className="w-32 h-32 text-primary/20" />
                                        <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,transparent)] dark:bg-grid-slate-800/50" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Tasseel */}
                <section className="py-16 lg:py-24 bg-background">
                    <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <h2 className="text-3xl font-bold mb-6 font-serif">
                                {language === 'ar' ? 'لماذا تختار تاصيل؟' : 'Why Choose Tasseel?'}
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                {language === 'ar'
                                    ? 'نقدّم خدماتنا وفق أعلى معايير الجودة والاحترافية، مع التركيز على مصلحة العميل أولاً.'
                                    : 'We provide our services according to the highest standards of quality and professionalism, focusing on the client\'s interest first.'}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            {[
                                {
                                    title: { en: "Expertise", ar: "خبرة واسعة" },
                                    desc: { en: "Deep understanding of Kuwaiti law.", ar: "فهم عميق للقانون الكويتي." }
                                },
                                {
                                    title: { en: "Integrity", ar: "النزاهة" },
                                    desc: { en: "Honest and transparent representation.", ar: "تمثيل صادق وشفاف." }
                                },
                                {
                                    title: { en: "Results", ar: "النتائج" },
                                    desc: { en: "Strategic approach to achieve goals.", ar: "نهج استراتيجي لتحقيق الأهداف." }
                                }
                            ].map((feature, idx) => (
                                <div key={idx} className="p-6 rounded-xl bg-card border shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold mb-3 font-serif">
                                        {language === 'ar' ? feature.title.ar : feature.title.en}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {language === 'ar' ? feature.desc.ar : feature.desc.en}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-primary text-primary-foreground">
                    <div className="container px-4 sm:px-6 lg:px-8 mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-8 font-serif">
                            {language === 'ar' ? 'هل تحتاج إلى مشورة قانونية؟' : 'Need Legal Advice?'}
                        </h2>
                        <p className="max-w-2xl mx-auto text-primary-foreground/90 text-xl mb-10 leading-relaxed">
                            {language === 'ar'
                                ? 'تواصل معنا اليوم للحصول على استشارة متخصصة لحماية حقوقك ومصالحك.'
                                : 'Contact us today for a specialized consultation to protect your rights and interests.'}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="text-primary font-bold text-lg h-14 px-8"
                                asChild
                            >
                                <Link to="/#contact">
                                    {language === 'ar' ? 'طلب استشارة' : 'Request Consultation'}
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ServicePageLayout;
