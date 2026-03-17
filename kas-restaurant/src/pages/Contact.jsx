export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-24">
      <h1 className="font-heading text-5xl text-gold text-center mb-4">Contact</h1>
      <p className="text-gray-400 text-center mb-16 tracking-wider uppercase text-sm">Nous Trouver</p>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Info */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
          <h3 className="text-gold font-heading text-xl">Address — Adresse</h3>

        {/* Location 1 */}
        <div className="flex items-start gap-3">
        <div className="mt-1 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            <circle cx="12" cy="9" r="2.5"/>
        </svg>
        </div>

        <div>
            <p className="text-white text-sm font-medium">Aerovillage Talatamaty</p>
            <p className="text-gray-400 text-sm">Antananarivo</p>
        </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 ml-11" />

        {/* Location 2 */}
        <div className="flex items-start gap-3">
        <div className="mt-1 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gold">
             <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
             <circle cx="12" cy="9" r="2.5"/>
        </svg>
        </div>
        <div>
             <p className="text-white text-sm font-medium">Imerinafovoany</p>
             <p className="text-gray-400 text-sm">Next to Vitafoam · Antananarivo</p>
             </div>
          </div>
        </div>
          <div>
            <h3 className="text-gold font-heading text-xl mb-2">Opening Hours — Horaires</h3>
            <div className="text-gray-400 flex flex-col gap-1 text-sm">
              <p>Monday – Saturday: 08:30 – 20:00</p>
              <p>Sunday: 08:30 – 15:00</p>
            </div>
          </div>
          <div>
            <h3 className="text-gold font-heading text-xl mb-2">Contact</h3>
            <p className="text-gray-400 text-sm">📞 +261 34 92 767 27</p>
            <p className="text-gray-400 text-sm">✉️ kaskoreanrestaurant@gmail.com</p>
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