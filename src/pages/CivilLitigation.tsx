import React from 'react';
import ServicePageLayout from '@/components/ServicePageLayout';
import civilLitigationImage from '@/assets/services/civil-litigation.jpg';

const CivilLitigation = () => {
    return (
        <ServicePageLayout
            slug="civil-litigation"
            image={civilLitigationImage}
            title={{
                en: 'Civil Litigation & Dispute Resolution',
                ar: 'القضايا المدنية وحل النزاعات'
            }}
            overview={{
                en: 'We represent clients in civil disputes with a strategic, results-driven approach, ensuring strong advocacy before Kuwaiti courts.',
                ar: 'نقدم تمثيلًا قانونيًا محترفًا في القضايا المدنية، مع خبرة واسعة في التقاضي أمام المحاكم الكويتية.'
            }}
            handles={{
                en: [
                    'Contract disputes',
                    'Property and real estate cases',
                    'Financial claims',
                    'Commercial disagreements'
                ],
                ar: [
                    'النزاعات التعاقدية',
                    'القضايا العقارية',
                    'المطالبات المالية',
                    'النزاعات التجارية'
                ]
            }}
            seoTitle={{
                en: 'Civil Litigation Lawyers Kuwait | Dispute Resolution',
                ar: 'محامي قضايا مدنية وحل النزاعات | الكويت'
            }}
            seoDescription={{
                en: 'Top civil litigation lawyers in Kuwait. We handle contract disputes, property cases, and financial claims with a results-driven approach.',
                ar: 'أفضل محامي قضايا مدنية في الكويت. نتعامل مع النزاعات التعاقدية والقضايا العقارية والمطالبات المالية بنهج استراتيجي.'
            }}
        />
    );
};

export default CivilLitigation;
