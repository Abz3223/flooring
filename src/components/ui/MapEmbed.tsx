interface MapEmbedProps {
  query: string
  title?: string
  height?: number
}

// Uses Google Maps' keyless embed (the same iframe you get from "Share → Embed a map").
// No API key required, no billing setup. Slightly less polished than the API version
// but perfectly adequate for displaying a location on service area pages.
export default function MapEmbed({ query, title = 'Map', height = 320 }: MapEmbedProps) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`

  return (
    <div className="rounded-2xl overflow-hidden border border-stone-200">
      <iframe
        title={title}
        src={src}
        width="100%"
        height={height}
        style={{ border: 0, display: 'block' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
