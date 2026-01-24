import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';

const FamilyLaw = () => {
    return (
        <ServicePageLayout
            slug="family-law"
            title={{
                en: 'Family Law & Personal Status Matters',
                ar: 'قضايا الأحوال الشخصية والأسرة'
            }}
            overview={{
                en: 'Our firm handles sensitive family matters with discretion, respect, and a deep understanding of Kuwaiti personal status laws.',
                ar: 'نتعامل مع قضايا الأسرة الحساسة بسرية واحترام وفهم عميق لقوانين الأحوال الشخصية الكويتية.'
            }}
            handles={{
                en: [
                    'Divorce cases',
                    'Custody and visitation',
                    'Alimony and financial rights',
                    'Inheritance disputes'
                ],
                ar: [
                    'قضايا الطلاق',
                    'الحضانة والرؤية',
                    'النفقة والحقوق المالية',
                    'نزاعات الميراث'
                ]
            }}
            seoTitle={{
                en: 'Family Law Experts Kuwait | Divorce & Custody Lawyers',
                ar: 'محامي قضايا أسرة وأحوال شخصية الكويت | طلاق وحضانة'
            }}
            seoDescription={{
                en: 'Compassionate family law representation in Kuwait. Experts in divorce, custody, alimony, and inheritance disputes.',
                ar: 'تمثيل قانوني متخصص في قضايا الأسرة في الكويت. خبراء في الطلاق والحضانة والنفقة والميراث.'
            }}
        />
    );
};

export default FamilyLaw;
