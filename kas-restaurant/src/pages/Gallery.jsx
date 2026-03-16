const images = [
  '/images/gallery1.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
  '/images/gallery4.jpg',
  '/images/gallery5.jpg',
  '/images/gallery6.jpg',
]

export default function Gallery() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-32 pb-24">
      <h1 className="font-heading text-5xl text-gold text-center mb-4">Gallery</h1>
      <p className="text-gray-400 text-center mb-16 tracking-wider uppercase text-sm">Galerie</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`KAS Gallery ${i + 1}`}
            className="w-full h-64 object-cover rounded-lg hover:scale-105 transition duration-300"
          />
        ))}
      </div>
    </div>
  )
}