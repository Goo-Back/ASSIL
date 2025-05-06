import ProductCard from './ProductCard'

const products = [
  {
    name: 'Ras El Hanout',
    description: 'Mélange traditionnel d\'épices marocaines',
    price: 25,
    oldPrice: 30,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isPopular: true
  },
  {
    name: 'Safran Premium',
    description: 'Safran pur de Taliouine',
    price: 38,
    oldPrice: 45,
    rating: 5,
    image: 'https://images.unsplash.com/photo-1613126406781-c15fd8156607?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isPopular: true
  },
  {
    name: 'Cumin Bio',
    description: 'Cumin biologique moulu',
    price: 12,
    oldPrice: 15,
    rating: 4,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isPopular: true
  }
]

export default function ProductGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  )
}