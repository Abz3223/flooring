import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface PageProps {
  params: { slug: string }
}

// No posts exist yet — generateStaticParams returns empty array
export async function generateStaticParams() {
  return []
}

export async function generateMetadata({ params: _params }: PageProps): Promise<Metadata> {
  return {
    title: 'Blog Post Not Found',
  }
}

export default function BlogPostPage({ params: _params }: PageProps) {
  // All blog slugs return 404 until posts are added
  notFound()
}
