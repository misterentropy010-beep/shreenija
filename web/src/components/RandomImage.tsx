export default function RandomImage({
  query = 'city transport',
  className = '',
  alt = 'decorative image',
  width = 800,
  height = 480,
}: {
  query?: string
  className?: string
  alt?: string
  width?: number
  height?: number
}) {
  // Use Unsplash source for quick demo imagery. The URL will return a random image for the query.
  const src = `https://source.unsplash.com/${width}x${height}/?${encodeURIComponent(query)}`

  return (
    // eslint-disable-next-line jsx-a11y/img-redundant-alt
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`w-full h-auto object-cover rounded-md shadow-md ${className}`}
    />
  )
}
