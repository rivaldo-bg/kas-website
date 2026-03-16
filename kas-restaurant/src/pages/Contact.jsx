export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-24">
      <h1 className="font-heading text-5xl text-gold text-center mb-4">Contact</h1>
      <p className="text-gray-400 text-center mb-16 tracking-wider uppercase text-sm">Nous Trouver</p>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Info */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-gold font-heading text-xl mb-2">Address — Adresse</h3>
            <p className="text-gray-400">Antananarivo, Madagascar</p>
          </div>
          <div>
            <h3 className="text-gold font-heading text-xl mb-2">Opening Hours — Horaires</h3>
            <div className="text-gray-400 flex flex-col gap-1 text-sm">
              <p>Monday – Friday: 11:00 – 22:00</p>
              <p>Saturday: 11:00 – 23:00</p>
              <p>Sunday: 12:00 – 21:00</p>
            </div>
          </div>
          <div>
            <h3 className="text-gold font-heading text-xl mb-2">Contact</h3>
            <p className="text-gray-400 text-sm">📞 +261 XX XX XXX XX</p>
            <p className="text-gray-400 text-sm">✉️ contact@kas-restaurant.mg</p>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="bg-card rounded-lg h-72 flex items-center justify-center border border-gold/20">
          <p className="text-gray-500 text-sm">Map coming soon</p>
        </div>
      </div>
    </div>
  )
}