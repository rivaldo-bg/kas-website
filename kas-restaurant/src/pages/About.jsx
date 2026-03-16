export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-24">
      <h1 className="font-heading text-5xl text-gold text-center mb-4">About Us</h1>
      <p className="text-gray-400 text-center mb-16 tracking-wider uppercase text-sm">Notre Histoire</p>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <img src="/images/about.jpg" alt="KAS Restaurant" className="rounded-lg w-full object-cover h-80" />
        </div>
        <div>
          <h2 className="font-heading text-3xl text-white mb-6">Our Story</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            KAS Korean Restaurant was born from a passion for authentic Korean cuisine
            and a desire to share it with Madagascar.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Every dish we serve is crafted with care, using traditional recipes and
            the freshest ingredients to bring you a true taste of Korea.
          </p>
        </div>
      </div>
    </div>
  )
}