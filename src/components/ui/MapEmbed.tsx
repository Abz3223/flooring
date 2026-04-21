const MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY'

interface MapEmbedProps {
  query: string
  title?: string
  height?: number
}

export default function MapEmbed({ query, title = 'Map', height = 320 }: MapEmbedProps) {
  const src = `https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=${encodeURIComponent(query)}`

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
