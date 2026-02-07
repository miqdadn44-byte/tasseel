import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import laborLawImage from '@/assets/services/labor-law.jpg';

const LaborLaw = () => {
    return (
        <ServicePageLayout
            slug="labor-law"
            image={laborLawImage}
            title={{
                en: 'Labor Law Representation in Kuwait',
                ar: 'قضايا قانون العمل في دولة الكويت'
            }}
            overview={{
                en: 'Tasseel Law Firm provides professional legal representation in labor and employment matters, protecting the rights of both employees and employers in accordance with Kuwaiti labor law.',
                ar: 'يقدم مكتب تاصيل للمحاماة خدمات قانونية متخصصة في قضايا العمل، مع الالتزام الكامل بقانون العمل الكويتي وحماية حقوق العمال وأصحاب العمل.'
            }}
            handles={{
                en: [
                    'Employment contract disputes',
                    'Unlawful termination cases',
                    'End-of-service benefits',
                    'Salary and overtime claims',
                    'Workplace violations'
                ],
                ar: [
                    'النزاعات العمالية',
                    'الفصل التعسفي',
                    'مستحقات نهاية الخدمة',
                    'المطالبات المالية',
                    'مخالفات بيئة العمل'
                ]
            }}
            seoTitle={{
                en: 'Labor Law & Employment Lawyers | Tasseel Law Firm',
                ar: 'محامي قضايا عمالية وقانون العمل | مكتب تاصيل للمحاماة'
            }}
            seoDescription={{
                en: 'Expert labor law representation in Kuwait for employees and employers. Handling contract disputes, termination, and benefits claims.',
                ar: 'محامون متخصصون في قضايا العمل في الكويت. تمثيل العمال وأصحاب العمل في النزاعات العمالية ومستحقات نهاية الخدمة.'
            }}
        />
    );
};

export default LaborLaw;
