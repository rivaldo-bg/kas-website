import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        className="h-screen flex flex-col justify-center items-center text-center px-6"
        style={{
          backgroundImage: 'url(/images/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-black/60 absolute inset-0" />
        <div className="relative z-10">
          <p className="text-gold tracking-[0.3em] uppercase text-sm mb-4">Korean Restaurant</p>
          <h1 className="font-heading text-6xl md:text-8xl font-bold text-white mb-6">KAS</h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl">
            Authentic Korean flavors in the heart of Madagascar
          </p>
          <Link
            to="/menu"
            className="bg-gold text-dark px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-yellow-400 transition"
          >
            Discover our Menu
          </Link>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-12 text-center">
        {[
          { title: 'Authentic', desc: 'Traditional Korean recipes prepared with genuine ingredients' },
          { title: 'Fresh', desc: 'Every dish is made fresh to order, every single day' },
          { title: 'Welcoming', desc: 'A warm atmosphere for families, friends and food lovers' },
        ].map(item => (
          <div key={item.title}>
            <h3 className="font-heading text-gold text-2xl mb-3">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  )
}