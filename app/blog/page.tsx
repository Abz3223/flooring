import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Flooring Blog',
  description:
    'Flooring tips, guides, and inspiration from Toronto Flooring Installers. Hardwood, laminate, vinyl, tile, and carpet advice for GTA homeowners.',
}

const comingSoonTopics = [
  'How to Choose the Right Hardwood Species for Your Toronto Home',
  'Engineered vs Solid Hardwood: Which Is Better for GTA Condos?',
  'Luxury Vinyl Plank vs Laminate: A Complete Comparison',
  'How to Prepare Your Subfloor Before Installing New Flooring',
  'The True Cost of Flooring Installation in Toronto (2024 Guide)',
  'Tile vs LVP for Bathrooms and Kitchens: Pros and Cons',
  'Carpet vs Hardwood for Bedrooms: What Most Homeowners Get Wrong',
  'How to Maintain Hardwood Floors Through Toronto Winters',
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Flooring Blog</h1>
          <p className="text-xl text-gray-300">
            Practical guides and advice for GTA homeowners from the team at Toronto Flooring Installers.
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-brand-50 border border-brand-200 rounded-xl p-8 text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Blog Posts Coming Soon</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              We are building out our blog with in-depth guides on flooring selection, installation, maintenance, and cost planning for Toronto homeowners. Check back soon &mdash; or contact us directly with any flooring questions.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-block bg-brand-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-brand-700 transition-colors"
              >
                Ask Us a Question
              </Link>
            </div>
          </div>

          {/* Upcoming Topics */}
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Topics</h2>
          <div className="grid gap-4">
            {comingSoonTopics.map((topic) => (
              <div
                key={topic}
                className="bg-white border border-gray-200 rounded-lg px-6 py-4 flex items-start gap-3"
              >
                <div className="mt-1 w-2 h-2 bg-brand-500 rounded-full flex-shrink-0" />
                <p className="text-gray-700 font-medium">{topic}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Have a Flooring Question?</h3>
            <p className="text-gray-600 mb-4">
              While the blog is being built, you can reach us directly. Our team is happy to answer questions about product selection, pricing, installation timelines, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:6479050050"
                className="bg-brand-600 text-white font-semibold px-5 py-2.5 rounded-lg text-center hover:bg-brand-700 transition-colors"
              >
                Call (647) 905-0050
              </a>
              <Link
                href="/contact"
                className="border border-gray-300 text-gray-700 font-semibold px-5 py-2.5 rounded-lg text-center hover:bg-gray-100 transition-colors"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
