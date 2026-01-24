import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';

const CriminalDefense = () => {
    return (
        <ServicePageLayout
            slug="criminal-defense"
            title={{
                en: 'Criminal Defense & Legal Protection',
                ar: 'الدفاع الجنائي والتمثيل القانوني'
            }}
            overview={{
                en: 'We provide strong criminal defense representation to protect our clients’ rights at all stages of investigation and trial.',
                ar: 'نوفر دفاعًا جنائيًا قويًا لحماية حقوق موكلينا في جميع مراحل التحقيق والمحاكمة.'
            }}
            handles={{
                en: [
                    'Criminal charges',
                    'Public prosecution cases',
                    'Appeals and defense strategy'
                ],
                ar: [
                    'التهم الجنائية',
                    'قضايا النيابة العامة',
                    'الاستئناف واستراتيجية الدفاع'
                ]
            }}
            seoTitle={{
                en: 'Criminal Defense Lawyers Kuwait | Legal Protection',
                ar: 'محامي جنايات الكويت | دفاع جنائي وتمثيل قانوني'
            }}
            seoDescription={{
                en: 'Aggressive criminal defense representation in Kuwait. Protecting your rights in investigation, trial, and appeals.',
                ar: 'دفاع جنائي قوي في الكويت. حماية حقوقك في التحقيق والمحاكمة والاستئناف.'
            }}
        />
    );
};

export default CriminalDefense;
