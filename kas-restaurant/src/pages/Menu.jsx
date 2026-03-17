const categories = [
  {
    name: 'Gim-Bab',
    items: [
      { name: 'Yachet', desc: 'Maki Coréen Légumes', price: '14 500 Ar' },
      { name: 'Chamchi', desc: 'Maki Coréen Thon', price: '16 500 Ar' },
      { name: 'Haem', desc: 'Maki Coréen Jambon', price: '17 500 Ar' },
      { name: 'Cheese', desc: 'Maki Coréen Fromage', price: '17 500 Ar' },
    ],
  },
  {
    name: 'Ramen',
    items: [
      { name: 'Original', desc: 'Ramen Coréen Originaux', price: '14 500 Ar' },
      { name: 'Chamchi', desc: 'Ramen  Coréen Thon', price: '16 500 Ar' },
      { name: 'Haem', desc: 'Ramen Coréen Jambon', price: '17 500 Ar' },
      { name: 'Cheese', desc: 'Ramen Coréen Fromage', price: '17 500 Ar' },
      { name: 'Emoul', desc: 'Ramen Coréen Fruit de Mer', price: '19 500 Ar' },
    ],
  },
  {
    name: 'Tteok-bok-ki',
    items: [
      { name: 'Tteok-bok-ki', desc: 'Tteokbokki', price: '18 500 Ar' },
      { name: 'Chijeu Tteok-bok-ki', desc: 'Tteokbokki au fromage', price: '23 500 Ar' },
    ],
  },
  {
    name: 'Ja-Jang-Myeon',
    items: [
      { name: 'Ja-Jang-Myeon', desc: 'Soupes à la sauce soja noire', price: '19 500 Ar' },
    ],
  },
  {
    name: 'Fried Chicken',
    items: [
      { name: 'Fried Dak Tui-Gim 300g', desc: 'Poulet Frit 300g', price: '17 500 Ar' },
      { name: 'Fried Dak Tui-Gim 500g', desc: 'Poulet Frit 500g', price: '27 500 Ar' },
    ],
  },
  {
    name: 'Deep-fried and Braised Chicken',
    items: [
      { name: 'Dak Gang-Jeong 300g', desc: 'Poulet Frit et Braisé 300g', price: '18 500 Ar' },
      { name: 'Dak Gang-Jeong 500g', desc: 'Poulet Frit et Braisé 500g', price: '28 500 Ar' },
    ],
  },
  {
    name: 'Seasoned Fried Chicken',
    items: [
      { name: 'Yang-Nyum Dak Tui-Gim 300g', desc: 'Poulet Frit Assaisonné 300g', price: '28 500 Ar' },
      { name: 'Yang-Nyum Dak Tui-Gim 500g', desc: 'Poulet Frit Assaisonné 500g', price: '38 500 Ar' },
    ],
  },
  {
    name: 'French Fries',
    items: [
      { name: 'French Fries', desc: 'Frites', price: '7 500 Ar' },
    ],
  },
  {
    name: 'Chicken Wings',
    items: [
      { name: '4-pieces Chicken Wings and Fries', desc: 'Ailes de poulet 4 pièces + Frites', price: '9 500 Ar' },
    ],
  },
  {
    name: 'Grilled Pork Belly',
    items: [
      { name: 'Sam-Gyeop-Sal 300g', desc: 'Poitrine de porc grillée 300g', price: '24 000 Ar' },
    ],
  },
  {
    name: 'Pork Bulgogi',
    items: [
      { name: 'Dwaeji-Bulgogi', desc: 'Bulgogi de porc', price: '24 500 Ar' },
    ],
  },
  {
    name: 'Stir-fried Pork',
    items: [
      { name: 'Je-Youk Bok-Eum', desc: 'Porc Sauté epicée', price: '24 500 Ar' },
    ],
  },
  {
    name: 'Spicy Stir-fried Squid and Pork',
    items: [
      { name: 'O-Sam Bul-Go-Gi', desc: 'Calamar et Porc Sautés Epicés', price: '27 500 Ar' },
    ],
  },
  {
    name: 'Ham Stew',
    items: [
      { name: 'Haem budae-jjigae', desc: 'Ham Stew pour 2 personnes', price: '48 000 Ar' },
    ],
  },
  {
    name: 'Spicy Fish Soup',
    items: [
      { name: 'Mae-Un-Tang', desc: 'Soupe de Poisson Épicée', price: '48 000 Ar' },
    ],
  },
  {
    name: 'Tofu Stew',
    items: [
      { name: 'Dubu-Jeon-Gol', desc: 'Ragoût de Tofu', price: '48 000 Ar' },
    ],
  },
  {
    name: 'Beef Tripe Hot Pot',
    items: [
      { name: 'Gop-Chang Jean-Gol', desc: 'Ragoût d Abat', price: '48 000 Ar' },
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