import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDisorderData, disorders } from '../data';
import TreatClient from './TreatClient';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return disorders.map((disorder) => ({
        slug: disorder.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const disorder = getDisorderData(resolvedParams.slug);

    if (!disorder) {
        return {
            title: "Page Not Found",
        };
    }

    return {
        title: { absolute: disorder.seoTitle },
        description: disorder.metaDescription,
        alternates: { canonical: `/treatments/${disorder.slug}` },
        openGraph: {
            title: disorder.seoTitle,
            description: disorder.description,
            url: `/treatments/${disorder.slug}`,
            images: [
                {
                    url: "https://www.ivitalwellness.com/photos/iVital-Wellness-House.jpg",
                    width: 1200,
                    height: 630,
                    alt: disorder.title,
                },
            ],
        },
    };
}

export default async function DisorderPage({ params }: Props) {
    const resolvedParams = await params;
    const disorder = getDisorderData(resolvedParams.slug);

    if (!disorder) {
        notFound();
    }

    return <TreatClient disorder={disorder} />;
}
