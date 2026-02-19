import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Phone, ArrowRight, Home, TrendingUp, Award } from 'lucide-react';
import { AffluentNeighborhood } from '@/types/database';
import { CONTACT_INFO } from '@/constants/contact';
import { FLOORING_SERVICES } from '@/constants/services';
import { PROJECT_IMAGES } from '@/constants/images';
import ServiceCard from '@/components/ServiceCard';
import LeadForm from '@/components/LeadForm';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: 'Neighborhood Not Found' };
}

export default async function AffluentNeighborhoodPage({ params }: Props) {
  notFound();
}
