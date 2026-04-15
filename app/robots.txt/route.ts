import { NextResponse } from 'next/server'

export async function GET() {
  const content = `User-agent: *
Allow: /

Sitemap: https://flooringinstallerstoronto.com/sitemap.xml
`

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
