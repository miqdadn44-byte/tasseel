import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const useCountUp = (end: number, start: number = 0, duration: number = 2000) => {
    const [count, setCount] = useState(start);
    const [isCounting, setIsCounting] = useState(false);

    useEffect(() => {
        if (!isCounting) return;

        let startTime: number | null = null;
        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            const currentCount = Math.floor(start + (end - start) * percentage);
            setCount(currentCount);

            if (percentage < 1) {
                requestAnimationFrame(animate);
            } else {
                setIsCounting(false);
            }
        };

        requestAnimationFrame(animate);
    }, [isCounting, end, start, duration]);

    return { count, startCounting: () => setIsCounting(true) };
};

const Metrics = () => {
    const { t, language } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const isAr = language === 'ar';

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const metrics = [
        { value: 5000, prefix: isAr ? '+' : '', suffix: isAr ? '' : '+', labelKey: 'metrics.cases.label' },
        { value: 20, prefix: isAr ? '+' : '', suffix: isAr ? '' : '+', labelKey: 'metrics.experience.label' },
        { value: 1000, prefix: isAr ? '+' : '', suffix: isAr ? '' : '+', labelKey: 'metrics.clients.label' },
        { value: 4, prefix: '', suffix: '', labelKey: 'metrics.practice.label' },
    ];

    return (
        <section
            ref={sectionRef}
            className="py-16 bg-primary text-primary-foreground relative z-10 shadow-lg"
        >
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-primary-foreground/10 rtl:divide-x-reverse">
                    {metrics.map((metric, idx) => (
                        <MetricItem
                            key={idx}
                            metric={metric}
                            isVisible={isVisible}
                            t={t}
                            isAr={isAr}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const MetricItem = ({ metric, isVisible, t, isAr }: { metric: any, isVisible: boolean, t: any, isAr: boolean }) => {
    const { count, startCounting } = useCountUp(metric.value, 0, 2000);

    useEffect(() => {
        if (isVisible) {
            startCounting();
        }
    }, [isVisible]);

    return (
        <div className="text-center px-4 flex flex-col items-center justify-center space-y-3 py-4 md:py-0">
            <div className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight">
                <span dir={isAr ? "ltr" : "auto"}>
                    {metric.prefix}{count}{metric.suffix}
                </span>
            </div>
            <div className="text-xs md:text-sm uppercase tracking-wider text-primary-foreground/80 font-medium">
                {t(metric.labelKey)}
            </div>
        </div>
    );
};

export default Metrics;
