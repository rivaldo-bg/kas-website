const categories = [
  {
    name: 'Starters — Entrées',
    items: [
      { name: 'Japchae', desc: 'Glass noodles with vegetables', price: '12 000 Ar' },
      { name: 'Pajeon', desc: 'Korean savory pancake', price: '10 000 Ar' },
      { name: 'Manduguk', desc: 'Korean dumpling soup', price: '11 000 Ar' },
    ],
  },
  {
    name: 'Main Dishes — Plats',
    items: [
      { name: 'Bibimbap', desc: 'Mixed rice with vegetables and egg', price: '18 000 Ar' },
      { name: 'Bulgogi', desc: 'Marinated grilled beef', price: '22 000 Ar' },
      { name: 'Tteokbokki', desc: 'Spicy rice cakes', price: '15 000 Ar' },
      { name: 'Samgyeopsal', desc: 'Grilled pork belly', price: '24 000 Ar' },
    ],
  },
  {
    name: 'Drinks — Boissons',
    items: [
      { name: 'Soju', desc: 'Traditional Korean spirit', price: '8 000 Ar' },
      { name: 'Sikhye', desc: 'Sweet rice punch', price: '5 000 Ar' },
      { name: 'Boricha', desc: 'Roasted barley tea', price: '4 000 Ar' },
    ],
  },
]

export default function Menu() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-24">
      <h1 className="font-heading text-5xl text-gold text-center mb-4">Our Menu</h1>
      <p className="text-gray-400 text-center mb-16 tracking-wider uppercase text-sm">Notre Carte</p>

      {categories.map(cat => (
        <div key={cat.name} className="mb-16">
          <h2 className="font-heading text-2xl text-white border-b border-gold/30 pb-3 mb-8">
            {cat.name}
          </h2>
          <div className="flex flex-col gap-6">
            {cat.items.map(item => (
              <div key={item.name} className="flex justify-between items-start">
                <div>
                  <p className="text-white font-medium">{item.name}</p>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
                <span className="text-gold font-medium ml-8 whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}