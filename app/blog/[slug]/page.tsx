import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, ArrowLeft } from 'lucide-react';
import { BlogPost } from '@/types/database';
import { BLOG_POSTS } from '@/constants/blogPosts';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: 'Post Not Found' };
}

export default async function BlogPostPage({ params }: Props) {
  notFound();
}
